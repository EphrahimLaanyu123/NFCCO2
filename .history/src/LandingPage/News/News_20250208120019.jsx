import React from 'react';
import './News.css';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed

const News = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/news');
    };

    // Define the background images as objects to be passed to each card
    const cardStyles = [
        {
            backgroundImage: "url('https://ik.imagekit.io/fcuzgktdi/assets/pexels-bisakha-datta-3429431-5598439.jpg?updatedAt=1739005048101')",
        },
        {
            backgroundImage: "url('https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497')",
        },
        {
            backgroundImage: "url('https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497')",
        },
        {
            backgroundImage: "url('https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497')",
        },
    ];

    return (
        <div className="wrapper">
            <div className="wrapper-header">
                <h1 className='wrapper-header-h1'>ANIMALS</h1>
                <p className="wrapper-header-description">
                    We believe in principles that guide innovation, learning, and exploration across various domains. Here are some of our core tenets:
                </p>
            </div>
            <div className="container">
                <input type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="card card1" style={cardStyles[0]}>
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer - creative activities</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="card card2" style={cardStyles[1]}>
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Digital Technology</h4>
                            <p>Gets better every day - stay tuned</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="card card3" style={cardStyles[2]}>
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Globalization</h4>
                            <p>Help people all over the world</p>
                        </div>
                    </div>
                </label>

                <input type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="card card4" style={cardStyles[3]}>
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>New technologies</h4>
                            <p>Space engineering becomes more and more advanced</p>
                        </div>
                    </div>
                </label>
            </div>
            <footer className="news-footer">
                <p>Stay updated with our latest tenets and advancements.</p>
                <button className="news-button" onClick={handleNavigate}>View More News</button>
            </footer>
        </div>
    );
};

export default News;
