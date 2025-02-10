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

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  const images = [
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP5796.JPG?updatedAt=1739145703340",
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6807%20copy.JPG?updatedAt=1739145731456",
    "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2024-08-03-09-18-27%20(3).jpg?updatedAt=1739127821694",
    "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6268%20(2).JPG?updatedAt=1739145921855"
  ];

  useEffect(() => {
    let loadedCount = 0;

    images.forEach(image => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Error loading image: ${image}`);
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.src = image;
    });

    if (imagesLoaded) {
      nextDom.current = document.getElementById('next');
      prevDom.current = document.getElementById('prev');
      carouselDom.current = document.querySelector('.carousel');
      SliderDom.current = carouselDom.current.querySelector('.carousel .list');
      thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');
      timeDom.current = document.querySelector('.carousel .time');

      const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
      thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

      nextDom.current.onclick = () => showSlider('next');
      prevDom.current.onclick = () => showSlider('prev');

      runNextAuto = setTimeout(() => {
        nextDom.current.click();
      }, timeAutoNext);
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
      carouselDom.current.classList.remove('next');
      carouselDom.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);
  };

  if (!imagesLoaded) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="carousel">
      {/* Slider List */}
      <div className="list" ref={SliderDom}>
        <div className="item">
          <img src={images[0]} alt="Slide 1" />
          <div className="content">
            <div className="author">WELCOME TO</div>
            <div className="title">NDOTO FOREST</div>
            <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="buttons">
              <Link to="./about">
                <button>SEE MORE</button>
              </Link>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={images[1]} alt="Slide 2" />
          <div className="content">
            <div className="author">WELCOME TO</div>
            <div className="title">NDOTO FOREST</div>
            <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={images[2]} alt="Slide 3" />
          <div className="content">
            <div className="author">WELCOME TO</div>
            <div className="title">NDOTO FOREST</div>
            <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={images[3]} alt="Slide 4" />
          <div className="content">
            <div className="author">WELCOME TO</div>
            <div className="title">NDOTO FOREST</div>
            <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
