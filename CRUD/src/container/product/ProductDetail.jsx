import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_main.scss";
import {
  deleteProductAPI,
  getProductDetailAPI,
} from "../../services/products.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentProductId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductDetailAPI(currentProductId);
      setSelectedProduct(productData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteBtn = () => {
    deleteProductAPI(selectedProduct._id);
    navigate("/product/list");
  };
  const page = ["Home /", "Products /", selectedProduct.name];

  const handleClickPageBar = (e) => {
    navigate("/");
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
          <h1>{selectedProduct.name}</h1>
        </div>
        <div className="main__detail">
          <div className="main__detail__btn">
            <MyButton
              className="main__detail__btn__update"
              onClick={() => navigate(`/product/update/${selectedProduct._id}`)}
            >
              Update
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
              <td>{selectedProduct._id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedProduct.name}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{selectedProduct.price}$</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{selectedProduct.category}</td>
            </tr>
            <tr>
              <th>Ingredients</th>
              <td>{selectedProduct.ingredients}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td><img src={selectedProduct.image} alt="" /></td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
