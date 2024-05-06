import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import React from "react";
import "../../styles/components/_navbar.scss";
import homeIcon from "../../assets/icon/home.png";
import settingIcon from "../../assets/icon/setting.png";

const NavBar = () => {
  const navigate = useNavigate();
  const userEmail = JSON.parse(localStorage.user).email;

  async function handleSignOut() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="nav-bar">
      <ul className="nav-bar__left">
        <li className="nav-bar__left__brand">
          <span>Bistro Admin</span>
        </li>
        <li className="nav-bar__left__menu">
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </li>
        <li className="nav-bar__left__menu">
          <img src={settingIcon} alt="" />
          <span>Setting</span>
        </li>
      </ul>
      <ul className="nav-bar__right">
        <li className="nav-bar__right__menu">
          <div>
            <i class="bi bi-person-circle"></i>
            <span>{userEmail}</span>
          </div>
        </li>
        <li
          className="nav-bar__right__menu"
          onClick={() => handleSignOut()}
        >
          <i class="bi bi-box-arrow-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
