import React from "react";
import "./MapPreview.css"; // Optional CSS file for styling
import image1 from "../assets/_KGP6807.JPG";
import image2 from "../assets/_KGP5985.JPG";
import image3 from "../assets/pexels-thu-trang-1190570-2265090.jpg";
import image4 from "../assets/_KGP6196.JPG";

const conservancyArticles = [
  {
    title: "Exploring Ndoto's Best Trails",
    summary:
      "A guide to the most scenic trails, including difficulty levels, what to expect, and tips for first-time hikers.",
    image: image1,
    date: "2024-12-01",
  },
  {
    title: "A Day in the Life of Lizard",
    summary:
      "Dive into the daily life of a key animal species found in the conservancy, complete with fun facts, photos, and conservation efforts.",
    image: image2,
    date: "2024-11-20",
  },
  {
    title: "Eco-Friendly Journey Today",
    summary:
      "Tips for visitors and locals on reducing their carbon footprint, like reusable water bottles, carpooling, or planting native plants.",
    image: image3,
    date: "2024-10-15",
  },
  {
    title: "From Idea to Ecosystem",
    summary:
      "A brief overview of how the conservancy came to be, notable milestones, and its impact on the community and biodiversity.",
    image: image4,
    date: "2024-09-10",
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const ConservancyArticles = () => {
  return (
    <div className="conservancy-container">
      <h2 className="latest-news-title">LATEST NEWS</h2>
      {conservancyArticles.map((article, index) => (
        <div key={index} className="article-card">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-content">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-date">{formatDate(article.date)}</p>
            <p className="article-summary">{article.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConservancyArticles;
