import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage/LandingPage";
import Projects from "./About/Projects";
import AddSuggestedArticle from "./News/AddSuggestedArticle";
import Admin from "./News/Admin";
import 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about/projects" element={<Projects />} />
        <Route path="/add-article" element={<AddSuggestedArticle />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
