import React from "react";
import "./Navbar.css";
import logo from "../assets/logo/nobg_image1-0_copy_1.png"; // Replace with the actual path to your logo image

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo and Title */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">NFCCO</h1>
      </div>

      {/* Center: Links */}
      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="about" className="navbar-link">About</a>
        <a href="#services" className="navbar-link">Services</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>

      {/* Right: Menu Bar and Search */}
      <div className="navbar-right">
        <div className="navbar-search">
          <i className="fas fa-search"></i> {/* FontAwesome search icon */}
        </div>
        <div className="navbar-menu">
          <i className="fas fa-bars"></i> {/* FontAwesome menu bar icon */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
