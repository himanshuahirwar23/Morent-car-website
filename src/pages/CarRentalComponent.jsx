import React, { useState } from "react";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function CarRentalComponent() {
  const [price, setPrice] = useState(100);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const cars = [
    { name: "Koenigsegg", type: "Sport", price: 99, imageUrl: "car1.png" },
    { name: "Nissan GT-R", type: "Sedan", price: 80, imageUrl: "car8.png" },
    { name: "Rolls-Royce", type: "MPV", price: 90, imageUrl: "car1.png" },
    { name: "All New Rush", type: "Coupe", price: 72, imageUrl: "car8.png" },
    { name: "CR - V", type: "Hatchback", price: 50, imageUrl: "car1.png" },
    { name: "All New Terios", type: "SUV", price: 30, imageUrl: "car8.png" },
  ];

  const handleTypeChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const filteredCars = cars.filter(
    (car) =>
      (selectedTypes.length === 0 || selectedTypes.includes(car.type)) &&
      car.price <= price
  );

  return (
    <div>
      <Nav></Nav>
      <div>
        <div className="flex flex-col md:flex-row p-5 bg-gray-100 min-h-screen">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md mr-5">
            <h2 className="text-xl font-semibold mb-4">Type</h2>
            <ul className="mb-6">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (type) => (
                  <li key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => handleTypeChange(type)}
                    />
                    <span>{type}</span>
                  </li>
                )
              )}
            </ul>

            <h2 className="text-xl font-semibold mb-4">Price</h2>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mr-3"
              />
              <span>Max. ${price}.00</span>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            <div className="  gap-4 mb-6 ">
              {["Pick-Up Location", "Date", "Time", "Drop-Off Location"].map(
                (placeholder, idx) => (
                  <div key={idx} className="flex-1">
                    <label className="block text-gray-600 mb-1">
                      {placeholder}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                )
              )}
              <button className="bg-blue-500 text-white p-6 rounded-md">
                Search
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredCars.map((car, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="w-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                  <p className="text-xl font-bold">${car.price}.00/day</p>
                  <NavLink to="/cars">
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
                      Rent Now
                    </button>
                  </NavLink>
                </div>
              ))}
            </div>

            <button className="mt-8 w-[200px] md:ml-0 ml-[24%] md:w-full bg-blue-500 text-white md:bg-blue-500 sm:text-white p-3 rounded-md ">
              Show more cars
            </button>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CarRentalComponent;
