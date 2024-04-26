import { Link } from "react-router-dom";
import React from "react";
import "../../styles/components/_navbar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar__left">
        <li className="nav-bar__left__brand">My application</li>
        <li className="nav-bar__left__menu">
          <Link to={"/product/list"}>Product</Link>
        </li>
        <li className="nav-bar__left__menu">
          <Link to={"/table/list"}>Table</Link>
        </li>
        <li className="nav-bar__left__menu">
          <Link to={"/category/list"}>Category</Link>
        </li>
        <li className="nav-bar__left__menu">
          <Link to={"/order/list"}>Order</Link>
        </li>
      </ul>
      <ul className="nav-bar__right">
        <li className="nav-bar__right__menu">Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
