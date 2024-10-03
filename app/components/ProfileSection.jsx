"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const ProfileSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-blue-700 to-gray-900">
              Hello, I'm{""}
            </div>
            <TypeAnimation
              sequence={[
                "Patrycja",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Java Developer",
                1000,
                "Graphist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.2em", display: "inline-block" }}
              repeat={Infinity}
              bg-gradient-to-r
              from-gray-700
              via-rose-500
              to-orange-400
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 hover:bg-slate-200 text-white">
              Embauchez-moi
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Téléchargez le CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 lg:ml-10 mt-10 lg:mt-4 place-self-center">
          <div className="rounded-full bg-[#181818] w-[330px] h-[330px] relative">
            <Image
              src="/images/profile-circle.png"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
