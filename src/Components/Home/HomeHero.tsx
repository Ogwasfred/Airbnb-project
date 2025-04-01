import React from 'react';
import myimg from '../../assets/Frame 6 (1).jpg'
import myimg2 from '../../assets/Frame 6 (10).jpg'
import myimg3 from '../../assets/Frame 6 (11).jpg'
import myimg4 from '../../assets/Frame 6 (12).jpg'
import myimg5 from '../../assets/Frame 6 (13).jpg'
import myimg6 from '../../assets/Frame 6 (14).jpg'
import myimg7 from '../../assets/Frame 6 (15).jpg'
import myimg8 from '../../assets/Frame 6 (16).jpg'
import myimg9 from '../../assets/Frame 6 (6).jpg'
import myimg11 from '../../assets/Frame 6 (5).jpg'
import myimg10 from '../../assets/Frame 6 (8).jpg'

const listings = [
  {
    image: [myimg],
    location: "Half Moon Bay, California, US",
    type: "Beach and ocean views",
    date: "22-27 Oct · Individual Host",
    price: "£1,634 total",
    rating: 5.0,
  },
  {
    image: [myimg2],
    location: "Aspen, Colorado, US",
    type: "Mountain retreat",
    date: "15-20 Nov · Individual Host",
    price: "£2,200 total",
    rating: 4.8,
  },
  {
    image: [myimg3],
    location: "Santorini, Greece",
    type: "Oceanfront villa",
    date: "10-15 Sep · Individual Host",
    price: "£3,000 total",
    rating: 4.9,
  },
  {
    image: [myimg4],
    location: "Kyoto, Japan",
    type: "Traditional Ryokan",
    date: "5-10 Dec · Individual Host",
    price: "£1,800 total",
    rating: 4.7,
  },
  {
    image: [myimg5],
    location: "Paris, France",
    type: "City apartment",
    date: "1-6 Jan · Individual Host",
    price: "£1,500 total",
    rating: 4.6,
  },
  {
    image: [myimg6],
    location: "Cape Town, South Africa",
    type: "Luxury safari lodge",
    date: "20-25 Mar · Individual Host",
    price: "£2,500 total",
    rating: 5.0,
  },
  {
    image: [myimg7],
    location: "Bali, Indonesia",
    type: "Tropical paradise",
    date: "12-18 Aug · Individual Host",
    price: "£2,100 total",
    rating: 4.9,
  },
  {
    image: [myimg8],
    location: "Reykjavik, Iceland",
    type: "Northern lights cabin",
    date: "3-8 Feb · Individual Host",
    price: "£2,800 total",
    rating: 4.8,
  },
  {
    image: [myimg9],
    location: "Reykjavik, Iceland",
    type: "Northern lights cabin",
    date: "3-8 Feb · Individual Host",
    price: "£2,800 total",
    rating: 4.8,
  },
  {
    image: [myimg10],
    location: "Reykjavik, Iceland",
    type: "Northern lights cabin",
    date: "3-8 Feb · Individual Host",
    price: "£2,800 total",
    rating: 4.8,
  },
  {
    image: [myimg11],
    location: "Reykjavik, Iceland",
    type: "Northern lights cabin",
    date: "3-8 Feb · Individual Host",
    price: "£2,800 total",
    rating: 4.8,
  },
];

function ListingCard({ listing }: { listing: typeof listings[0] }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={listing.image} alt={listing.location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{listing.location}</h3>
        <p className="text-gray-600 text-sm">{listing.type}</p>
        <p className="text-gray-500 text-xs">{listing.date}</p>
        <p className="text-black font-bold mt-2">{listing.price}</p>
        <p className="text-yellow-500">⭐ {listing.rating}</p>
      </div>
    </div>
  );
}

const HomeHero = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
          Show more
        </button>
      </div>
    </div>
  );
};

export default HomeHero;