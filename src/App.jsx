import { useState } from 'react'; 
import Banner from './banner/Banner';
import Nav from "./navbar/Nav";
import Footer from "./Footer/footer";
import Mn from './Main/Mn';
// import Letter from './Letter/Letter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const propertyData = [
    { id: 1, lat: 19.076, lng: 72.8777, name: "Raheja Modern", area: "Mahalakshmi", price: "₹12.6 Cr" },
    { id: 2, lat: 19.02, lng: 72.85, name: "Ajmera Classique", area: "Prabhadevi", price: "₹12 Cr" },
    // Add more properties as needed
  ];

  return (
    <> 
      <Nav />
      <Banner />
      {/* Pass propertyData to Mn component */}
      <Mn propertyData={propertyData} />
      {/* <Letter/> */}
      <Footer />
    </>
  );
}

export default App;
