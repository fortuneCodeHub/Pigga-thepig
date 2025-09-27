'use client'
import React from 'react'

export default function MemeGallery() {
  const memes = [
    '/assets/images/pigga-1.jpg',
    '/assets/images/pigga-2.jpg',
    '/assets/images/pigga-3.jpg',
    '/assets/images/pigga-4.jpg',
    '/assets/images/pigga-5.jpg',
    '/assets/images/pigga-6.jpg',
  ]

  return (
    <section
      id="meme-gallery"
      className="relative min-h-screen bg-[#0b0b0d] text-white py-16 overflow-hidden "
      style={{
        backgroundImage: "url('/assets/images/brick-wall.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-30">
        {/* <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
          Meme Gallery
        </h2> */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-extrabold font-zentry pb-20">
            <span className="block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#8b6eff] to-[#ff7bbd]">
                <span className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#ff7bbd] to-[#8b6eff] graffiti-font drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    Meme Gallery
                </span>
            </span>
        </h2>

        <div className="space-y-6">
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-4 animate-scroll ${
                rowIndex % 2 === 1 ? 'ml-[10%]' : ''
              }`}
            >
              {[...memes, ...memes].map((meme, i) => (
                <div
                  key={`${rowIndex}-${i}`}
                  className={`relative flex-shrink-0 rounded-lg shadow-xl overflow-hidden w-48 h-48 md:w-60 md:h-60`}
                >
                  <img
                    src={meme}
                    alt={`Meme ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay to darken wall for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
