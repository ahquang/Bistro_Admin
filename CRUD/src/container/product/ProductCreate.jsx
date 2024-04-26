import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import ProductForm from "../../components/ProductForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { postProductAPI } from "../../services/products.js";

const ProductCreate = () => {
  const navigate = useNavigate();

  const page = ["Home /", "Product /", "Create Product"];

  const handleClickPageBar = (e) => {
    navigate("/");
  };
  
  const handleAddProduct = async (newProduct) => {
    await postProductAPI(newProduct);
    navigate("/product/list");
  };

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Create Product</h1>
        </div>
        <ProductForm onSubmit={handleAddProduct} />
      </div>
    </Layout>
  );
};

export default ProductCreate;
