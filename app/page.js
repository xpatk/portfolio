"use client";
import Head from "next/head";
import Image from "next/image";
import ProfileSection from "./components/ProfileSection";
import Navbar from "./components/Navbar";
import Apropos from "./components/Apropos";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrycja Kruczyńska - Web Dev</title>
        <meta name="description" content="Mon portfolio developpeur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProfileSection />
          <AchievementSection />
          <Apropos />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
