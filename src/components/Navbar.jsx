"use client"

import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="w-full z-50 bg-[#0b0b0d] backdrop-blur-md px-6 py-4">
        {/* <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0ef3c6]/10 via-[#8456ff]/6 to-[#ff66b3]/4"
        /> */}
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        {/* Logo / Brand */}
        {/* <h1 className="text-2xl font-bold tracking-widest text-pink-500 graffiti-font drop-shadow-lg">
          $PIGGA
        </h1> */}

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaTelegramPlane />
          </a>
          {/* <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <FaDiscord />
          </a> */}
          <a
            href="https://www.dextools.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/icons/dexscreener.jpg"
              alt="Dexscreener"
              className="w-6 h-6 rounded"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
