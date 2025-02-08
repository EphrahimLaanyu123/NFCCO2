import React from 'react';
import Tenets from './Abandon/Tenets';
import Testimonial from './Abandon/Testimonial';
import ConservancyArticles from './MapPreview';
import './LandingPage.css';
import Card from './Card';
import Hero2 from './Hero2';
import News from './News/News';
import Gallery from './Gallery';
import Lenis from 'lenis';
import { useEffect } from 'react';
import Footer from '../Footer/Footer1';
import Intro from '../Footer/Intro';
import Nav from './Nav';
import Supa from '../supabase/Supa';
import Navbar from '../Navbar/NavBar';

function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero2 />
      <Card />
      <News />
      <Gallery />
      <Intro />
      <Footer /> 
    </div>
  );
}

export default LandingPage;
