import React from 'react';
import Logo from '../assets/logo-text.png';
import Hamburger from '../assets/hamburger.png';

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b border-slate-200 z-999 px-4">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between items-center py-4">
          <img src={Hamburger} alt="Menu" className="md:hidden"></img>
          <img src={Logo} alt="DevStack Logo" className="ml-8 md:ml-0 w-28 md:w-36"></img>
          <div className="hidden lg:block">
            <ul className="flex gap-8">
              <li className="text-[#DB2777]">
                <a href="#">Home</a>
              </li>
              <li className="text-[#475569] hover:text-[#DB2777] transition-colors duration-300 ease-linear">
                <a href="#">Technology</a>
              </li>
              <li className="text-[#475569] hover:text-[#DB2777] transition-colors duration-300 ease-linear">
                <a href="#">Projects</a>
              </li>
              <li className="text-[#475569] hover:text-[#DB2777] transition-colors duration-300 ease-linear">
                <a href="#">About</a>
              </li>
              <li className="text-[#475569] hover:text-[#DB2777] transition-colors duration-300 ease-linear">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-1 md:gap-6">
            <button className="cursor-pointer hover:text-[#DB2777] text-xs md:text-[16px] transition-all duration-200 ease-linear ">
              Sign In
            </button>
            <button className="bg-[#DB2777] hover:bg-[#a34c73] text-xs md:text-[16px] text-white py-1 md:py-3 px-2 md:px-8 rounded-full cursor-pointer transition-all duration-200 ease-linear">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
