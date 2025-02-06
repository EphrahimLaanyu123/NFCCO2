'use client'
import styles from './gallery2.module.scss'
import { useRef } from 'react';

export default function Index() {
    const imageUrls = [
        "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6130.JPG?updatedAt=1738838655837",
        "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6384.JPG?updatedAt=1735723906345",
        "https://ik.imagekit.io/fcuzgktdi/assets/pexels-thu-trang-1190570-2265090.jpg?updatedAt=1735723648876",
        "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6395%20(1).JPG?updatedAt=1735723918839"
      ];
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;
  let refs = [];

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps+= Math.abs(movementX) + Math.abs(movementY);

    if(steps >= currentIndex * 150){
      moveImage(clientX, clientY);

      if(nbOfImages == maxNumberOfImages){
        removeImage();
      }
    }
    
    if(currentIndex == refs.length){
      currentIndex = 0;
      steps = -150;
    }
  }

  const moveImage = (x, y) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = x + "px";
    currentImage.style.top = y + "px";
    currentImage.style.display = "block";
    currentIndex++;
    nbOfImages++;
    setZIndex()
  }

  const setZIndex = () => {
    const images = getCurrentImages();
    for(let i = 0 ; i < images.length ; i++){
      images[i].style.zIndex = i;
    }
  }

  const removeImage = () => {
    const images = getCurrentImages();
    images[0].style.display = "none";
    nbOfImages--;
  }

  const getCurrentImages = () => {
    let images = []
    let indexOfFirst = currentIndex - nbOfImages;
    for(let i = indexOfFirst ; i < currentIndex ; i++){
      let targetIndex = i;
      if(targetIndex < 0) targetIndex += refs.length
      images.push(refs[targetIndex].current);
    }
    return images;
  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
      {
        [...Array(19).keys()].map( (_, index) => {
          const ref = useRef(null);
          refs.push(ref)
          return <img onClick={() => {console.log(refs)}} ref={ref} src={`/images/${index}.jpg`}></img>
        })
      }
    </div>
  )
}