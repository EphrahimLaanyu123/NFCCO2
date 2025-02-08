import React, { useState } from 'react';
import './NavBar.css'; // Make sure to create this CSS file for custom styles

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="#">More</a>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/team">Team</a>
              <a href="/contact">Contact</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
