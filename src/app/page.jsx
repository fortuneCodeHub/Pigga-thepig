'use client'
import About from "@/components/About";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MemeGallery from "@/components/MemeGallery";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-[#0b0b0d] text-foreground min-h-screen relative">
      <h1>
        {/* PIGGA THE PIG */}
      </h1>
      {/* Navbar section */}
      <Navbar />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />
      {/* Community section */}
      <Community />
      {/* Meme Gallery section */}
      <MemeGallery />
      {/* Footer */}
      <Footer />
    </div>
  );
}
