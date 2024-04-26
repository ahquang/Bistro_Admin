import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader.js";
import "../../styles/components/_myform.scss";
import FormItem from "../FormItem";
import MyButton from "../MyButton";
import { getCategoryListAPI } from "../../services/categories";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const MyForm = ({ selectedProduct, onSubmit }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState(
    selectedProduct || {
      name: "",
      price: "",
      category: "",
      ingredients: "",
      image: "",
    }
  );

  useEffect(() => {
    const fetchCategoryData = async () => {
      const categoryData = await getCategoryListAPI();
      setDataCategory(categoryData);
      setLoading(false);
    };
    fetchCategoryData();
  }, []);

  const handleOnChange = (productKey) => (e) => {
    const newValue = e.target.value;
    setDataProduct({ ...dataProduct, [productKey]: newValue });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    setDataProduct({ ...dataProduct });
    onSubmit(dataProduct);
  };

  if (loading) {
    return (
      <PulseLoader
        color="gray"
        size={15}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        <FormItem
          label={"Name"}
          handleOnChange={handleOnChange("name")}
          value={dataProduct.name}
          required
        />
        <FormItem
          label={"Price"}
          handleOnChange={handleOnChange("price")}
          value={dataProduct.price}
          type="number"
          required
        />
        <label className="category__title">Category</label>
        <select
          className="category__option"
          value={dataProduct.category}
          onChange={handleOnChange("category")}
          required
        >
          <option>--Choose a category--</option>
          {dataCategory.map((category, index) => (
            <option key={index}>{category.name}</option>
          ))}
        </select>
        <FormItem
          label={"Ingredients"}
          handleOnChange={handleOnChange("ingredients")}
          value={dataProduct.ingredients}
          required
        />
        <FormItem
          label={"Image"}
          type="text"
          handleOnChange={handleOnChange("image")}
          value={dataProduct.image}
          required
        />
        {/* {imageUrl && <img src={imageUrl} alt="Selected" style={{ maxWidth: '300px' }} />} */}
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
