'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const parallaxRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    // Parallax effect for the pig image
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY * 0.2
        parallaxRef.current.style.transform = `translateY(${offset}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // GSAP entrance animations for text and buttons
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('.hero-badge', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out',
      })
      tl.from(
        '.hero-title',
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      tl.from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      tl.from(
        '.hero-paragraph',
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      tl.from(
        '.hero-buttons a',
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
    }, heroRef)

    return () => ctx.revert() // cleanup on unmount
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#0b0b0d] text-white lg:pb-25 pb-10 pt-10"
    >
      {/* Neon graffiti background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0ef3c6]/10 via-[#8456ff]/6 to-[#ff66b3]/4"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="hero-badge inline-flex items-center gap-3 py-1 px-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/6">
              <span className="text-xs uppercase tracking-wider text-[#b7ffd9]">
                New on Solana
              </span>
              <span className="text-xs text-white/60">• Meme token</span>
            </div>

            <h1 className="hero-title text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              <span className="block">
                <span className="font-zentry">Meet{' '}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#8b6eff] to-[#ff7bbd]">
                  <span className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#61f6c9] via-[#ff7bbd] to-[#8b6eff] graffiti-font drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    $PIGGA
                  </span>{' '}
                  <span className="font-zentry">the Pig</span>
                </span>
              </span>
            </h1>

            <span className="hero-subtitle block text-lg md:text-xl font-medium text-white/70 mt-3">
              The coolest pig on Solana — he hoops, hustles, and memes.
            </span>

            <p className="hero-paragraph text-white/70 max-w-xl">
              Streetwise, goofy, and dripping with bling — Pigga brings playful,
              viral energy to the Solana memecoin scene. Join the gang, flex the
              memes, and ride the hype.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#buy"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-[#1de9b6] to-[#8b6eff] font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
              >
                Buy $PIGGA
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </a>

              <a
                href="https://x.com/PiggaCoinSol"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition"
              >
                Join the Hood
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center shadow-inner">🏀</div>
                    <div>
                        <div className="text-white">Hoops & Hype</div>
                        <div className="text-xs">Playful drops and street events</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center shadow-inner">🔥</div>
                    <div>
                        <div className="text-white">Meme-ready</div>
                        <div className="text-xs">Shareable, viral artwork</div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Pig Illustration + neon court */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[340px] h-[420px] md:w-[420px] md:h-[520px]">
              {/* Basketball card */}
              <div className="absolute inset-0 rounded-2xl border border-white/6 bg-gradient-to-b from-black/40 to-white/2 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/graffiti.svg')] bg-cover opacity-8 mix-blend-overlay" />

                {/* Pig framed window with parallax */}
                <div className="relative flex items-center justify-center">
                  <div
                    ref={parallaxRef}
                    className="relative w-[340px] h-[420px] md:w-[420px] md:h-[520px] rounded-2xl border-8 border-[#1a1a1a] shadow-[0_0_40px_rgba(97,246,201,0.3)] overflow-hidden"
                  >
                    <img
                      src="/assets/images/pigga-1.jpg"
                      alt="Pigga the Pig"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Glow & motion effects */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-12 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-[#61f6c9] via-[#8b6eff] to-[#ff7bbd] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
