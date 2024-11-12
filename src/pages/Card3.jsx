import React from 'react'

const Card3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 my-8 mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md w-full md:max-w-[600px]">
      
      {/* Pick-Up Section */}
      <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
        <div className="flex items-center space-x-2">
          <input type="radio" name="type" checked className="form-radio text-blue-600" />
          <label className="font-semibold text-blue-600">Pick-Up</label>
        </div>
        <div className="mt-4 grid grid-cols-1  sm:grid-cols-3 gap-4 text-sm">
          <div>
            <label className="block font-medium">Locations</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Date</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block font-medium">Time</label>
            <input type="time" className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex items-center justify-center md:justify-start">
        <button className="p-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          ⬍
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
        <div className="flex items-center space-x-2">
          <input type="radio" name="type" className="form-radio text-blue-600" />
          <label className="font-semibold text-blue-600">Drop-Off</label>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <label className="block font-medium">Locations</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Date</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block font-medium">Time</label>
            <input type="time" className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card3
