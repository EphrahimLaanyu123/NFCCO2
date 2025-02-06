import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapPreview.css";

const center = [51.505, -0.09]; // Latitude and Longitude for the center

function MapPreview() {
  return (
    <div className="map-preview">
      <h2>Our Location</h2>
      <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            A custom marker!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPreview;
