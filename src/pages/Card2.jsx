import React from "react";

const Card2 = () => {
  return (
    <div className="w-full h-[300px] bg-orange-300 overflow-hidden flex relative ">
      <div className="w-[500px] h-[150px] bg-red-300 ml-[70px] p-6 mt-10 rounded-[20px]"></div>
      <img
        className="w-[90px] h-[80px] ml-20 mt-20"
        src="/Switch.png"
        alt=""
        srcset=""
      />
      <div className="w-[500px] h-[150px] bg-red-300 ml-[70px] mr-[70px] p-6 mt-10 rounded-[20px]">
        
      </div>

      <h4 className="absolute bottom-7 text-[#99abc4] mt-4 left-10">Popular Car</h4>
    </div>
  );
};

export default Card2;

