import React from 'react';
import './News.css';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/news');
    };

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
                <label htmlFor="lion" className="card card1">
                    <div className="row">
                        <div className="icon">🦁</div>
                        <div className="description">
                            <h4>Lion</h4>
                            <p>Symbol of courage, leadership, and strength.</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="giraffe" />
                <label htmlFor="giraffe" className="card card2">
                    <div className="row">
                        <div className="icon">🦒</div>
                        <div className="description">
                            <h4>Giraffe</h4>
                            <p>Inspires us to see far and aim high in all endeavors.</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="elephant" />
                <label htmlFor="elephant" className="card card3">
                    <div className="row">
                        <div className="icon">🐘</div>
                        <div className="description">
                            <h4>Elephant</h4>
                            <p>Wisdom, loyalty, and the importance of memory.</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="kudu" />
                <label htmlFor="kudu" className="card card4">
                    <div className="row">
                        <div className="icon">🦌</div>
                        <div className="description">
                            <h4>Kudu</h4>
                            <p>Elegance and adaptability in the face of challenges.</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="gelada-monkey" />
                <label htmlFor="gelada-monkey" className="card card5">
                    <div className="row">
                        <div className="icon">🐒</div>
                        <div className="description">
                            <h4>Gelada Monkey</h4>
                            <p>Cooperation, communication, and social intelligence.</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="grevy-zebra" />
                <label htmlFor="grevy-zebra" className="card card6">
                    <div className="row">
                        <div className="icon">🦓</div>
                        <div className="description">
                            <h4>Grevy Zebra</h4>
                            <p>Balance, harmony, and individuality.</p>
                        </div>
                    </div>
                </label>
            </div>
            {/* <footer className="news-footer">
                <p>Stay updated with our latest tenets and advancements.</p>
                <button className="news-button" onClick={handleNavigate}>View More News</button>
            </footer> */}
        </div>
    );
};

export default News;
