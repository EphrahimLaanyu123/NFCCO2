import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            MyLogo
          </a>
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#/about">About</a></li>
            <li><a href="/#/services">Services</a></li>
            <li><a href="/#/Map">Map</a></li>
            <li><a href="/#/community">Community</a></li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✕
        </button>
        <ul className="sidebar-links">
          <li><a href="/" onClick={toggleSidebar}>Home</a></li>
          <li><a href="/#/about" onClick={toggleSidebar}>About</a></li>
          <li><a href="/#/services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="/#/Map" onClick={toggleSidebar}>Map</a></li>
          <li><a href="/#/community" onClick={toggleSidebar}>Community</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;