import React, { useEffect, useState, useRef } from 'react';
import './Hero2.css';
import axios from 'axios';

const Hero2 = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const SliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const timeDom = useRef(null);

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  useEffect(() => {
    // Fetch images for page_id 1
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://nffco-images.onrender.com/pages/1/images');
        const fetchedImages = response.data.images;

        // Lazy load images using promises
        const imagePromises = fetchedImages.map((image) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = `data:image/jpeg;base64,${image.file_data}`;
            img.onload = () => resolve(img.src);
          })
        );

        const loadedImages = await Promise.all(imagePromises);

        // Set the images state with the loaded data
        const newImages = {};
        loadedImages.forEach((imgSrc, index) => {
          newImages[`image${index + 1}`] = imgSrc;
        });

        setImages(newImages); // Set images in state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    nextDom.current = document.getElementById('next');
    prevDom.current = document.getElementById('prev');
    carouselDom.current = document.querySelector('.carousel');
    SliderDom.current = carouselDom.current.querySelector('.carousel .list');
    thumbnailBorderDom.current = document.querySelector('.carousel .thumbnail');
    timeDom.current = document.querySelector('.carousel .time');

    // Append the first thumbnail item to the end
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');
    thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

    nextDom.current.onclick = () => showSlider('next');
    prevDom.current.onclick = () => showSlider('prev');

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
      <div className="carousel" ref={carouselDom}>
        <div className="list" ref={SliderDom}>
          {['image1', 'image2', 'image3', 'image4'].map((imageKey, index) => (
            <div className="item" key={index}>
              {images[imageKey] ? (
                <img src={images[imageKey]} alt={`Slide ${index + 1}`} />
              ) : (
                <div className="loading">Loading...</div>
              )}
              <div className="content">
                <div className="author">WELCOME TO</div>
                <div className="title">NDOTO FOREST</div>
                <div className="topic">COMMUNITY CONSERVATION</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...
                </div>
                <div className="buttons">
                  <button className="button-1">SEE MORE</button>
                  <button className="button-2">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailBorderDom}>
          {['image1', 'image2', 'image3', 'image4'].map((imageKey, index) => (
            <div className="item" key={index}>
              {images[imageKey] ? (
                <img src={images[imageKey]} alt={`Thumbnail ${index + 1}`} />
              ) : (
                <div className="loading">Loading...</div>
              )}
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev">{'<'}</button>
          <button id="next">{'>'}</button>
        </div>

        <div className="time" ref={timeDom}></div>
      </div>
    </div>
  );
};

export default Hero2;
