'use client'
import React from 'react'
import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa'
import { SiDexscreener } from 'react-icons/si'

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0b0b0d] text-white py-12 px-6"
      style={{
        backgroundImage: "url('/assets/images/brick-wall.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for graffiti vibe */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Graffiti Logo */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#ff7bbd] to-[#8b6eff] graffiti-font drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          $PIGGA
        </h1>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://x.com/PiggaCoinSol"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-[#61f6c9] to-[#8b6eff] shadow-lg hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-2xl text-black" />
          </a>
          <a
            href="https://t.me/+vDQ3bu3EOBljODY0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-[#ff7bbd] to-[#8456ff] shadow-lg hover:scale-110 transition-transform"
          >
            <FaTelegramPlane className="text-2xl text-black" />
          </a>
          {/* <a
            href="https://discord.gg/pigga"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-[#f6d365] to-[#fda085] shadow-lg hover:scale-110 transition-transform"
          >
            <FaDiscord className="text-2xl text-black" />
          </a> */}
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-[#8456ff] to-[#61f6c9] shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <img
                src="/assets/icons/dexscreener.jpg"
                alt="Dexscreener"
                className="w-6 h-6"
            />
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl font-medium opacity-90 drop-shadow font-zentry">
          “Stay Pigga. Stay Cool. $PIGGA to the Moon.”
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>

        {/* Copyright */}
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} PiggaThePig. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .graffiti-font {
          font-family: 'Permanent Marker', cursive;
        }
      `}</style>
    </footer>
  )
}
