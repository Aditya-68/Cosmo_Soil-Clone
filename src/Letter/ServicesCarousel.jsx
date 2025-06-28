// components/ServicesCarousel.js
import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const services = [
  {
    title: "Loans",
    description:
      "Exclusive home loan options will match your financial needs and budget requirements. Our experienced loan specialists guide you through complicated financing while securing top interest rates."
  },
  {
    title: "Interior Designers",
    description:
      "Expert designers at our company help you design the perfect home environment. Our experts design customised homes that match your style while optimizing space functionality."
  },
  {
    title: "Legal & Documentation",
    description:
      "Our representatives assist with understanding the complicated legal process of property buying through their detailed documentation expertise."
  },
  {
    title: "Home Maintenance",
    description:
      "Our dependable maintenance operations will maintain your property in excellent condition. The verified technicians at our company address all kinds of plumbing, electrical, and carpentry problems."
  },
  {
    title: "Event Management",
    description:
      "Celebrate your new home with professionally organized housewarming events. Event management professionals from our team handle every detail of your new home festivities."
  },
  {
    title: "Rental Furniture",
    description:
      "Our quality rental furniture options provide immediate property set-up. Our flexible rental plans enable you to access well-maintained furniture while saving on upfront costs."
  },{
    title: "Archcetecture",
    description:
      "You can make your property dream a reality through our professional architect network. The team designs personalized solutions that minimize space waste while utilizing modern design features and maintaining building integrity. Let experts assist you with both new building projects and renovation plans. Connect with Top Architects."
  },{
    title: "Vastu",
    description:
      " Bring positive energy to your new house through services from our Vastu consultation experts. Our experts deliver actionable advice that helps arrange rooms, position furniture, and select color schemes based on traditional methods that create harmony and bring prosperity."
  }
];

const ServicesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
