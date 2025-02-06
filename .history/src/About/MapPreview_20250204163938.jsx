import React from 'react';

const MapComponent = () => {
  return (
    <div className="map-container" style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093956!2d144.95373531531717!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f34619f7%3A0x506f4aa579ed6f0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1678909019354!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
