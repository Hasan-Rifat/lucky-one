import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="main-menu">
        <div className="container">
          <img src={logo} alt="" />
          <div className="menu">
            <a href="/home">Home</a>
            <a href="/Orders">Orders</a>
            <a href="/Dashboard">Dashboard</a>
            <a href="/Login">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
