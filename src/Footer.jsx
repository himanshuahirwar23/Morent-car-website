import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between">
        {/* Left side: Logo and description */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-blue-600 text-2xl font-bold">MORENT</h2>
          <p className="text-gray-600 mt-2">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        {/* Links Section */}
        <div className="flex flex-wrap lg:space-x-10">
          <div className="mb-6 lg:mb-0">
            <h3 className="font-bold mb-4 text-gray-900">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">How it works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Featured</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Partnership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Business Relation</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0">
            <h3 className="font-bold mb-4 text-gray-900">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Podcast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Invite a friend</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0">
            <h3 className="font-bold mb-4 text-gray-900">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Discord</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom text */}
      <div className="border-t border-gray-200 mt-8 pt-6">
        <div className="container mx-auto px-6 lg:px-8 flex justify-between text-sm text-gray-600">
          <span>©2022 MORENT. All rights reserved</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy & Policy</a>
            <a href="#" className="hover:underline">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
