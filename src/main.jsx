import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage/LandingPage";
import Projects from "./About/Projects";
import AboutUs from "./About/AboutUs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about/projects" element={<Projects />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
