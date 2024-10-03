"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const Apropos = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/comp.png" width={500} height={500} />
        <div>
          <h2 className="text-4xl gont-bold text-white mb-4">
            A propos de moi
          </h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-600">
              Compétences
            </span>
            <span>Éducation</span>
            <span>Éxperience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
