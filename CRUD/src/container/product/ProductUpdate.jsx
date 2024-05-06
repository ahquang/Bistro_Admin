import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import ProductForm from "../../components/ProductForm/index.jsx";
import "../../styles/pages/_main.scss";
import {
  getProductDetailAPI,
  updateProductAPI,
} from "../../services/products.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const ProductUpdate = () => {
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

  const page = ["Home /", "Products /", `${selectedProduct.name} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate("/");
  };

  const handleUpdateProduct = (updatedProduct) => {
    const selectedProductRemoveId = Object.fromEntries(
      Object.entries(updatedProduct).slice(1)
    );
    updateProductAPI(selectedProductRemoveId, selectedProduct._id);
    navigate("/product/list");
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
          <h1>Update Product</h1>
        </div>
        <ProductForm
          selectedProduct={selectedProduct}
          onSubmit={handleUpdateProduct}
        />
      </div>
    </Layout>
  );
};

export default ProductUpdate;
