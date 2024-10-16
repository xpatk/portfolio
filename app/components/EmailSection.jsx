"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import GithubIcon from "../../public/icons/icons8-github-24.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.execute();
    recaptchaRef.current.reset();

    if (!token) {
      console.error("reCAPTCHA token is missing");
      setCaptchaError(true);
      return;
    }

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      token,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error("Failed to send", response);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 absolute top-3/4 -left-4 blur-lg"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Contactez-moi</h5>
        <p className="text-[#ADB7BE] mb-4">
          Toujours à la recherche de nouvelles opportunités. Mon inbox est
          ouverte ! Que vous ayez une question ou une idée, je vous répondrai au
          plus vite.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-700 text-sm mt-2">Message envoyé!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg p-2.5 w-full"
                placeholder="jean@google.fr"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Sujet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg p-2.5 w-full"
                placeholder="Votre message"
              />
            </div>

            <button
              type="submit"
              className="z-10 bg-sky-600 hover:bg-sky-900 text-white font-medium py-2.5 px-5 rounded-lg w-full relative"
            >
              Envoyer
            </button>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              badge="inline"
            />
            {captchaError && (
              <p className="text-red-600 text-sm mt-2">
                Veuillez vérifier le reCAPTCHA.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
