import About from "@/components/About";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MemeGallery from "@/components/MemeGallery";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "PIGGA THE PIG – The Coolest Pig on Solana $PIGGA",
  description:
    "Pigga ditched the farm and hit the streets. Hooping, hustling, and memeing his way to the top — $PIGGA ain’t just a coin, it’s a lifestyle.",
  openGraph: {
    title: "Pigga – The Coolest Pig on Solana $PIGGA",
    description: "Streetwise. Goofy. Gangster. Unstoppable. $PIGGA to the moon.",
    url: "https://pigga-thepig.vercel.app/",
    siteName: "Pigga",
    images: [
      {
        url: "/assets/images/pigga-5.jpg",
        width: 1200,
        height: 630,
        alt: "Pigga – The Coolest Pig on Solana $PIGGA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigga – The Coolest Pig on Solana $PIGGA",
    description:
      "Join the Pigga gang. Memes, hoops, and unstoppable Solana vibes.",
    creator: "@fortuneCodeHub12",
    images: ["/assets/images/pigga-5.jpg"],
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-16x16.png",
  },
};


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
