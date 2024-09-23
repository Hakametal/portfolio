"use client";

import React, { useState } from "react";
// import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navStateHandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="text-2xl h-[60px] text-pink-500">
        Gerald Regan
        {/* <img src={Logo} alt={"Logo Image"} style={{ width: "50px" }}></img> */}
      </div>

      {/* {MENU} */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* {HAMBURGER ICON} */}
      <div onClick={navStateHandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* {MOBILE MENU} */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* {SOCIAL ICONS} */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-14 flex items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-xl"
              href="https://www.linkedin.com/in/gerald-regan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex items-center ml-[-100px] hover:ml-0 duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-xl"
              href="https://github.com/Hakametal"
              target="_blank"
              rel="noopener noreferrer"
            >
              github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-purple-900">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-xl"
              href="mailto:geraldregan@proton.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-green-700">
            <a
              className="flex justify-between items-center w-full text-gray-300 text-xl"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
