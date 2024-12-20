import React from "react";
import Avatar from "../avatar.jpg";

const About: React.FC = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* <div className="max-w-[1000px] w-full gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#33ca7f]">
              About
            </p>
          </div>
        </div> */}
        <div className="max-w-[62.5rem] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Thanks for checking out my portfolio! Please take a look around.
            </p>
            <p className="text-lg text-[#9EA3B0] pt-8">
              I am passionate about building elegant web applications with
              modern JavaScript frameworks. I specialise in ReactJS (currently
              using NextJS), Tailwind CSS and TypeScript.
            </p>
          </div>
          <img
            src={Avatar.src}
            alt="Avatar"
            className="w-auto h-96 mx-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
