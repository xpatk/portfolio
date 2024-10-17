import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <Image
          src="/icons/LOGO.png"
          height={80}
          width={80}
          alt="logo"
          className="h-auto w-auto"
        />

        <p className="text-slate-300">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
