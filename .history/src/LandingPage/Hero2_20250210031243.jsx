import React, { useEffect, useRef, useState } from 'react';
import './Hero2.css';
import { Link } from 'react-router-dom';

const Hero2 = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const SliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let autoPlayInterval;

  useEffect(() => {
    const imageUrls = [
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP5796.JPG?updatedAt=1739145703340",
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6807%20copy.JPG?updatedAt=1739145731456",
      "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2024-08-03-09-18-27%20(3).jpg?updatedAt=1739127821694",
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6268%20(2).JPG?updatedAt=1739145921855"
    ];

    let loadedImages = [];
    let loadPromises = imageUrls.map(imageUrl => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = () => {
          console.error(`Error loading image: ${imageUrl}`);
          resolve(null); // Resolve with null to indicate failure but keep going
        };
        img.src = imageUrl;
      });
    });

    Promise.all(loadPromises).then(results => {
      loadedImages = results.filter(url => url !== null); // Filter out failed images
      setImages(loadedImages);
      setImagesLoaded(true); // Load even with missing images
      if (loadedImages.length < imageUrls.length) {
          console.warn("Some images failed to load. Carousel might not display correctly.");
      }
    });

  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (imagesLoaded) {
      nextDom.current = document.getElementById('next');
      prevDom.current = document.getElementById('prev');
      carouselDom.current = document.querySelector('.carousel');
      SliderDom.current = carouselDom.current.querySelector('.carousel .list');
      thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');

      if (nextDom.current && prevDom.current) {
        nextDom.current.onclick = () => showSlider('next');
        prevDom.current.onclick = () => showSlider('prev');

        autoPlayInterval = setInterval(() => {
          if (nextDom.current) nextDom.current.click();
        }, timeAutoNext);
      }

      // Initialize thumbnail active state (optional)
      if (thumbnailBorderDom.current) {
        thumbnailBorderDom.current.children[0].classList.add('active');
      }
    }

    return () => {
      clearInterval(autoPlayInterval); // Clear interval on unmount
    };
  }, [imagesLoaded]);

  const showSlider = (type) => {
    if (!SliderDom.current || !thumbnailBorderDom.current || !carouselDom.current) return;

    const numSlides = images.length; // Get the number of slides
    let nextSlide = currentSlide;

    if (type === 'next') {
      nextSlide = (currentSlide + 1) % numSlides;
    } else {
      nextSlide = (currentSlide - 1 + numSlides) % numSlides; // Handle negative indices
    }

    setCurrentSlide(nextSlide);  // Update current slide index

    SliderDom.current.style.transform = `translateX(-${nextSlide * 100}%)`;

    // Update thumbnail active state
    if (thumbnailBorderDom.current) {
      const thumbnails = thumbnailBorderDom.current.children;
      for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
      }
      thumbnails[nextSlide].classList.add('active');
    }
  };


  if (!imagesLoaded) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="carousel" ref={carouselDom}>
        <div className="list" ref={SliderDom} style={{width: `${images.length * 100}%`}}> {/* Set width dynamically */}
          {images.map((image, index) => (
            <div className="item" key={index} style={{width: `${100 / images.length}%`}}> {/* Set width dynamically */}
              <img src={image} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="author">WELCOME TO</div>
                <div className="title">NDOTO FOREST</div>
                <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. 
                </div>
                <div className="buttons">
                  <Link to="./about">
                    <button>SEE MORE</button>
                  </Link>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailBorderDom}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev">{'<'}</button>
          <button id="next">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;