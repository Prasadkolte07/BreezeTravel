import React from 'react';

export default function Home() {
  const hotels = [
    { id: 1, name: 'Taj Hotel', location: 'Mumbai', price: 5000, imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Oberoi Udaivilas', location: 'Udaipur', price: 7000, imageUrl: 'https://via.placeholder.com/300' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotels.map(hotel => (
          <div key={hotel.id} className="shadow-lg rounded-lg p-4 bg-white">
            <img src={hotel.imageUrl} alt={hotel.name} className="rounded mb-2" />
            <h2 className="font-semibold text-lg">{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p className="text-green-600">₹{hotel.price}/night</p>
          </div>
        ))}
      </div>
    </div>
  );
}