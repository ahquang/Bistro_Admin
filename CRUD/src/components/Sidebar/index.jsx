import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/icon/dashboard.png";
import "../../styles/components/_sidebar.scss";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const [activeIndex, setActiveIndex] = useState(() => {
    const initIndex = window.location.pathname.includes("product")
      ? 0
      : window.location.pathname.includes("category")
      ? 1
      : window.location.pathname.includes("table")
      ? 2
      : window.location.pathname.includes("order")
      ? 3
      : window.location.pathname.includes("contact")
      ? 4
      : 0;
    return initIndex;
  });

  useEffect(() => {
    setMenuVisible(() =>
      window.location.pathname.includes("product")
        ? true
        : window.location.pathname.includes("category")
        ? true
        : window.location.pathname.includes("table")
        ? true
        : window.location.pathname.includes("order")
        ? true
        : window.location.pathname.includes("contact")
        ? true
        : false
    );
  }, []);
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
          <li className={activeIndex === 0 ? "active" : ""}>
            <Link to={"/product/list"} onClick={() => setActiveIndex(0)}>
              Product
            </Link>
          </li>
          <li className={activeIndex === 1 ? "active" : ""}>
            <Link to={"/category/list"} onClick={() => setActiveIndex(1)}>
              Category
            </Link>
          </li>
          <li className={activeIndex === 2 ? "active" : ""}>
            <Link
              to={"/table/list"}
              onClick={() => setActiveIndex(2)}
            >
              Table
            </Link>
          </li>
          <li className={activeIndex === 3 ? "active" : ""}>
            <Link
              to={"/order/list"}
              onClick={() => setActiveIndex(3)}
            >
              Order
            </Link>
          </li>
          <li className={activeIndex === 4 ? "active" : ""}>
            <Link
              to={"/contact/list"}
              onClick={() => setActiveIndex(4)}
            >
              Contact
            </Link>
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
