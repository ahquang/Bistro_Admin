import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_main.scss";
import { deleteOrderAPI, getOrderDetailAPI } from "../../services/orders.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const OrderDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedOrder, setSelectedOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentOrderId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getOrderDetailAPI(currentOrderId);
      setSelectedOrder(orderData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteBtn = () => {
    deleteOrderAPI(selectedOrder._id);
    navigate("/order/list");
  };
  const page = ["Home /", "Orders /", selectedOrder._id];

  const handleClickPageBar = (e) => {
    navigate("/order/list");
  };

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
          <h1>{selectedOrder.name}</h1>
        </div>
        <div className="main__detail">
          <div className="main__detail__btn">
            <MyButton
              className="main__detail__btn__update"
              onClick={() => navigate(`/order/update/${selectedOrder._id}`)}
            >
              Update Status
            </MyButton>
            <MyButton
              className="main__detail__btn__delete"
              onClick={handleDeleteBtn}
            >
              Delete
            </MyButton>
          </div>
          <table className="main__detail--table">
            <tr>
              <th>ID</th>
              <td>{selectedOrder._id}</td>
            </tr>
            <tr>
              <th>Table number</th>
              <td>{selectedOrder.tableNumber}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{selectedOrder.date}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{selectedOrder.time}</td>
            </tr>
            <tr>
              <th>Items</th>
              <td>
                <table>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  {selectedOrder.items.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.price}$</td>
                      <td>{data.amount}</td>
                    </tr>
                  ))}
                </table>
              </td>
            </tr>
            <tr>
              <th>Total Items</th>
              <td>{selectedOrder.itemCount}</td>
            </tr>
            <tr>
              <th>Total Price</th>
              <td>{selectedOrder.totalAmount}$</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{selectedOrder.status}</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetail;
