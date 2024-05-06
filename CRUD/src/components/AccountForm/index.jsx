import React from "react";
import accountTheme from "../../assets/account/accountTheme.png";
import "../../styles/components/_account.scss";
const AccountForm = ({ label, children }) => {
  return (
    <div className="account">
      <div className="account__container">
        <img src={accountTheme} />
        <form className="account__container__form">
          <h2>{label}</h2>
          {children}
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
