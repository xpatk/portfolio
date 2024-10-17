"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl  font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-sky-700 to-gray-900">
              Hello, je suis{""}
            </div>
            <div className="inline-block min-h-0 sm:min-h-[1.4em]">
              <TypeAnimation
                sequence={[
                  "Patrycja",
                  1000,
                  "Dev",
                  1000,
                  // "Java Developer",
                  // 1000,
                  "Graphiste",
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
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Je me spécialise dans la création d&rsquo;applications web
            dynamiques et réactives, offrant une expérience utilisateur fluide.
            Avec une expertise en front-end et back-end, je transforme les idées
            en solutions digitales fonctionnelles. Mon objectif&nbsp;?
            Développer des logiciels innovants, évolutifs et performants.
          </p>

          <div>
            <Link href="#contact" passHref>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-sky-700 hover:bg-slate-800 text-white">
                Contactez-moi
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-sky-700 hover:bg-sky-800 text-white mt-3">
              <a
                href="PKruczynska_CV.pdf"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Téléchargez le CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 lg:ml-10 mt-10 lg:mt-4 place-self-center"
        >
          <div className="rounded-full bg-[#121212] w-[310px] h-[310px] relative">
            <Image
              src="/images/profile-circle.webp"
              alt="image of a girl working on a computer anime style"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
