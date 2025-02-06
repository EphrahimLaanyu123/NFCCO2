import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./MapPreview.css";

// Coordinates for the map's center
const center = [51.505, -0.09]; // Latitude and Longitude (Example: London)

function MapPreview() {
  return (
    <div className="map-preview">
      <h2>Our Location</h2>
      <MapContainer center={center} zoom={13} style={{ width: '100%', height: '400px' }}>
        {/* TileLayer to use OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker with a Popup */}
        <Marker position={center}>
          <Popup>
            Our Location is here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPreview;
