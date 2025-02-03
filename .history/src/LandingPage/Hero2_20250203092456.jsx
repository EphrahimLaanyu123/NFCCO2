import React, { useEffect, useState } from 'react';
import './Hero2.css';

const Hero2 = () => {
  const [images, setImages] = useState([]);
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
    // Fetch images from the API
    fetch('http://localhost:5000/pages/1/images')  // Adjust the API URL as needed
      .then(response => response.json())
      .then(data => {
        setImages(data.images); // Update the state with the images data
      })
      .catch(error => {
        console.error("Error fetching images:", error);
      });

    // Initialize DOM references
    nextDom.current = document.getElementById('next');
    prevDom.current = document.getElementById('prev');
    carouselDom.current = document.querySelector('.carousel');
    SliderDom.current = carouselDom.current.querySelector('.carousel .list');
    thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');
    timeDom.current = document.querySelector('.carousel .time');

    // Append the first thumbnail item to the end
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
    thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

    // Set up event listeners
    nextDom.current.onclick = () => showSlider('next');
    prevDom.current.onclick = () => showSlider('prev');

    // Auto-slide functionality
    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    // Cleanup
    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  const showSlider = (type) => {
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

  return (
    <div>
      {/* Carousel */}
      <div className="carousel" ref={carouselDom}>
        {/* List Items */}
        <div className="list" ref={SliderDom}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={`data:image/jpeg;base64,${image.file_data}`} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="author">WELCOME TO</div>
                <div className="title">NDOTO FOREST</div>
                <div className="topic">COMMUNITY CONSERVATION</div>
                <div className="des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.
                </div>
                <div className="buttons">
                  <button className="button-1">SEE MORE</button>
                  <button className="button-2">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnail */}
        <div className="thumbnail" ref={thumbnailBorderDom}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={`data:image/jpeg;base64,${image.file_data}`} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
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
