import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage/LandingPage";
import Projects from "./About/Projects";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
 
        {/* <Route exact path="/" element={<Navbar/>}/> */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/About/Projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
