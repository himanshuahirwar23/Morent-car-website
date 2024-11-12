import React, { useState } from 'react';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const reviews = [
  {
    id: 1,
    name: 'Alex Stanton',
    position: 'CEO of Mobile Tech',
    date: '21 May 2022',
    text: 'We were very happy with the service from this platform. It was very friendly and provides a wide variety of cars with very good and comfortable facilities.',
    rating: 5,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Skylar Dias',
    position: 'COO at Auto Nation',
    date: '22 May 2022',
    text: 'Great experience! Highly recommended for affordable rentals and a wide range of cars.',
    rating: 4,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

function Car() {
  const [price, setPrice] = useState(100); // State to track the price

  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-col md:flex-row bg-gray-100 gap-6 p-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-6">
          <h2 className="text-lg font-semibold">Type</h2>
          <ul>
            {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(type => (
              <li key={type} className="flex items-center">
                <input type="checkbox" id={type} className="mr-2" />
                <label htmlFor={type} className="text-gray-700">{type} (10)</label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold">Capacity</h2>
          <ul>
            {['2 Person', '4 Person', '6 Person', '8 or More'].map(capacity => (
              <li key={capacity} className="flex items-center">
                <input type="checkbox" id={capacity} className="mr-2" />
                <label htmlFor={capacity} className="text-gray-700">{capacity} (10)</label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold">Price</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />
          <div className="text-gray-700">Max: ${price}.00</div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Featured Car */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">Nissan GT - R</h3>
                <p className="text-gray-500">Sports car with the best design and acceleration</p>
                <p className="text-gray-500 mt-2">NISMO has become the embodiment...</p>
                <p className="text-lg font-semibold mt-2">$80.00 / days</p>
                <NavLink to="/payment">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Rent Now</button>
                </NavLink>
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <img src="/car8.png" alt="Nissan GT-R" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 rounded-lg mb-6">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex p-4 bg-white rounded-lg shadow-md">
                  <img src={review.image} alt={`${review.name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-xs text-gray-400">{review.position}</p>

                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < review.rating ? '#f59e0b' : 'none'}
                          viewBox="0 0 24 24"
                          stroke={i < review.rating ? '#f59e0b' : '#d1d5db'}
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 mt-2 text-sm">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Cars */}
          <h2 className="text-xl font-semibold mb-4">Recent Car</h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Koenigsegg', type: 'Sport', price: 99.00 },
              { name: 'Nissan GT - R', type: 'Sport', price: 80.00 },
              { name: 'Rolls-Royce', type: 'Sport', price: 96.00 },
            ].map(car => (
              <div key={car.name} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-500">{car.type}</p>
                <p className="text-lg font-semibold">${car.price}</p>
                <button className="bg-blue-500 text-white py-1 px-3 rounded mt-2">Rent Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Car;
