import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import CategoryForm from "../../components/CategoryForm/index.jsx";
import "../../styles/pages/_main.scss";
import { postCategoryAPI } from "../../services/categories.js";

const CategoryCreate = () => {
  const navigate = useNavigate();

  const page = ["Home /", "Category /", "Create Category"];

  const handleClickPageBar = (e) => {
    navigate("/category/list");
  };

  const handleAddCategory = async (newCategory) => {
    await postCategoryAPI(newCategory);
    navigate("/category/list");
  };

  return (
    <Layout>
      <div className="main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="main__title">
          <h1>Create Category</h1>
        </div>
        <CategoryForm onSubmit={handleAddCategory} />
      </div>
    </Layout>
  );
};

export default CategoryCreate;
