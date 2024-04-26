import React from "react";
import "../../styles/components/_pagebar.scss";

const PageBar = ({ page = [], handleOnClick }) => {
  return (
    <div className="page-bar">
      <ul>
        {page.map((item, index) => {
          const isDisabled = index === page.length - 1 ? "disabled" : "";
          return (
            <li key={index}>
              <button
                className={isDisabled}
                onClick={handleOnClick}
                disabled={isDisabled}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageBar;
