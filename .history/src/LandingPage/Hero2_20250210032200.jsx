import React, { useEffect, useRef, useState } from 'react';
import './Hero2.css';
import { Link } from 'react-router-dom';

const Hero2 = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const SliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const timeDom = useRef(null);

  const images = [
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP5796.JPG?updatedAt=1739145703340",
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6807%20copy.JPG?updatedAt=1739145731456",
    "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2024-08-03-09-18-27%20(3).jpg?updatedAt=1739127821694",
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6268%20(2).JPG?updatedAt=1739145921855"
  ];

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    let loadedCount = 0;

    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Error loading image: ${images[i]}`);
        loadedCount++; // Proceed even if there’s an error
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.src = images[i];
    }

    if (imagesLoaded) {
      nextDom.current = document.getElementById('next');
      prevDom.current = document.getElementById('prev');
      carouselDom.current = document.querySelector('.carousel');
      SliderDom.current = carouselDom.current.querySelector('.carousel .list');
      thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');
      timeDom.current = document.querySelector('.carousel .time');

      if (thumbnailBorderDom.current) { 
        const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      }

      if (nextDom.current && prevDom.current) {
        nextDom.current.onclick = () => showSlider('next');
        prevDom.current.onclick = () => showSlider('prev');

        runNextAuto = setTimeout(() => {
          if (nextDom.current) nextDom.current.click();
        }, timeAutoNext);
      }
    }

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [imagesLoaded]);

  const showSlider = (type) => {
    if (!SliderDom.current || !thumbnailBorderDom.current || !carouselDom.current) return;

    const SliderItemsDom = SliderDom.current.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
      SliderDom.current.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      carouselDom.current.classList.add('next');
    } else {
      SliderDom.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.current.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.current.classList.remove('next', 'prev');
    }, timeRunning);
  };

  return (
    <div className="hero2">
      {imagesLoaded ? (
        <div className="carousel">
          <div className="carousel-list" ref={SliderDom}>
            <div className="item">
              <img src={images[0]} alt="Slide 1" />
            </div>
            <div className="item">
              <img src={images[1]} alt="Slide 2" />
            </div>
            <div className="item">
              <img src={images[2]} alt="Slide 3" />
            </div>
            <div className="item">
              <img src={images[3]} alt="Slide 4" />
            </div>
          </div>

          <div className="carousel-thumbnail" ref={thumbnailBorderDom}>
            <div className="item">
              <img src={images[0]} alt="Thumbnail 1" />
            </div>
            <div className="item">
              <img src={images[1]} alt="Thumbnail 2" />
            </div>
            <div className="item">
              <img src={images[2]} alt="Thumbnail 3" />
            </div>
            <div className="item">
              <img src={images[3]} alt="Thumbnail 4" />
            </div>
          </div>

          <button id="prev" className="carousel-button prev">Prev</button>
          <button id="next" className="carousel-button next">Next</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="hero-content">
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing things and be part of our community.</p>
        <Link to="/join" className="join-button">Join Us</Link>
      </div>
    </div>
  );
};

export default Hero2;
