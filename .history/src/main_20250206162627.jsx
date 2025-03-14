import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage/LandingPage";
import AddSuggestedArticle from "./LandingPage/News/AddSuggestedArticle";
import Admin from "./LandingPage/News/Admin";
import About from "./About/About";
import ServicesMain from "./Services/Services";
import GalleryMain from "./Gallery/page";
import 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/add-article" element={<AddSuggestedArticle />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery" element={<GalleryMain/>} />
        <Route path="/services" element={<ServicesMain/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
