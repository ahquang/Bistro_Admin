import React, { useState, useMemo, useEffect } from "react";
import { DEFAULT_PAGE_SIZE } from "../../constants/index.js";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import "../../styles/pages/_main.scss";
import deleteIcon from "../../assets/icon/delete_24px.svg";
import updateIcon from "../../assets/icon/create_24px.svg";
import {
  deleteCategoryAPI,
  getCategoryListAPI,
} from "../../services/categories.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const CategoryList = () => {
  const navigate = useNavigate();
  const [dataCategory, setDataCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const categoryData = await getCategoryListAPI();
    setDataCategory(categoryData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const page = ["Home /", "Categories"];

  const handleClickPageBar = (e) => {
    navigate("/category/list");
  };

  const handleDelete = async (id) => {
    await deleteCategoryAPI(id);
    fetchData();
  };
  const totalPageCount = Math.ceil(dataCategory.length / DEFAULT_PAGE_SIZE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return dataCategory.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataCategory]);

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
          <h1>Categories</h1>
        </div>
        <div className="main--btn">
          <MyButton onClick={() => navigate("/category/create")}>
            Create category
          </MyButton>
        </div>
        <span className="main--span">
          Showing {currentPage}-{totalPageCount} of {dataCategory.length} items.
        </span>
        <table className="main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={() => navigate(`/category/update/${category._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDelete(category._id);
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
            totalCount={dataCategory.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryList;
