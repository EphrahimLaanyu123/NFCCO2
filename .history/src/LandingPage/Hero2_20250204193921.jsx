import React, { useEffect, useState, useRef } from 'react';
import './Hero2.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hero2 = () => {
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

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  useEffect(() => {
    // Fetch images for page_id 1
    axios.get('https://nffco-images.onrender.com/pages/1/images') // Update URL to match your Flask server
      .then((response) => {
        const fetchedImages = response.data.images;

        // Manually assign images to their respective keys (image1, image2, etc.)
        const newImages = {};
        fetchedImages.forEach((image, index) => {
          newImages[`image${index + 1}`] = image; // Dynamically create image1, image2, etc.
        });

        setImages(newImages); // Set images in state
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
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
          <div className="item">
            {images.image1 && (
              <img src={`data:image/jpeg;base64,${images.image1.file_data}`} alt="Slide 1" />
            )}
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <Link to="/about">
                  <button className="button-1">SEE MORE</button>
                </Link>
                <Link to="/gallery">
                  <button className='button-2'>SUBSCRIBE</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            {images.image2 && (
              <img src={`data:image/jpeg;base64,${images.image2.file_data}`} alt="Slide 2" />
            )}
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION</div>
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
            {images.image3 && (
              <img src={`data:image/jpeg;base64,${images.image3.file_data}`} alt="Slide 3" />
            )}
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION</div>
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
            {images.image4 && (
              <img src={`data:image/jpeg;base64,${images.image4.file_data}`} alt="Slide 4" />
            )}
            <div className="content">
              <div className="author">WELCOME TO</div>
              <div className="title">NDOTO FOREST</div>
              <div className="topic">COMMUNITY CONSERVATION</div>
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
            {images.image1 && (
              <img src={`data:image/jpeg;base64,${images.image1.file_data}`} alt="Thumbnail 1" />
            )}
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            {images.image2 && (
              <img src={`data:image/jpeg;base64,${images.image2.file_data}`} alt="Thumbnail 2" />
            )}
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            {images.image3 && (
              <img src={`data:image/jpeg;base64,${images.image3.file_data}`} alt="Thumbnail 3" />
            )}
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            {images.image4 && (
              <img src={`data:image/jpeg;base64,${images.image4.file_data}`} alt="Thumbnail 4" />
            )}
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
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
