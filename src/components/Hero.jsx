import React from 'react';
import HeroBanner from '../assets/banner-stack.png';

function Hero() {
  return (
    <section className="container mx-auto flex gap-48 justify-between items-center py-12">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-[#0F172A]">
          Build Your Ideal{' '}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-xl text-[#475569] py-8">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits your next project.
        </p>
        <button className="relative w-52 py-3 rounded cursor-pointer text-white mr-4 overflow-hidden bg-linear-to-r from-[#F97316] to-[#EC4899] before:absolute before:inset-0 before:bg-linear-to-r before:from-[#d88549] before:to-[#bb4e85] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
          <span className="relative z-10">Explore Technologies</span>
        </button>
        <button className="border border-[#E5E7EB] hover:bg-[#f3eaea] w-52 py-3 cursor-pointer rounded transition-all duration-300 ease-linear">
          Learn More
        </button>
      </div>
      <div className="w-1/2">
        <img className="w-full" src={HeroBanner} alt="Hero Image"></img>
      </div>
    </section>
  );
}

export default Hero;
