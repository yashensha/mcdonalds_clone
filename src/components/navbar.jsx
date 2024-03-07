import React from "react";
import navBrand from "../assets/img/navbrand.jpeg";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <img className="brand-img" src={navBrand} alt="Brand icon" />
        <div className="nav-top">
          <div className="nav-top-left"></div>
          <div className="nav-top-right"></div>
        </div>
        <div className="nav-bottom"></div>
      </div>
    </nav>
  );
};
