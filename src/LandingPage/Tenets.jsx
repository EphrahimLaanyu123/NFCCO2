import React from "react";
import "./Tenets.css";

function Tenets() {
    const tenets = [
        { id: 1, src: "https://ik.imagekit.io/fcuzgktdi/assets/Tenets/tenets_g12.png?updatedAt=1735723905210", title: "People", alt: "Tenet 1 description" },
        { id: 2, src: "https://ik.imagekit.io/fcuzgktdi/assets/Tenets/tenets_g13.png?updatedAt=1735723917176", title: "Ecology", alt: "Tenet 2 description" },
        { id: 3, src: "https://ik.imagekit.io/fcuzgktdi/assets/Tenets/tenets_g14.png?updatedAt=1735723903692", title: "Community", alt: "Tenet 3 description" },
    ];

    return (
        <div className="tenets">
            <div className="tenets-top">
                <div className="tenets-top-title">
                    <h2>[Tenets]</h2>
                </div>
                <div className="tenets-top-list">
                    {tenets.map((tenet) => (
                    <div key={tenet.id} className="tenets-list-item">
                        <span className="tenets-list-title">{tenet.title}</span>
                        <span className="tenets-list-number">{tenet.id}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="tenets-bottom">
                <div className="tenets-bottom-cards">
                    {tenets.map((tenet) => (
                        <div key={tenet.id} className="tenet-card">
                            <img src={tenet.src} alt={tenet.alt} loading="lazy" priority/>
                            <h3 className="tenet-title">{tenet.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tenets;
