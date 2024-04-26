import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import '../../styles/components/_layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
