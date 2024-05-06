import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../../styles/components/_layout.scss";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
 
  return (
    <div className="layout">
      <NavBar />
      <div className="container">
        <Sidebar/>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
