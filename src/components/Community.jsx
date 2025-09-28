'use client'
import React from 'react'

export default function Community() {
  return (
    <section
      id="community"
      className="relative bg-[#0b0b0d] text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/peppa-verse.jpg"
          alt="Graffiti Basketball Court"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-60">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6 font-zentry">
          “The Pigga Gang is more than holders. <br />
          We’re hoopers, hustlers, and meme lords.”
        </h2>

        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <a
            href="https://t.me/+vDQ3bu3EOBljODY0"
            className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#61f6c9] to-[#8b6eff] shadow-lg hover:scale-[1.05] transition-transform"
            target="_blank"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/PiggaCoinSol"
            className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#ff7bbd] to-[#8456ff] shadow-lg hover:scale-[1.05] transition-transform"
            target="_blank"
          >
            Follow Twitter
          </a>
        </div>

        <div className="mt-12 w-full max-w-2xl">
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://x.com/PiggaCoinSol"
            target="_blank"
          >
            Tweets by Pigga
          </a>
        </div>
      </div>
    </section>
  )
}
