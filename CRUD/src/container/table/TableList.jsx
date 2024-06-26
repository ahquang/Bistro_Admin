import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE_SIZE } from "../../constants";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import MyButton from "../../components/MyButton";
import Pagination from "../../components/Pagination";
import detailIcon from "../../assets/icon/visibility_24px.svg";
import deleteIcon from "../../assets/icon/delete_24px.svg";
import updateIcon from "../../assets/icon/create_24px.svg";
import FormItem from "../../components/FormItem";
import "../../styles/pages/_main.scss";
import { getTableListAPI, deleteTableAPI } from "../../services/tables";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const TableList = () => {
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const page = ["Home /", "Tables"];

  const handleClickPageBar = (e) => {
    navigate("/table/list");
  };

  const fetchData = async () => {
    const dataAPI = await getTableListAPI();
    setDataTable(dataAPI);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteTable = async (id) => {
    await deleteTableAPI(id);
    fetchData();
  };
  const filteredItems = dataTable.filter(
    (item) =>
      item.time.includes(filterText.trim()) ||
      item.date.includes(filterText.trim()) 
  );

  const handleOnFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const totalPageCount = Math.ceil(filteredItems.length / DEFAULT_PAGE_SIZE);

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
          <h1>Tables</h1>
        </div>
        <span className="main--span">
          Showing {currentPage}-{totalPageCount} of {dataTable.length} items.
        </span>
        <div className="main__filter">
        <FormItem label={"Filter By Date & Time"} handleOnChange={handleOnFilterChange} />
        </div>
        <table className="main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Phone</th>
              <th>Total Person</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((table, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{table.name}</td>
                <td>{table.date}</td>
                <td>{table.time}</td>
                <td>{table.phone}</td>
                <td>{table.totalPerson}</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/table/detail/${table._id}`)}
                  />
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={() => navigate(`/table/update/${table._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDeleteTable(table._id);
                    }}
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

export default TableList;
