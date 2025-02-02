import React from "react";
import icon from "../assets/logo/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import "./InfoSection.css";
import icon1 from "../assets/logo/target_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import icon2 from "../assets/logo/emoji_objects_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import icon3 from "../assets/logo/volunteer_activism_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";


function InfoSection() {
    const cards = [
        {
            title: "Vision",
            description: "To enhance community resilience through restoration, afforestation, safeguarding biodiversity, and promoting environmental sustainability.",
            image: icon 
        },
        {
            title: "Mission",
            description: "To conserve the ecological integrity and livelihoods of Ndoto and Nyiro forests sustainably and collaboratively.",
            image: icon1 
        },
        {
            title: "Main objective",
            description: "Increase forest cover through afforestation, conservation activities, and promoting sustainable resource use for community benefits.",
            image: icon2 
        },
        {
            title: "Values",
            description: "Empowering communities to restore and protect their environment through sustainable and collaborative conservation practices.",
            image: icon3 
        }
    ];

    
    
    return (
        <div className="InfoSection">
            <div className="top-side">
                <div className="top-side-left">
                    <p>
                        [Purpose]
                    </p>
                </div>
                <div className="top-side-right">
                    <section>
                        <p>Landscape Design</p>
                        <p>01</p>
                    </section>
                    <div className="underline"></div>
                    <section>
                        <p>Indoor Garden</p>
                        <p>02</p>
                    </section>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="bottom-side">
                <div className="bottom-side-top">
                <div className="bottom-side-top">
    <h1>
        IN EVERY WAY <span className="gradient-text">DIFFERENT</span> <br /> UNITED FOR CONSERVATION.
    </h1>
</div>

                    <button>About Us</button>
                </div>
                <div className="bottom-side-bottom">
                    <img className="woman-image" src="https://ik.imagekit.io/fcuzgktdi/assets/_KGP6196.JPG?updatedAt=1735723840497" alt="" />
                    <div className="cards-container">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <img src={card.image} alt={card.title} className="card-image" />
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoSection;