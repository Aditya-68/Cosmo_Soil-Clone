import React from 'react';

export default function Banner() {
  return (
    <>
      <div style={{ height: "60px" }}></div>
      
      <div 
        className="text-white text-center fw-bold"
        style={{
          width: "100vw",  
          height: "50px",
          backgroundColor: "rgba(172, 132, 71, 0.886)",
          fontSize: "22px",
          lineHeight: "40px",
          margin: "0", 
          padding: "20px", // Added horizontal padding
          marginTop: "10px",
          marginBottom:"10px",
          border: "2px solid rgb(166, 124, 82)", // Brown border
          boxSizing: "border-box", // Includes border in element dimensions
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h2>Discover Your Perfect Property: Browse, Compare, and Buy</h2>
        
      </div>
    </>
  );
}