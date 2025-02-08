import React, { useEffect } from 'react';
import './News.css';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/news');
    };

    const lazyLoadBackgrounds = () => {
        const cards = document.querySelectorAll(".lazy-bg");

        const onIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const bgUrl = element.dataset.bg;
                    element.style.backgroundImage = `url(${bgUrl})`;
                    element.classList.remove("lazy-bg");
                    observer.unobserve(element);
                }
            });
        };

        const observer = new IntersectionObserver(onIntersection, {
            rootMargin: "50px",
            threshold: 0.1,
        });

        cards.forEach(card => observer.observe(card));
    };

    useEffect(() => {
        lazyLoadBackgrounds();
    }, []);

    return (
        <div className="wrapper">
            <div className="wrapper-header">
                <h1 className="wrapper-header-h1">ANIMALS</h1>
                <p className="wrapper-header-description">
                    We believe in principles that guide innovation, learning, and exploration across various domains. Here are some of our core tenets inspired by animals:
                </p>
            </div>
            <div className="container">
                <input type="radio" name="slide" id="lion" defaultChecked />
                <label htmlFor="lion" className="card card1 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-bisakha-datta-3429431-5598439.jpg?updatedAt=1739005048101">
                    <div className="row">
                        <div className="icon">🦁</div>
                        <div className="description">
                            <h4>Lion</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="giraffe" />
                <label htmlFor="giraffe" className="card card2 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-pixabay-34098.jpg">
                    <div className="row">
                        <div className="icon">🦒</div>
                        <div className="description">
                            <h4>Giraffe</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="elephant" />
                <label htmlFor="elephant" className="card card3 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-monkeytactics-750536.jpg?updatedAt=1739006334338">
                    <div className="row">
                        <div className="icon">🐘</div>
                        <div className="description">
                            <h4>Elephant</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="kudu" />
                <label htmlFor="kudu" className="card card4 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-charldurand-6436639.jpg?updatedAt=1739006330324">
                    <div className="row">
                        <div className="icon">🦌</div>
                        <div className="description">
                            <h4>Kudu</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="gelada-monkey" />
                <label htmlFor="gelada-monkey" className="card card5 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-hasan-aytekin-1023768668-30593475.jpg?updatedAt=1739006332170">
                    <div className="row">
                        <div className="icon">🐒</div>
                        <div className="description">
                            <h4>Gelada Monkey</h4>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="grevy-zebra" />
                <label htmlFor="grevy-zebra" className="card card6 lazy-bg" data-bg="https://ik.imagekit.io/fcuzgktdi/assets/pexels-hansmiddendorp-13322019.jpg?updatedAt=1739006333967">
                    <div className="row">
                        <div className="icon">🦓</div>
                        <div className="description">
                            <h4>Grevy Zebra</h4>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default News;
