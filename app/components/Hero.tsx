import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#33ca7f] text-lg">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">GERALD</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9EA3B0]">
          I'm a front-end engineer.
        </h2>
        <p className="text-[#9EA3B0] py-4 max-w-[700px] text-lg">
          I’m a front-end developer currently based in Bordeaux, France.
          <br /> I specialise in building responsive and elegant web
          applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#33ca7f] hover:border-[#33ca7f]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
