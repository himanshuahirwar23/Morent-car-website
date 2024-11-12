import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { GoBellFill } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';

const Nav = () => {
  return (
    <div className=' h-16 pb-10 bg-white flex justify-center items-center'>
      <div className='w-full h-0 '>
        <h1 className="text-2xl text-[#3563E9]  absolute left-12 font-bold">MORENT</h1>
        {/* <div className="w-[400px] h-[35px] border absolute left-60 rounded-lg flex items-center 
         text-[#ABB3BF] text-sm px-3 justify-between">
        <CiSearch size={23} />
        <TbAdjustmentsHorizontal size={23}/>


        <input placeholder="Search something here" className="w-[300px] h-[22px] text-[#000000] outline-none absolute left-10 ">
        </input>

        </div> */}
        <div className='absolute right-10 bg-slate-500'>
         <div className='absolute  right-5 md:hidden'> <MdMenu size={30}></MdMenu></div>
        </div>
        <div className="w-[140px] max-md:hidden sm:w-[400px] h-[35px] border absolute sm:left-60 left-[40%] right-4 rounded-lg flex items-center  text-[#ABB3BF] text-sm px-3 justify-between">
    <CiSearch size={23} />
    

    <input 
        placeholder="Search something here" 
        className="w-full sm:w-[300px] h-[22px] text-[#000000] outline-none ml-2"
    />
    <TbAdjustmentsHorizontal size={23} />
</div>

        <div className="w-[180px] h-[40px] absolute right-0 inline-flex max-md:hidden">
            <div className="w-[40px] h-[40px] rounded-[50%]  ml-1 flex items-center justify-center	">
            <GoBellFill size={20}/>


            </div>
            <div className="w-[40px] h-[40px] rounded-[50%]  ml-1 flex items-center justify-center">
            <FaHeart size={20}/>

            </div>
            <div className="w-[40px] h-[40px] rounded-[50%]  ml-1 flex items-center justify-center">
            <IoSettings size={20}/>

            </div>
            <div className="w-[30px] h-[30px] rounded-[50%] mt-1 ml-2">
              <img src="./profile.png" alt="" />
            </div>
        </div>
        
        
    </div>
    </div>
  )
}

export default Nav