import React from 'react'

function Hero() {
  return (
    <div>
    
const listings = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Beach and ocean views",
    location: "Half Moon Bay, California, US",
    price: "$1,654 total",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Luxury Oceanfront Villa",
    location: "Half Moon Bay, California, US",
    price: "$2,300 total",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Secluded Mountain Retreat",
    location: "Half Moon Bay, California, US",
    price: "$1,850 total",
  },
  // Add more listings as needed
];

const RentalListings = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-gray-900 p-4 rounded-2xl shadow-lg text-white"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{listing.title}</h2>
            <p className="text-gray-400">{listing.location}</p>
            <p className="text-lg font-bold mt-2">{listing.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


    </div>
  )
}

export default Hero

