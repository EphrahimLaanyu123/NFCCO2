import React from "react";
import "./MapPreview.css";

const MapComponent = () => {
  return (
    <div className="map-container">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="kenya-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.35,0.05 C0.4,0.15,0.6,0.2,0.7,0.3 C0.75,0.4,0.8,0.6,0.75,0.7 C0.65,0.9,0.35,0.95,0.2,0.75 C0.1,0.6,0.15,0.4,0.25,0.3 C0.3,0.2,0.3,0.1,0.35,0.05 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Kenya-Shaped Map Frame */}
      <div className="kenya-map-frame">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632873.3134741883!2d36.78534370751254!3d1.5833643587200912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17906d4157e2c6b9%3A0xf59b7a0063013edb!2sSamburu%20County!5e1!3m2!1sen!2ske!4v1738676439685!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
