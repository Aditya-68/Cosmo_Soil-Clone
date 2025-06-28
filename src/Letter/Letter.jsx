import React from "react";
import ServicesCarousel from "./ServicesCarousel";
export default function Letter() {
  return (
    <div
      style={{
        borderTop: "1px solid orange",
        left: 0,
        width: "100%",
        margin: "10px 0px 10px 0px",
      }}
    >
      <div className="container">
        <div className="row">
          <p className="fs-3 text-bold mt-3">
            Real Estate Website for Finding Your Dream Property
          </p>
          <p style={{ fontSize: "13px" }}>
            Cosmo-soil.com is the property listing website trusted by thousands
            of Indians for their real estate transactions. Our platform serves
            your entire property journey with verified listings, transparent
            pricing, and end-to-end support services.
          </p>

          <p style={{ fontSize: "13px" }}>
            Searching for the right property near me needs to remain simple. The
            platform offers the best real estate website through which users can
            connect directly while avoiding hidden costs and accessing complete
            resources in one unified platform. Our platform eliminates the need
            to manage numerous websites and extensive documentation.
          </p>

          <p style={{ fontSize: "13px" }}>
            Are you ready to look for your ideal home or sell your property
            without unnecessary difficulties? You can access our database of
            verified properties or quickly create a listing for your home in
            mere minutes.
          </p>
          <p className="fs-3 text-bold mt-3">
            {" "}
            India's Most Trusted Real Estate Website
          </p>
          <p style={{ fontSize: "13px" }}>
            Cosmo-soil.com positions itself as India's top property listing
            website by delivering properties beyond basic listings. Our platform
            includes all the necessary systems to help you through the entire
            property transaction process from start to finish.
          </p>
          <p style={{ fontSize: "13px" }}>
            Our platform simplifies the property purchase process by resolving
            standard user complaints.
          </p>
          <ul className="ms-5">
            <li style={{ fontSize: "13px" }}>
              <span className="fw-bold" style={{ fontSize: "13px" }}>
                Verified Listings Only:
              </span>{" "}
              Every property is physically verified by our team to prevent fraud
            </li>
            <li style={{ fontSize: "13px" }}>
              <span className="fw-bold" style={{ fontSize: "13px" }}>
                Direct Owner Connect:
              </span>{" "}
              Talk directly with property owners without middleman fees
            </li>
            <li style={{ fontSize: "13px" }}>
              <span className="fw-bold" style={{ fontSize: "13px" }}>
                Complete Price Transparency:
              </span>{" "}
              No hidden charges or surprise costs
            </li>
            <li style={{ fontSize: "13px" }}>
              {" "}
              <span className="fw-bold" style={{ fontSize: "13px" }}>
                End-to-End Support:
              </span>{" "}
              Access to related services like loans, legal help, and moving
            </li>
          </ul>
          <img
            src="https://cosmo-soil.com/images/best-real-estate-website.png"
            alt=""
            style={{
              height: "350px",
              width: "500px",
              display: "block",
              margin: "auto",
            }}
          />
          <p style={{ fontSize: "13px", marginTop: "15px" }}>
            Our reputation as the best real estate website in the market is
            backed by numbers. Our reputation as the best real estate website is
            reflected in our track record of 50,000 successful deals alongside
            100,000+ verified listings across 20 major Indian cities, resulting
            in a 4.8/5 customer satisfaction rating from nationwide property
            seekers.
          </p>
          <p className="fs-3 text-bold mt-3">Our Complete Property Solutions</p>
          <p style={{ fontSize: "13px", marginTop: "15px" }}>
            Our reputation as the best real estate website in the market is When
            you find the perfect property, your journey begins. The best real
            estate website in India serves customers through complete property
            solutions alongside property listings. Our integrated approach means
            you don't need to search elsewhere for these essential services
          </p>
          <ServicesCarousel />
        </div>
      </div>
    </div>
  );
}
