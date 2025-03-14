import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from './Intro';
import Description from './Description';
import Section from './Section';
import Footer from '../Footer/Footer1';
import Services from './layout';
import Navbar from '../Navbar/NavBar';

function ServicesMain() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      {/* <Description /> */}
      <Services />
      {/* <div className="h-screen"></div> */}
      <Footer />

    </main>
  );
}

export default ServicesMain;
