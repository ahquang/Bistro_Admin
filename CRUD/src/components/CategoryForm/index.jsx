import MyButton from "../MyButton";
import { useState } from "react";
import "../../styles/components/_myform.scss";
import FormItem from "../FormItem";

const CategoryForm = ({ selectedCategory, onSubmit }) => {
    const [dataCategory, setDataCategory] = useState(
        selectedCategory || {
          name: "",
          description: "",
          icon: "",
        }
      );
    
      const handleOnChange =  (categoryKey) => (e) => {
        const newValue = e.target.value;
        setDataCategory({ ...dataCategory, [categoryKey]: newValue });
      };
    
      const handleClickSubmit = (e) => {
        e.preventDefault();
        onSubmit(dataCategory);
      };
    
      return (
        <div className="my-form">
          <form className="my-form--form" onSubmit={handleClickSubmit}>
            <FormItem
              label={"Category Name"}
              handleOnChange={handleOnChange("name")}
              value={dataCategory.name}
              required
            />
            <FormItem
              label={"Description"}
              handleOnChange={handleOnChange("description")}
              value={dataCategory.description}
              required
            />
            <FormItem
              label={"Category Icon"}
              handleOnChange={handleOnChange("icon")}
              value={dataCategory.icon}
              required
            />
            <div className="my-form--form--button">
              <MyButton>Save</MyButton>
            </div>
          </form>
        </div>
      );
}

export default CategoryForm