import React, { useEffect, useRef } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


const Card = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains('card-component__card--away')) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle = angle - 10;
          card.style.zIndex = cards.length - index;
        }
      });
    };

    const handleScroll = () => {
      const distance = window.innerHeight * 0.5;
      const stackArea = document.querySelector('.card-component__stack-area');
      const topVal = stackArea.getBoundingClientRect().top;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(index);

      cards.forEach((card, i) => {
        if (i <= index) {
          card.classList.add('card-component__card--away');
        } else {
          card.classList.remove('card-component__card--away');
        }
      });

      rotateCards();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card-component__stack-area">
      <div className="card-component__left">
        <div className="card-component__title">UNITED FOR CONSERVATION.</div>
        <div className="card-component__sub-title">
        IN EVERY WAY DIFFERENT
        UNITED FOR CONSERVATION.
          <br />
          <Link to="/gallery">
          <button className="card-component__button">See More Details</button>

          </Link>
        </div>
      </div>
      <div className="card-component__right">
        <div className="card-component__card" ref={(el) => (cardsRef.current[0] = el)}>
          <div className="card-component__sub">Vision</div>
          <div className="card-component__content">To enhance community resilience through restoration, afforestation, safeguarding biodiversity, and promoting environmental sustainability.</div>
        </div>
        <div className="card-component__card" ref={(el) => (cardsRef.current[1] = el)}>
          <div className="card-component__sub">Mission</div>
          <div className="card-component__content">To conserve the ecological integrity and livelihoods of Ndoto and Nyiro forests sustainably and collaboratively.</div>
        </div>
        <div className="card-component__card" ref={(el) => (cardsRef.current[2] = el)}>
          <div className="card-component__sub">Main objective</div>
          <div className="card-component__content">Increase forest cover through afforestation, conservation activities, and promoting sustainable resource use for community benefits.</div>
        </div>
        <div className="card-component__card" ref={(el) => (cardsRef.current[3] = el)}>
          <div className="card-component__sub">Values</div>
          <div className="card-component__content">Empowering communities to restore and protect their environment through sustainable and collaborative conservation practices.</div>
        </div>
      </div>
    </div>
  );
};

export default Card;