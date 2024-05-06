import React, { useState, useMemo, useEffect } from "react";
import { DEFAULT_PAGE_SIZE } from "../../constants/index.js";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";
import "../../styles/pages/_main.scss";
import detailIcon from "../../assets/icon/visibility_24px.svg";
import deleteIcon from "../../assets/icon/delete_24px.svg";
import updateIcon from "../../assets/icon/create_24px.svg";
import { deleteProductAPI, getProductListAPI } from "../../services/products.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const ProductList = () => {
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const productData = await getProductListAPI();
    setDataProduct(productData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const page = ["Home /", "Products"];

  const handleClickPageBar = (e) => {
    navigate("/");
  };

  const handleDelete = async (id) => {
    await deleteProductAPI(id);
    fetchData();
  };
  const totalPageCount = Math.ceil(dataProduct.length / DEFAULT_PAGE_SIZE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return dataProduct.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataProduct]);

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
          <h1>Products</h1>
        </div>
        <div className="main--btn">
          <MyButton onClick={() => navigate("/product/create")}>
            Create product
          </MyButton>
        </div>
        <span className="main--span">
          Showing {currentPage}-{totalPageCount} of {dataProduct.length} items.
        </span>
        <table className="main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/product/detail/${product._id}`)}
                  />
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={() => navigate(`/product/update/${product._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDelete(product._id);
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
            totalCount={dataProduct.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
