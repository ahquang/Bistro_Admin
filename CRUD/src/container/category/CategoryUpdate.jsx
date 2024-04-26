import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import CategoryForm from "../../components/CategoryForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { getCategoryDetailAPI,updateCategoryAPI } from "../../services/categories.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const CategoryUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentCategoryId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await getCategoryDetailAPI(currentCategoryId);
      setSelectedCategory(categoryData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const page = ["Home /", "Categorys /", `${selectedCategory.name} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate("/category/list");
  };

  const handleUpdateCategory = (updatedCategory) => {
    const selectedCategoryRemoveId = Object.fromEntries(
      Object.entries(updatedCategory).slice(1)
    );
    updateCategoryAPI(selectedCategoryRemoveId, selectedCategory._id);
    navigate("/category/list");
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
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Update Category</h1>
        </div>
        <CategoryForm
          selectedCategory={selectedCategory}
          onSubmit={handleUpdateCategory}
        />
      </div>
    </Layout>
  );
};

export default CategoryUpdate;

