import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="/">Home</a></li>
          <div className="divider"></div>
          <li><a href="/#/about">About</a></li>
          <div className="divider"></div>
          <li><a href="/#/services">Services</a></li>
          <div className="divider"></div>
          <li><a href="/#/Map">Map</a></li>
          <div className="divider"></div>
          <li><a href="/#/community">Community</a></li>
        </ul>

        {/* Footer */}
        <div className="sidebar-footer">
          <img
            src="https://ik.imagekit.io/fcuzgktdi/assets/logo/nobg_image1-0_copy_1.png?updatedAt=1735723695400"
            alt="NFCCO Logo"
            className="footer-logo"
          />
          <p className="footer-text">NFCCO</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;