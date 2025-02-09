import React, { useState } from 'react';
import './NavBar.css'; 
import { Menu, X } from 'lucide-react'; // Using icons for better visuals

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar-logo">LOGO</div>
        <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isSidebarOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/services">Services</a></li>
          <li><a href="/#/Map">Map</a></li>
          <li><a href="/#/community">Community</a></li>
        </ul>
      </nav>

      {/* Overlay for better UX when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
l