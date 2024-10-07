import React from "react";
import GithubIcon from "../../public/icons/icons8-github-24.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="" />
      <div>
        <h5 className="text-xl font-bold text-white my-2">Prenons contact</h5>
        <p className="text-[#ADB7BE] mb-w-md">
          Toujours à la recherche de nouvelles opportunités. Mon inbox est
          ouverte ! Que vous ayez une question ou une idée, je vous répondrai au
          plus vite.
        </p>
        <br />
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/xpatk">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="jean@google.fr"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="sujet"
              className="text-white block text-sm font-medium mb-2"
            >
              Sujet
            </label>
            <input
              type="text"
              id="sujet"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="sujet"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Votre message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
