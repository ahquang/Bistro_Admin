import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import OrderForm from "../../components/OrderForm/index.jsx";
import "../../styles/pages/_main.scss";
import { getOrderDetailAPI,updateOrderAPI } from "../../services/orders.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const OrderUpdate = () => {
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
  console.log(selectedOrder);
  const page = ["Home /", "Orders /", `${selectedOrder._id} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate("/order/list");
  };

  const handleUpdateOrder = (updatedOrder) => {
    const selectedOrderRemoveId = Object.fromEntries(
      Object.entries(updatedOrder).slice(1)
    );
    updateOrderAPI(selectedOrderRemoveId, selectedOrder._id);
    navigate(`/order/detail/${selectedOrder._id}`);
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
          <h1>Update Order Status</h1>
        </div>
        <OrderForm
          selectedOrder={selectedOrder}
          onSubmit={handleUpdateOrder}
        />
      </div>
    </Layout>
  );
};

export default OrderUpdate;

