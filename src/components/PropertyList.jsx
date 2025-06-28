import React from 'react';
import './PropertyList.css';

const PropertyList = ({ properties }) => {
  return (
    <div className="property-container">
      <table>
        <thead>
          <tr>
            <th>Project Details</th>
            <th>Area</th>
            <th>Starting Price</th>
            <th>BHK</th>
            <th>Possession</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.area}</td>
              <td>{property.price}</td>
              <td>{property.bhk}</td>
              <td>{property.possession}</td>
              <td>{property.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
