
import React from 'react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import myimg from "../assets/house1.webp";
import myimg2 from "../assets/house2.jpg";
import myimg3 from "../assets/house3.jpeg";
import myimg4 from "../assets/house4.jpeg";
import myimg5 from "../assets/house5.jpg";
import myimg6 from "../assets/house6.jpeg";
import myimg7 from "../assets/house7.jpg";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';


// Data for the carousel
const myList = [
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg2, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg3, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg4, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg5, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg6, date: "22–27 Oct · Individual Host" },
  { location: "Half Moon Bay, California, US", description: "Beach and ocean views", price: "£1,634 total", rating: 5.0, image: myimg7, date: "22–27 Oct · Individual Host" },
];

function Signin() {
  return (
    <div className="">
    <Navbar />
    <h1 className="text-center text-2xl text-red-400 font-bold capitalize my-6 animate-bounce">
      Property for Sale
    </h1>
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={4000}
      showStatus={false}
      className="lg:w-200 lg:h-200 w-96 h-96 mx-auto"
    >
      {myList.map((item, index) => (
        <div key={index} className="p-4">
          <img src={item.image} alt="Listing" className="rounded-lg" />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{item.location}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-600">{item.date}</p>
            <p className="font-semibold mt-2">{item.price}</p>
            <p className="text-sm text-yellow-500">⭐ {item.rating}</p>
          </div>
        </div>
      ))}
    </Carousel>
    <div>
    <Footer />
    </div>
  </div>
  )
}

export default Signin