'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image and glow
      gsap.from('.about-image', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Animate heading
      gsap.from('.about-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Animate paragraphs
      gsap.from('.about-paragraph', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Animate badges / icons
      gsap.from('.about-badge', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b0b0d] text-white py-24 pb-40 pt-40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0ef3c6]/5 via-[#8456ff]/5 to-[#ff66b3]/5"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: Image / Throne Visual */}
        <div className="relative flex items-center justify-center about-image">
          <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(133,86,255,0.25)]">
            <img
              src="/assets/images/pigga-2.jpg"
              alt="Pigga on his throne of basketballs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-52 h-16 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-[#61f6c9] via-[#8b6eff] to-[#ff7bbd] animate-pulse" />
        </div>

        {/* Right: Text Copy */}
        <div className="space-y-6">
            <div className='about-heading'>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold">
                    <span className="block pb-2">
                    <span className='font-zentry'>The Legend of</span>{' '}
                    <span className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#ff7bbd] to-[#8b6eff] graffiti-font drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                        $PIGGA
                    </span>
                    </span>
                </h2>
            </div>


          <p className="about-paragraph text-white/70 leading-relaxed max-w-xl">
            Pigga was tired of farm life. Peppa got all the fame.  
            So he dipped to the streets, copped some kicks,  
            and now he runs Solana.  
          </p>

          <p className="about-paragraph text-white/80 font-semibold italic">
            $PIGGA ain’t just a coin. It’s a lifestyle.
          </p>

          <div className="flex items-center flex-wrap gap-4 pt-4">
            <div className="about-badge flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xl">🐷</span>
              <span className="text-sm text-white/80">Cool</span>
            </div>
            <div className="about-badge flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xl">🤣</span>
              <span className="text-sm text-white/80">Goofy</span>
            </div>
            <div className="about-badge flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xl">💎</span>
              <span className="text-sm text-white/80">Gangster</span>
            </div>
            <div className="about-badge flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xl">🚀</span>
              <span className="text-sm text-white/80">Unstoppable</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse {
          animation: floaty 5s ease-in-out infinite;
        }

        @keyframes floaty {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
