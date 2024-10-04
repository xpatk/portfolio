import Image from "next/image";
import ProfileSection from "./components/ProfileSection";
import Navbar from "./components/Navbar";
import Apropos from "./components/Apropos";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProfileSection />
        <Apropos />
        <ProjectsSection />
      </div>
    </main>
  );
}
