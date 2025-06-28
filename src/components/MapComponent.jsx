import React from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapComponent = ({ properties, selectedState }) => {
  const stateCoordinates = {
    All: [20.5937, 78.9629],
    Telangana: [17.3850, 78.4867],
    "Uttar Pradesh": [26.8467, 80.9462],
    Delhi: [28.6139, 77.2090],
    Gujarat: [23.0225, 72.5714],
    Haryana: [28.4595, 77.0266],
    Kerala: [10.8505, 76.2711],
    TamilNadu: [13.0827, 80.2707],
    "Madhya Pradesh": [22.7196, 75.8577],
    Maharashtra: [19.0760, 72.8777],
    WestBengal: [22.5726, 88.3639]
  };

  const defaultCenter = stateCoordinates.Maharashtra;
  const defaultZoom = 11;

  const center = selectedState ? stateCoordinates[selectedState] || defaultCenter : defaultCenter;
  const zoom = selectedState === "All" ? 5 : 11;

  return (
    <>
    {/* <h6>Each bubble represents the number of available properties. The size of bubbles indicates the number of properties in that location, with larger bubbles representing higher availability</h6>
    <b>
    <hr />
    </b> */}
    <div className="map-container" style={{ height: '610px', width: '100%' }}>
      <MapContainer 
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true} // ✅ Enable scroll zoom
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {properties.map(property => {
          // Convert price string to number for dynamic radius
          let radius = 100;
          const priceStr = property.price?.toString().replace(/[^\d]/g, "");
          const price = parseInt(priceStr, 10);
          if (!isNaN(price)) {
            radius = Math.min(Math.max(price * 0.01, 100), 2000); // Clamp radius between 100 and 2000
          }

          return (
            <Circle
              key={property.id}
              center={[property.lat, property.lng]}
              radius={radius}
              color="red"
              fillOpacity={0.4}
            >
              <Popup>
                <h4>{property.name}</h4>
                <p>Area: {property.area}</p>
                <p>Price: {property.price}</p>
                <p>BHK: {property.bhk}</p>
                <p>Location: {property.lat}, {property.lng}</p>
              </Popup>
            </Circle>
          );
        })}
      </MapContainer>
    </div>
    </>
  );
};

export default MapComponent;
