import React from "react";
import "./PropertyCard.css";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1580216643062-cf460548a66a?w=600";

const PropertyCard = ({ properties }) => {
  return (
    <>
      {properties.map((property) => {
        const image =
          property.image && property.image.trim() !== "" ? property.image : DEFAULT_IMAGE;

        return (
          <div key={property.id} className="card property-card mx-auto">
            <div className="position-relative">
              <img src={image} className="card-img-top" alt="Property" />
            </div>

            <div className="card-body text-center">
              <h5 className="card-title">{property.name}</h5>
              <p>{property.area}</p>

              <h6 className="fw-bold">{property.bhk}</h6>
              <p className="text-muted small">BHK</p>

              <h6 className="fw-bold">{property.phone}</h6>
              <p className="text-muted small">Contact</p>

              <div className="d-flex justify-content-between border-top pt-2">
                <div>
                  <h6 className="fw-bold">{property.price}</h6>
                  <p className="text-muted small">Price</p>
                </div>
                <div>
                  <h6 className="fw-bold">{property.possession}</h6>
                  <p className="text-muted small">Possession</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PropertyCard;
