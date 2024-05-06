import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/icon/dashboard.png";
import "../../styles/components/_sidebar.scss";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-toggle" onClick={toggleMenu}>
        <img src={dashboardIcon} alt="icon" />
        <span>Dashboard</span>
      </div>
      <div className={`menu ${menuVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <Link to={"/product/list"}>Product</Link>
          </li>
          <li>
            <Link to={"/category/list"}>Category</Link>
          </li>
          <li>
            <Link to={"/table/list"}>Table</Link>
          </li>
          <li>
            <Link to={"/order/list"}>Order</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-toggle">
        <img src={dashboardIcon} alt="icon" />
        <span>Analytics</span>
      </div>
      <div className="sidebar-toggle">
        <img src={dashboardIcon} alt="icon" />
        <span>Datagrid</span>
      </div>
      <div className="sidebar-toggle">
        <img src={dashboardIcon} alt="icon" />
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Sidebar;
