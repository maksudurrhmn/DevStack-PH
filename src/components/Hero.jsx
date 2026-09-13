import React from 'react';
import HeroBanner from '../assets/banner-stack.png';

function Hero() {
  return (
    <section className="lg:container lg:mx-auto flex flex-col lg:flex-row lg:gap-48 justify-between items-center px-4 lg:px-0 py-6 mt-12 lg:mt-0 lg:py-12">
      <div className="flex flex-col items-center lg:block lg:w-1/2">
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#0F172A] text-center lg:text-left">
          Build Your Ideal{' '}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-sm md:text-xl text-[#475569] text-center lg:text-left py-4 md:py-8">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
        <div className="flex gap-2">
          <button className="text-xs relative w-42 md:w-52 py-3 rounded-xl cursor-pointer text-white overflow-hidden bg-linear-to-r from-[#F97316] to-[#EC4899] before:absolute before:inset-0 before:bg-linear-to-r before:from-[#d88549] before:to-[#bb4e85] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
            <span className="relative z-10">Explore Technologies</span>
          </button>
          <button className="text-xs md:text-[16px] border border-[#E5E7EB] hover:bg-slate-200 w-42 md:w-52 py-3 cursor-pointer rounded-xl transition-all duration-300 ease-linear">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img className="md:w-full" src={HeroBanner} alt="Hero Image"></img>
      </div>
    </section>
  );
}

export default Hero;
