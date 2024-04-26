import React from "react";
import "../../styles/components/_formitem.scss";

const FormItem = ({ label, value, handleOnChange, required = true , type = "text"}) => {
  return (
    <div className="form-item">
      <label>{label}</label>
      <input
        type={type}
        onChange={handleOnChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default FormItem;
