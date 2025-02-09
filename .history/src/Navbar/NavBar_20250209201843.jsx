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
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✕
        </button>
        <ul className="sidebar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/services">Services</a></li>
          <li><a href="/#/Map">Map</a></li>
          <li><a href="/#/community">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
