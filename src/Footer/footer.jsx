import React from "react";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container  mt-5 " style={{ borderTop: "1px solid #63605c" }}
    >
        <h6 style={{marginLeft:100,marginTop:20}}>Copyright @ 2024 EKAM AI .All rights reserved</h6>
        
        <hr />
      <div className="row mt-5 " >
        <div className="col "style={{marginLeft:60}}>
        <p style={{fontSize:19}}>Company</p>
        <a href=""className="text-muted text-decoration-none " style={{lineHeight:1}}>Locality Search</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Sell</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Buy</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Newsletters</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Contact us</a><br />
        </div>
        <div className="col  mt-2 " style={{marginLeft:60}}>
          <p style={{fontSize:19}}>Rent</p>
          <a href=""className="text-muted text-decoration-none" style={{lineHeight:1}}>Post Rental Ads (Owners)</a><br />
          <a href=""className="text-muted text-decoration-none" style={{lineHeight:1}}>Find Rent Property (Tenants)</a><br />
        </div>
        <div className="col" style={{marginLeft:60}}>
          <p style={{fontSize:19}}>Services</p>
          <a href=""className="text-muted text-decoration-none " style={{lineHeight:1}}>Loans</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Movers and Packers</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Architects</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Interior Designers</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Legal & Documentation</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Vastu</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Home Maintainence</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Event Management</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Rental Furniture</a><br />
        </div>
        <div className="col" style={{marginLeft:60}}>
          <p style={{fontSize:19}}>Resources</p>
          <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Blogs</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>EMI calculator</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Pincode Finder</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Unit Convertors</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Metro Routes</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>NH Routes</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Land records websites</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Express Highways</a><br />
        </div>
        <div className="col" style={{marginLeft:60}}>
          <p style={{fontSize:19}}>Videos</p>
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Guide</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>City Expansion</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Price Comparision</a><br />
        <a href=""className="text-muted text-decoration-none"style={{lineHeight:1}}>Top Hospitals</a><br />
        </div>
        <br />
        <hr style={{ border: "1px solid #84827e" }}/>
        <p style={{ textAlign: "center",fontWeight: "bold" }}
        >Do Subscribe to Our Social Media for Updates</p>
        <p style={{ textAlign: "center" }}>
        <a href=""><i class="fa-brands fa-square-facebook me-2 fs-4 text-dark"></i></a>
        <a href=""><i class="fa-brands fa-square-twitter me-2 fs-4 text-dark"></i></a>
        <a href=""><i class="fa-brands fa-instagram me-2 fs-4 text-dark"></i></a>
        <a href=""><i class="fa-brands fa-square-youtube me-2 fs-4 text-dark"></i></a>

        
        </p>
      </div>
      
    </div>
    </footer>
  );
}
