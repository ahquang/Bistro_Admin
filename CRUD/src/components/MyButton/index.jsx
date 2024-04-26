import React from "react";
import "../../styles/components/_mybutton.scss";

const MyButton = ({ onClick, className, children, type = "submit" }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default MyButton;
