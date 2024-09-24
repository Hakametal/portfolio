import React from "react";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import ReactImg from "../images/react.png";
import Next from "../images/next.png";
import TypeScript from "../images/typescript.png";
import Git from "../images/git.png";
import Tailwind from "../images/tailwind.png";

const Experience = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#33ca7f] ">
            Skills
          </p>
          <p className="py-4 text-lg text-[#9EA3B0]">
            These are the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#9EA3B0]">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML.src} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS.src} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript.src}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={ReactImg.src}
              alt="ReactJS icon"
            />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git.src} alt="Git icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next.src} alt="NextJS icon" />
            <p className="my-4">NEXT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScript.src}
              alt="TypeScript icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind.src}
              alt="Tailwind CSS icon"
            />
            <p className="my-4">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
