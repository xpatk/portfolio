import React from "react";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-5xl lg:text-6xl font-extrabold">
            Hello, I'm Patrycja
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Embauchez-moi
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Téléchargez le CV
            </button>
          </div>
        </div>
        <div className="col-span-5 lg:ml-10 mt-10 lg:mt-4 place-self-center">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
            <Image
              src="/images/robot.png"
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
