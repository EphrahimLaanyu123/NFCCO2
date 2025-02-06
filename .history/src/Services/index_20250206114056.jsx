// index.js
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { data } from "./data"; // Import the data
import "/home/user/nfcco/src/Services/style.module.scss"; // Ensure you have some base styling

const Card = ({ title, description, imageUrl, progress, range, targetScale }) => {
  // Ensure progress and range are valid values
  const scale = useTransform(progress || 0, range || [0, 1], [1, targetScale]);

  return (
    <motion.div
      className="card"
      style={{ scale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null); // To track the container for scroll
  const { scrollYProgress } = useScroll({
    container: containerRef, // Ensure you're tracking scroll within the right container
  });

  const range = [0, 1]; // Adjust based on how you want the animation to progress
  const targetScale = 1.5; // Define your desired scale

  return (
    <div className="services-container" ref={containerRef}>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          progress={scrollYProgress}
          range={range}
          targetScale={targetScale}
        />
      ))}
    </div>
  );
};

export default Services;
