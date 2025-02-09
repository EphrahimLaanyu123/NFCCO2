import React from 'react';
import './MapPreview.css'; // Make sure to import the CSS file

const MapComponent = () => {
  return (
    <div className="map-container">
      {/* Left Section */}
      <div className="map-left">
        <h1 className="title">Samburu County</h1>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632873.3134741883!2d36.78534370751254!3d1.5833643587200912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17906d4157e2c6b9%3A0xf59b7a0063013edb!2sSamburu%20County!5e1!3m2!1sen!2ske!4v1738676439685!5m2!1sen!2ske"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Section */}
      <div className="map-right">
        <p className="description">
          Samburu County which lies within the Arid and Semi-Arid parts of Kenya and has an area of 21,022.1 Km². It is situated in the northern part of the Great Rift Valley. Samburu is bordered by Turkana to the Northwest, Baringo to the Southwest, Marsabit to the Northeast, Isiolo to the East and Laikipia to the South. The county lies between latitudes 0°30‘ and 2° 45‘ north of the equator between longitudes 36°15‘ and 38° 10‘ east of the Prime Meridian. This area comprises an altitude of 600 m and 1,450 m above sea level, covering up to 80 percent of land in the county. The zone is mainly used as grazing fields for livestock by pastoralist communities living in the county and for Flora and Fauna.
        </p>
      </div>
      <Additions></Additions>
    </div>
  );
};

export default MapComponent;
