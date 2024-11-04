import React from 'react';

const Card = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-8 overflow-hidden">
        <div className="w-full max-w-md p-6 h-auto md:h-[300px] relative bg-[#54A6ff] rounded-lg overflow-hidden">
          <h1 className="leading-9 text-[20px] md:text-[25px] text-white">The Best Platform <br /> for Car Rental</h1>
          <p className="text-white text-[13px] md:text-[15px] pt-3">Ease of doing car rental safely and <br />reliably, of course, at a low price</p>
          <button className="text-sm mt-5 rounded-lg px-4 py-2 bg-white text-black">Rental Car</button>
          <div className="w-[150px] md:w-[250px] h-[60px] md:h-[90px] absolute bottom-0 right-0">
            <img className="w-full h-full object-contain" src="/car1.png" alt="Car 1" />
          </div>
        </div>
        
        <div className="w-full max-w-md p-6 h-auto md:h-[300px] relative bg-[#54A6ff] rounded-lg overflow-hidden">
          <h1 className="leading-9 text-[20px] md:text-[25px] text-white">Easy way to rent a <br />car at a low price</h1>
          <p className="text-white text-[13px] md:text-[15px] pt-3">Providing cheap car rental services <br />with safe and comfortable facilities.</p>
          <button className="text-sm mt-5 rounded-lg px-4 py-2 bg-white text-black">Rental Car</button>
          <div className="w-[150px] md:w-[250px] h-[60px] md:h-[90px] absolute bottom-0 right-0">
            <img className="w-full h-full object-contain" src="/car8.png" alt="Car 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
