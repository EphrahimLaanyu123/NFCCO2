'use client';
import styles from './page.module.scss'
import Gallery from './gallery/index';
import Lenis from 'lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import Description from './description/index';

const projects = [
  {
    name: "_KGP6384",
    handle: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6384.JPG?updatedAt=1735723906345",
    handle2: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6384.JPG?updatedAt=1735723906345"
  },
  {
    name: "Leidinger Matthias",
    handle: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6130.JPG?updatedAt=1738838655837",
    handle2: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6130.JPG?updatedAt=1738838655837"
  },
  {
    name: "Mark Rammers",
    handle: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6395%20(1).JPG?updatedAt=1735723918839"
    handle2: "https://ik.imagekit.io/fcuzgktdi/assets/_KGP6395%20(1).JPG?updatedAt=1735723918839"
  },
  {
    name: "Landon Speers",
    handle: "https://ik.imagekit.io/fcuzgktdi/assets/pexels-thu-trang-1190570-2265090.jpg?updatedAt=1735723648876"
    handle2: "https://ik.imagekit.io/fcuzgktdi/assets/pexels-thu-trang-1190570-2265090.jpg?updatedAt=1735723648876"
  }
]

export default function GalleryMain() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {
        projects.map( ({handle}, i) => {
          return <Gallery mousePosition={mousePosition} handle={handle} key={i}/>
        })
      }
      <Description mousePosition={mousePosition} projects={projects}/>
    </main>
  )
}