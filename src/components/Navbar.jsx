import React from 'react';
import Logo from '../assets/logo-text.png';

function Navbar() {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <img src={Logo} alt="DevStack Logo"></img>
        <ul className="flex gap-8">
          <li className="text-[#DB2777]">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#DB2777] transition-colors duration-300 ease-linear">
            <a href="#">Technology</a>
          </li>
          <li className="hover:text-[#DB2777] transition-colors duration-300 ease-linear">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-[#DB2777] transition-colors duration-300 ease-linear">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#DB2777] transition-colors duration-300 ease-linear">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex gap-6">
          <button>Sign In</button>
          <button className="bg-[#DB2777] text-white py-3 px-8 rounded-full">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
