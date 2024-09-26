"use client";

import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#33ca7f] text-2xl">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">GERALD.</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#9EA3B0]">
          I make front-end web applications.
        </h2>
        <p className="text-[#9EA3B0] py-4 max-w-[700px] text-lg">
          Front-end developer currently based in Bordeaux, France.
          <br /> I specialise in building responsive and elegant web
          applications.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="rounded-lg text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#33ca7f] hover:border-[#33ca7f] hover:text-[#0a192f] duration-200">
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiChevronRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
