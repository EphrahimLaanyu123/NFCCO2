import React from "react";
import { projects } from "./data";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          style={{ backgroundColor: project.color }}
          className="p-4 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <img src={project.src} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-2" />
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
