"use client";

import React, { useState } from "react";
// import Logo possibly from a file
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const navStateHandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-[#9EA3B0]">
      <div className="text-2xl h-[60px] text-[#33ca7f]">
        {/* <img src={Logo} alt={"Logo Image"} style={{ width: "50px" }}></img> */}
      </div>

      {/* {MENU} */}
      <ul className="hidden lg:flex gap-8 font-medium pr-4">
        <li className="hover:text-[#33ca7f] duration-500 cursor-default hover:cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#33ca7f] duration-500 cursor-default hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#33ca7f] duration-500 cursor-default hover:cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#33ca7f] duration-500 cursor-default hover:cursor-pointer">
          Projects
        </li>
        <li className="hover:text-[#33ca7f] duration-500 cursor-default hover:cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* {HAMBURGER ICON} */}
      <div onClick={navStateHandler} className="lg:hidden z-10">
        {!nav ? <FaBars size={32} /> : <IoMdReturnLeft size={38} />}
      </div>

      {/* {MOBILE MENU} */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-12 text-4xl"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* {SOCIAL ICONS} */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-[#0a192f] text-lg">
        <ul>
          <li className="w-40 h-14 flex items-center ml-[-100px] hover:ml-0 duration-300 bg-[#9EA3B0] pr-4 pl-4 border-b-2 border-[#0a192f] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/gerald-regan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex items-center ml-[-100px] hover:ml-0 duration-300 bg-[#9EA3B0] pr-4 pl-4 border-b-2 border-[#0a192f] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/Hakametal"
              target="_blank"
              rel="noopener noreferrer"
            >
              github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#9EA3B0] pr-4 pl-4 border-b-2 border-[#0a192f] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:geraldregan@proton.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#9EA3B0] pr-4 pl-4 border-b-2 border-[#0a192f] rounded-r-lg">
            <a
              className="flex justify-between items-center w-full"
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
