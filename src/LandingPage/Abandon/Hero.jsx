import React from "react";
import { Helmet } from "react-helmet";
import './Hero.css';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <Helmet>
                <title>Ndoto Forest Community - Welcome</title>
                <meta name="description" content="Discover Ndoto Forest Community, where we conserve the ecological integrity and support community livelihoods of Ndoto and Nyiro forests." />
                <meta name="keywords" content="Ndoto Forest, Forest Conservation, Community Livelihoods, Ecological Integrity, Environmental Sustainability" />
                <meta name="author" content="Ndoto Forest Community Team" />
                <meta property="og:title" content="Ndoto Forest Community - Welcome" />
                <meta property="og:description" content="Join us in conserving Ndoto and Nyiro forests and supporting community livelihoods." />
                <meta property="og:image" content="https://ik.imagekit.io/fcuzgktdi/assets/pexels-joe-arts-1830507-3505000%20(1).webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ndotoforestcco.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.ndotoforestcco.org/" />
            </Helmet>
            <section className="hero-container" role="banner" aria-label="Hero Section">
                <Navbar />
                <div className="hero-top-side">
                    <div className="hero-top-side-top">
                        <header className="hero-title">
                            <h1>
                                <span>Welcome to</span> <br />
                                NDOTO FOREST COMMUNITY
                            </h1>
                        </header>
                        <div className="hero-text">
                            <p>
                                To conserve the ecological integrity and community livelihoods of Ndoto and Nyiro forests. 
                            </p>
                        </div>
                        <div className="buttons">
                        <button
                            className="about-us-button"
                            aria-label="Learn more about us"
                        >
                            <Link to="add-article">About Us</Link>
                        </button>
                            <button
                                className="explore-us-button"
                                aria-label="Explore our offerings"
                            >
                                
                                <Link to="admin">Explore Us</Link>

                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
