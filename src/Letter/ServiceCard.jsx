import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="card" style={{width:"320px",height:"350px"}}>
      <h2>{title}</h2>
      <p style={{fontSize:"15px"}}>{description}</p>
      <button className="learn-btn" style={{height:"40px",width:"120px",fontSize:"12px",marginTop:"40px"}}>Learn More</button>
    </div>
  );
};

export default ServiceCard;
