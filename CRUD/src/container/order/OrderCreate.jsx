import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import OrderForm from "../../components/OrderForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { postOrderAPI } from "../../services/orders.js";

const OrderCreate = () => {
  const navigate = useNavigate();

  const page = ["Home /", "Order /", "Create Order"];

  const handleClickPageBar = (e) => {
    navigate("/");
  };
  
  const handleAddOrder = async (newOrder) => {
    await postOrderAPI(newOrder);
    navigate("/order/list");
  };

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Create Order</h1>
        </div>
        <OrderForm onSubmit={handleAddOrder} />
      </div>
    </Layout>
  );
};

export default OrderCreate;
