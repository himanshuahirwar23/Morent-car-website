import React, { useState } from "react";
import Footer from "../Footer";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";


const PaymentCar = () => {
  const [formData, setFormData] = useState({
    name: "Himanshu Ahirwar",
    phoneNumber: "+91-9806724786",
    address: "Sindhi Colony",
    townCity: "BHOPAL",
    pickUpLocation: "New Market",
    pickUpDate: "29/10/24",
    pickUpTime: "11:00",
    dropOffLocation: "Bhopal junction",
    dropOffDate: "29/10/24",
    dropOffTime: "16:00",
    paymentMethod: "creditCard",
    cardNumber: "",
    expirationDate: "",
    cardHolder: "",
    cvc: "",
    agreeToMarketing: false,
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
   <div>
    <Nav></Nav>
     <div>
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 max-w-full mx-auto">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Billing Info */}
        <div className="w-full md:w-2/3">
          <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              placeholder="Town / City"
              className="p-2 border rounded"
            />
          </div>
          {/* Rental Info */}
          <h2 className="text-lg font-semibold mt-8 mb-4">Rental Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pick-Up Section */}
            <div>
              <h3 className="text-md font-semibold">Pick-Up</h3>
              <input
                type="text"
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
                placeholder="Location"
                className="p-2 border rounded mt-2"
              />
              <input
                type="date"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                className="p-2 border rounded mt-2"
              />
              <input
                type="time"
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="p-2 border rounded mt-2"
              />
            </div>
            {/* Drop-Off Section */}
            <div>
              <h3 className="text-md font-semibold">Drop-Off</h3>
              <input
                type="text"
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                placeholder="Location"
                className="p-2 border rounded mt-2"
              />
              <input
                type="date"
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
                className="p-2 border rounded mt-2"
              />
              <input
                type="time"
                name="dropOffTime"
                value={formData.dropOffTime}
                onChange={handleChange}
                className="p-2 border rounded mt-2"
              />
            </div>
          </div>
        </div>

        {/* Rental Summary */}
        <div className="w-full md:w-1/3 bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold ml-28 mb-4">Rental Summary</h2>
          <div className=" mb-2 w-[350px] h-[100px] ">
          <img src="/car8.png" alt="Car" className="w-full h-full rounded" />
          </div>
          <div className="flex items-center gap-4">
            {/* <img src="/car1.png" alt="Car" className="w-20 h-12 rounded" /> */}
            <div>
              <h3 className="text-md font-semibold">Nissan GT - R</h3>
              <p className="text-sm text-gray-500">4.0 (100+ Reviews)</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Subtotal: <span className="float-right">$80.00</span></p>
            <p>Tax: <span className="float-right">$0.00</span></p>
            <input
              type="text"
              placeholder="Apply promo code"
              className="p-2 border rounded w-full mt-2"
            />
            <p className="mt-4 font-semibold">Total Rental Price: <span className="float-right">$80.00</span></p>
          </div>
         
        </div>



      </div>

      {/* Payment Method */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={formData.paymentMethod === "creditCard"}
              onChange={handleChange}
            />
            Credit Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Debit card"
              checked={formData.paymentMethod === "debitCard"}
              onChange={handleChange}
            />
            Debit Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              checked={formData.paymentMethod === "upi"}
              onChange={handleChange}
            />
            UPI
          </label>
        </div>

        {/* Credit Card Fields */}
        {formData.paymentMethod === "creditCard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="Card Holder"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              placeholder="CVC"
              className="p-2 border rounded"
            />
          </div>
        )}
      </div>

      {/* Confirmation */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeToMarketing"
              checked={formData.agreeToMarketing}
              onChange={handleChange}
            />
            I agree with receiving marketing emails.
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree with the terms and privacy policy.
          </label>
        </div>
        <NavLink to="/dashboard">
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Rent Now
        </button>
        </NavLink>
        
      </div>
    </form>
    <Footer></Footer>
    </div>
   </div>
    
  );
};

export default PaymentCar;
