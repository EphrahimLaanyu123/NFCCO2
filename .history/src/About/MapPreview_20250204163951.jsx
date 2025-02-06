import React from 'react';

const MapComponent = () => {
  return (
    <div className="map-container" style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Google Map"
        src="https://google.com/maps/place/Samburu+County/@1.5833644,36.7853437,374972m/data=!3m1!1e3!4m6!3m5!1s0x17906d4157e2c6b9:0xf59b7a0063013edb!8m2!3d1.2154506!4d36.954107!16zL20vMDI1Zmtj?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
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
