import React, { useState, useMemo, useEffect } from "react";
import { DEFAULT_PAGE_SIZE } from "../../constants/index.js";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import FormItem from "../../components/FormItem/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import "../../styles/pages/_main.scss";
import detailIcon from "../../assets/icon/visibility_24px.svg";
import { getOrderListAPI } from "../../services/orders.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const OrderList = () => {
  const navigate = useNavigate();
  const [dataOrder, setDataOrder] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const orderData = await getOrderListAPI();
    setDataOrder(orderData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const page = ["Home /", "Orders"];

  const handleClickPageBar = (e) => {
    navigate("/");
  };
  console.log(dataOrder);
  const filteredItems = dataOrder.filter(
    (item) =>
      item.time.includes(filterText.trim()) ||
      item.date.includes(filterText.trim()) 
  );

  const handleOnFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const totalPageCount = Math.ceil(dataOrder.length / DEFAULT_PAGE_SIZE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return filteredItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredItems]);

  if (loading) {
    return (
      <Layout>
        <PulseLoader
          color="gray"
          size={15}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="main__title">
          <h1>Orders</h1>
        </div>
        <span className="main--span">
          Showing {currentPage}-{totalPageCount} of {dataOrder.length} items.
        </span>
        <div className="main__filter">
        <FormItem label={"Filter"} handleOnChange={handleOnFilterChange} />
        </div>
        <table className="main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Table Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Total Items</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.tableNumber}</td>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td>{order.itemCount}</td>
                <td>{order.totalAmount}$</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/order/detail/${order._id}`)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="main__pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredItems.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default OrderList;
