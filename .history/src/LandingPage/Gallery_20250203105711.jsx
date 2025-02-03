import React from "react";
import "./Gallery.css";


// Combine local and external images
const initialImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497",
  "https://ik.imagekit.io/fcuzgktdi/assets/pexels-joe-arts-1830507-3505000.jpg?updatedAt=1735723666739",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__scroll">
        {initialImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-img-${index}`}
            className="gallery__image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
