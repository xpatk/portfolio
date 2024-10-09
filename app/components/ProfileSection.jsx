"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const ProfileSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-sky-700 to-gray-900">
              Hello, I&#39;m{""}
            </div>
            <TypeAnimation
              sequence={[
                "Patrycja",
                1000,
                "Developer",
                1000,
                // "Java Developer",
                // 1000,
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
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-gray-400 to-sky-700 hover:from-gray-600 hover:to-sky-900 text-white">
              Embauchez-moi
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-gray-400 to-sky-700 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Téléchargez le CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 lg:ml-10 mt-10 lg:mt-4 place-self-center">
          <div className="rounded-full bg-[#121212] w-[310px] h-[310px] relative">
            <Image
              src="/images/profile-circle.png"
              alt="image of a girl working on a computer anime style"
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
