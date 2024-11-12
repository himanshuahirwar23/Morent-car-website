import React from "react";
import { CiLogout } from "react-icons/ci";
import Nav from "./pages/Nav";
function Dashboard() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex h-auto bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-1/5 max-md:hidden bg-white p-6 shadow-md flex flex-col justify-between">
        {/* Main Menu */}
        <div>
          <h2 className="text-lg font-semibold mb-8 text-gray-600">MAIN MENU</h2>
          <nav>
            <ul className="space-y-4">  
              <li className="text-blue-500 font-bold">Dashboard</li>
              <li className="text-gray-600">Car Rent</li>
              <li className="text-gray-600">Insight</li>
              <li className="text-gray-600">Reimburse</li>
              <li className="text-gray-600">Inbox</li>
              <li className="text-gray-600">Calendar</li>
            </ul>
          </nav>

          {/* Preferences */}
          <h2 className="text-lg font-semibold mt-8 mb-4 text-gray-600">PREFERENCES</h2>
          <ul className="space-y-4">
            <li className="text-gray-600">Settings</li>
            <li className="text-gray-600">Help & Center</li>  
            <li className="text-gray-600 flex items-center justify-between">
              Dark Mode
              <button className="bg-gray-200 p-2 rounded-full">
                <span className="bg-blue-500 block w-4 h-4 rounded-full"></span>
              </button>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <button className="mt-8 text-gray-600 flex items-center space-x-2">
          <span className="material-icons"><CiLogout size={20}/>
          </span>
          <span>Log Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Details Rental Section */}
          <section className="max-md:w-[84vw] col-span-2 max-md:col-span-4 bg-white p-6 rounded-md shadow-md">
            <h2 className="font-semibold text-lg mb-4">Details Rental</h2>
            {/* Map and Car Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 h-48 rounded-md">
                <img className= "w-full h-full" src="./map.png" alt="" />
              </div>
              <div>
                <h3 className="font-semibold">Nissan GT - R</h3>
                <p className="text-gray-500">Sport Car</p>
                {/* Pick-Up and Drop-Off Details */}
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">Pick-Up</h4>
                    <p>Location: New Market</p>
                    <p>Date: 20 July 2022</p>
                    <p>Time: 07:00</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Drop-Off</h4>
                    <p>Location: Bhopal Junction</p>
                    <p>Date: 21 July 2022</p>
                    <p>Time: 09:00</p>
                  </div>
                </div>
                <p className="mt-4 font-semibold">Total Rental Price: $80.00</p>
              </div>
            </div>
          </section>

          {/* Top 5 Car Rental */}
          <section className="bg-white max-md:w-[84vw] p-6 rounded-md shadow-md">
            <h2 className="font-semibold text-lg mb-4">Top 5 Car Rental</h2>
            {/* Pie Chart Placeholder */}
            <div className="bg-[#3562e9d9] h-40 rounded-md mb-4 flex items-center justify-center">
                <img className="" src="./car8.png" alt="" />
              {/* <span>Pie Chart</span> */}
              
            </div>
            <ul className="space-y-2">
              <li>Sport Car: 17,439</li>
              <li>SUV: 9,478</li>
              <li>Coupe: 18,197</li>
              <li>Hatchback: 12,510</li>
              <li>MPV: 14,406</li>
            </ul>
          </section>

          {/* Recent Transactions */}
          <section className="col-span-3 max-md:w-[84vw]  max-md:col-span-4 bg-white p-6 rounded-md shadow-md">
            <h2 className="font-semibold text-lg mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <p>Nissan GT - R | Sport Car | 20 July</p>
                <p className="font-semibold">$80.00</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Koenigsegg | Sport Car | 19 July</p>
                <p className="font-semibold">$99.00</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Rolls - Royce | Luxury Car | 18 July</p>
                <p className="font-semibold">$96.00</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>CR - V | SUV | 17 July</p>
                <p className="font-semibold">$80.00</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    </div>
  );
}

export default Dashboard;
