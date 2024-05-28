import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/icon/dashboard.png";
import "../../styles/components/_sidebar.scss";

const Sidebar = () => {
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

  
  return (
    <div className="sidebar">
        <ul className="menu">
          <li className={activeIndex === 0 ? "active" : ""}>
            <Link to={"/product/list"} onClick={() => setActiveIndex(0)}>
            <i class="bi bi-backpack4"></i> Product
            </Link>
          </li>
          <li className={activeIndex === 1 ? "active" : ""}>
            <Link to={"/category/list"} onClick={() => setActiveIndex(1)}>
            <i class="bi bi-tags"></i> Category
            </Link>
          </li>
          <li className={activeIndex === 2 ? "active" : ""}>
            <Link
              to={"/table/list"}
              onClick={() => setActiveIndex(2)}
            >
              <i class="bi bi-file-earmark-spreadsheet"></i> Table
            </Link>
          </li>
          <li className={activeIndex === 3 ? "active" : ""}>
            <Link
              to={"/order/list"}
              onClick={() => setActiveIndex(3)}
            >
              <i class="bi bi-newspaper"></i> Order
            </Link>
          </li>
          <li className={activeIndex === 4 ? "active" : ""}>
            <Link
              to={"/contact/list"}
              onClick={() => setActiveIndex(4)}
            >
              <i class="bi bi-envelope-paper"></i> Contact
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;
