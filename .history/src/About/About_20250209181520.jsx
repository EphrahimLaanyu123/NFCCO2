import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from './Intro';
import Description from './Description';
import Section from './Section';
import Footer from '../Footer/Footer1';
import MapComponent from './MapPreview';
import Intro2 from './Intro2';
import Additions from './Additions';

function About() {
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
      <Intro2 />
      <Description />
      <Section />
      <MapComponent/>
      <MapComponent/>
      {/* <div className="h-screen"></div> */}
      <Footer />

    </main>
  );
}

export default About;
