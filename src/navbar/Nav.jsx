import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
   <div>
    <nav
  className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
  style={{ borderBottom: "2px solid rgb(166, 124, 82)" }}
>

      <div className="container-fluid">
        <ul className="nav">
          <h1><b>
          <li className="nav-item pe-5 ms-2 fw-bold text-orange">
            <a className="nav-link active" href="#" style={{color:'rgb(166, 124, 82)',fontSize:20}}>
              <i className="fa-solid fa-magnifying-glass-location"></i> &nbsp;Cosmo Soil
            </a>
          </li>
          </b></h1>

         <h1><b>
          <li className="nav-item ps-5 ms-5">
            <a className="nav-link text-custom " style={{fontSize:15}}href="#">Buy</a>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item">
            <a className="nav-link text-custom"style={{fontSize:15}} href="#">Sell</a>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-custom" style={{fontSize:15}} href="#" role="button" data-bs-toggle="dropdown">
              Rent
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Post rental divider</a></li>
              <li><a className="dropdown-item" href="#">Find rent property (Tenants)</a></li>
            </ul>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item">
            <a className="nav-link text-custom "style={{fontSize:15}} href="#">Newsletters</a>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-custom"style={{fontSize:15}} href="#" role="button" data-bs-toggle="dropdown">
              Service
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Loans</a></li>
              <li><a className="dropdown-item" href="#">Movers and packers</a></li>
              <li><a className="dropdown-item" href="#">Architects</a></li>
              <li><a className="dropdown-item" href="#">Interior design</a></li>
              <li><a className="dropdown-item" href="#">Home maintenance</a></li>
              <li><a className="dropdown-item" href="#">Event management</a></li>
              <li><a className="dropdown-item" href="#">Rental furniture</a></li>
            </ul>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-custom" style={{fontSize:15}}href="#" role="button" data-bs-toggle="dropdown">
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Blogs</a></li>
              <li><a className="dropdown-item" href="#">EMI calculator</a></li>
              <li><a className="dropdown-item" href="#">Pincode finder</a></li>
              <li><a className="dropdown-item" href="#">Unit converters</a></li>
              <li><a className="dropdown-item" href="#">Metro routes</a></li>
              <li><a className="dropdown-item" href="#">NH Routes</a></li>
              <li><a className="dropdown-item" href="#">Land records website</a></li>
            </ul>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-custom"style={{fontSize:15}} href="#" role="button" data-bs-toggle="dropdown">
              Video
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Guide</a></li>
              <li><a className="dropdown-item" href="#">City Expansion</a></li>
              <li><a className="dropdown-item" href="#">Price comparison</a></li>
              <li><a className="dropdown-item" href="#">Top hospitals</a></li>
            </ul>
          </li>
          </b></h1>
          <h1><b>
          <li className="nav-item">
            <a className="nav-link text-custom "style={{fontSize:15}} href="#">Contact us</a>
          </li>
          </b></h1>
        </ul>
      </div>
    </nav>
    </div>
    
  );
}