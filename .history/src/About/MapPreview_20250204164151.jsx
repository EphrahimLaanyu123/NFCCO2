import React from 'react';

const MapComponent = () => {
  return (
    <div className="map-container" style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632873.3134741883!2d36.78534370751254!3d1.5833643587200912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17906d4157e2c6b9%3A0xf59b7a0063013edb!2sSamburu%20County!5e1!3m2!1sen!2ske!4v1738676439685!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
