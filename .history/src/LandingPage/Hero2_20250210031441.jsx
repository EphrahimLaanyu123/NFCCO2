import React, { useEffect, useRef, useState } from 'react';
import './Hero2.css';
// import Image1 from '../assets/AboutPage/_KGP6268 (2).JPG';
// import Image2 from '../assets/AboutPage/_KGP5796.JPG';
// import Image3 from '../assets/PHOTO-2024-08-03-09-18-27 (3).jpg';
// import Image4 from '../assets/_KGP6807.JPG';
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

  useEffect(() => {
    const images = [
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP5796.JPG?updatedAt=1739145703340",
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6807%20copy.JPG?updatedAt=1739145731456",
      "https://ik.imagekit.io/fcuzgktdi/assets/PHOTO-2024-08-03-09-18-27%20(3).jpg?updatedAt=1739127821694",
      "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6268%20(2).JPG?updatedAt=1739145921855"
    ];
        let loadedCount = 0;

    images.forEach(image => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => { // Handle image loading errors
        console.error(`Error loading image: ${image}`);
        loadedCount++; // Still count the error, so it doesn't block loading
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      }
      img.src = image;
    });

    if (imagesLoaded) {
      nextDom.current = document.getElementById('next');
      prevDom.current = document.getElementById('prev');
      carouselDom.current = document.querySelector('.carousel');
      SliderDom.current = carouselDom.current.querySelector('.carousel .list');
      thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');
      timeDom.current = document.querySelector('.carousel .time');

      if (thumbnailBorderDom.current) { // Check if the element exists before trying to manipulate it
        const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      }

      if (nextDom.current && prevDom.current) { // Check if elements exist before attaching listeners
        nextDom.current.onclick = () => showSlider('next');
        prevDom.current.onclick = () => showSlider('prev');

        runNextAuto = setTimeout(() => {
          if (nextDom.current) nextDom.current.click(); // Check before click
        }, timeAutoNext);
      }
    }

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [imagesLoaded]);

  const showSlider = (type) => {
    if (!SliderDom.current || !thumbnailBorderDom.current || !carouselDom.current) return; // Check if elements are available

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
      if (nextDom.current) nextDom.current.click(); // Check before click
    }, timeAutoNext);
  };

  if (!imagesLoaded) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>

      {/* Carousel */}
      <div className="carousel" ref={carouselDom}>
        {/* List Items */}
        <div className="list" ref={SliderDom}>
          <div className="item">
            <img src={images[0]} alt="Slide 1" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. 
              </div>
              <div className="buttons">
                <Link to="./about">                <button>SEE MORE</button>
                </Link>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={Images[1]}alt="Slide 2" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={Images[2]}alt="Slide 3" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={Images[3]}alt="Slide 4" />
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION ORGANIZATION</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="thumbnail" ref={thumbnailBorderDom}>
          <div className="item">
            <img src={Images[0]} alt="Thumbnail 1" />
            <div className="content">
              {/* <div className="thumb-title">Name Slider</div>
              <div className="thumb-description">Description</div> */}
            </div>
          </div>
          <div className="item">
            <img src={Images[1]} alt="Thumbnail 2" />
            <div className="content">
              {/* <div className="thumb-title">Name Slider</div>
              <div className="thumb-description">Description</div> */}
            </div>
          </div>
          <div className="item">
            <img src={Images[2]}alt="Thumbnail 3" />
            <div className="content">
              {/* <div className="thumb-title">Name Slider</div>
              <div className="thumb-description">Description</div> */}
            </div>
          </div>
          <div className="item">
            <img src={Images[3]} alt="Thumbnail 4" />
            <div className="content">
              {/* <div className="thumb-title">Name Slider</div>
              <div className="thumb-description">Description</div> */}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="arrows">
          <button id="prev">{'<'}</button>
          <button id="next">{'>'}</button>
        </div>

        {/* Time Running */}
        <div className="time" ref={timeDom}></div>
      </div>
    </div>
  );
};

export default Hero2;