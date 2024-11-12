import React from "react";
import { Link, NavLink } from "react-router-dom";

const CarRental = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      engineSize: 9,
      transmission: "Manual",
      seats: 2,
      price: 99,
      image: "/car1.png", 
      favorited: false,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      engineSize: 8,
      transmission: "Manual",
      seats: 2,
      price: 80,
      discountPrice: 100,
      image: "/car1.png", 
      favorited: true,
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png",
      favorited: false,
    },
    {
      name: "Nissan GT-R",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png",
      favorited: false,
    },
    {
      name: "All New Rush",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png", 
      favorited: false,
    },
    {
      name: "CR - V",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png", 
      favorited: false,
    },
    {
      name: "All New Terios",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png",
      favorited: false,
    },
    {
      name: "CR - V",
      type: "Sedan",
      engineSize: 7,
      transmission: "Manual",
      seats: 4,
      price: 96,
      image: "/car1.png",
      favorited: false,
    },
    // {
    //   name: "MG ZX Exclusice",
    //   type: "Sedan",
    //   engineSize: 7,
    //   transmission: "Manual",
    //   seats: 4,
    //   price: 96,
    //   image: "/car1.png", 
    //   favorited: false,
    // },
    // {
    //   name: "New MG ZS",
    //   type: "Sedan",
    //   engineSize: 7,
    //   transmission: "Manual",
    //   seats: 4,
    //   price: 96,
    //   image: "/car1.png", 
    //   favorited: false,
    // },
    // {
    //   name: "MG ZX Excite",
    //   type: "Sedan",
    //   engineSize: 7,
    //   transmission: "Manual",
    //   seats: 4,
    //   price: 96,
    //   image: "/car1.png", 
    //   favorited: false,
    // },
    // {
    //   name: "New MG ZS",
    //   type: "Sport",
    //   engineSize: 8,
    //   transmission: "Manual",
    //   seats: 2,
    //   price: 80,
    //   discountPrice: 100,
    //   image: "/car1.png", 
    //   favorited: false,
    // },
  ];

  return (
    <div>
      <div className="ml-2 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 p-10">
        {cars.map((car, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-2 w-70">
            <div className="flex justify-between items-center ">
              <h2 className="text-lg font-bold">{car.name}</h2>
              <button
                className={`p-1 rounded-full ${
                  car.favorited ? "text-red-500" : "text-gray-400"
                }`}
              >
                {car.favorited ? "🤍" : "❤️ "}
              </button>
            </div>
            <p className="text-sm text-gray-500">{car.type}</p>
            <img
              src={car.image}
              alt={car.name}
              className="w-[300px] h-[60px] object-cover mt-2"
            />
            <div className="flex justify-between mt-3">
              <div className="flex items-center space-x-1 text-gray-500">
                <span>{car.engineSize}L</span>
                <span>•</span>
                <span>{car.transmission}</span>
                <span>•</span>
                <span>{car.seats} People</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-xl font-bold">${car.price}/day</span>
                {/* {car.discountPrice && (
                <span className="text-sm line-through text-gray-400 ml-2">${car.discountPrice}</span>
              )} */}
              </div>
             <NavLink to="/carrental"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Rent Now
              </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <NavLink to="/carrental">
        <button className="bg-blue-500 text-white px-10 py-2 md:px-4 md:py-2 mb-10 ml-[30%] md:mx-[45%] rounded-md">
          Show more
        </button>
      </NavLink>
    </div>
  );
};

export default CarRental;
