import React, { useState } from "react";
import "./BlogPreview.css"; 
import image1 from "../assets/_KGP6807.JPG";
import image2 from "../assets/_KGP5985.JPG";
import image3 from "../assets/pexels-thu-trang-1190570-2265090.jpg";
import image4 from "../assets/_KGP6196.JPG";
import northeast from "../assets/logo/north_east_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";

const conservancyArticles = [
  {
    title: "Exploring Ndoto's Best Trails",
    summary: "A guide to the most scenic trails, including difficulty levels, what to expect, and tips for first-time hikers.",
    image: image1,
  },
  {
    title: "A Day in the Life of Lizard",
    summary: "Dive into the daily life of a key animal species found in the conservancy, complete with fun facts, photos, and conservation efforts.",
    image: image2, 
  },
  {
    title: "Eco-Friendly Journey Today",
    summary: "Tips for visitors and locals on reducing their carbon footprint, like reusable water bottles, carpooling, or planting native plants.",
    image: image3,
  },
  {
    title: "From Idea to Ecosystem",
    summary: "A brief overview of how the conservancy came to be, notable milestones, and its impact on the community and biodiversity.",
    image: image4,
  },
];

function BlogPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="blog-preview">
    <div className="blog-previe-top">
        <p>[Blog]</p>
        <button>See more blogs</button>
    </div>
    <div className="blog-preview-container">
      {conservancyArticles.map((article, index) => (
        <div
          key={index}
          className={`blog-card ${
            hoveredIndex === null
              ? index === 0
                ? "blog-card-large"
                : "blog-card-small"
              : hoveredIndex === index
              ? "blog-card-large"
              : "blog-card-small"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="blog-card-image"
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <img
              src={northeast}
              alt="Northeast Icon"
              className="northeast-icon"
            />
          </div>
          <div className="blog-card-content">
            <h3 className="blog-card-title">{article.title}</h3>
            <p
              className={`blog-card-summary ${
                hoveredIndex === null
                  ? index === 0
                    ? "show-summary"
                    : "hide-summary"
                  : hoveredIndex === index
                  ? "show-summary"
                  : "hide-summary"
              }`}
            >
              {article.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}

export default BlogPreview;
