import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import ServicesMain from "./Services/Services";
import GalleryMain from "./Gallery/page";
import NewsPage from "./NewsPage/NewsPage";
import SuggestArticle from "./NewsPage/SuggestArticle";
import Map from "./Map/Map";
import co

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/gallery" element={<GalleryMain/>} />
        <Route path="/services" element={<ServicesMain/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/add-article" element={<SuggestArticle/>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
