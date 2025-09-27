'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  useEffect(() => {
    // GSAP Scroll & Clip Effect
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })

    clipAnimation.to('#imager', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  }, [])

  // Hover tilt effect
  useEffect(() => {
    const imageContainer = document.querySelector('#imager')

    const handleMouseMove = (e) => {
      const rect = imageContainer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * 10
      const rotateY = ((x - centerX) / centerX) * -10

      imageContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const resetRotation = () => {
      imageContainer.style.transform = `rotateX(0deg) rotateY(0deg)`
    }

    imageContainer.addEventListener('mousemove', handleMouseMove)
    imageContainer.addEventListener('mouseleave', resetRotation)

    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove)
      imageContainer.removeEventListener('mouseleave', resetRotation)
    }
  }, [])

  return (
    <section id="community" className="relative bg-[#0b0b0d] text-white overflow-hidden">
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image absolute left-1/2 top-0 z-20 origin-center -translate-x-1/2 overflow-hidden rounded-3xl" id="imager">
          <img
            src="/assets/images/peppa-verse.jpg"
            alt="Graffiti Basketball Court"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6 font-zentry">
          “The Pigga Gang is more than holders. <br />
          We’re hoopers, hustlers, and meme lords.”
        </h2>

        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <a
            href="#"
            className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#61f6c9] to-[#8b6eff] shadow-lg hover:scale-[1.05] transition-transform"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/PiggaCoinSol"
            className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#ff7bbd] to-[#8456ff] shadow-lg hover:scale-[1.05] transition-transform"
          >
            Follow Twitter
          </a>
        </div>

        <div className="mt-12 w-full max-w-2xl">
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/yourPiggaHandle"
          >
            Tweets by Pigga
          </a>
        </div>
      </div>

      <style jsx>{`

        .mask-clip-path {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        
        .about-image {
            height: 70vh;
            width: 20rem; /* or w-96 in Tailwind */
        }

        .about-image {
            /* fallback for small screens */
            height: 50vh;
            width: rem;
        }

        @media (min-width: 640px) { /* sm */
            .about-image {
                height: 60vh;
                width: 18rem;
            }
            
            .mask-clip-path {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }

        @media (min-width: 1024px) { /* lg */
            .about-image {
                height: 70vh;
                width: 24rem;
            }
        }

        @media (min-width: 1280px) { /* xl */
            .about-image {
                height: 80vh;
                width: 28rem;
            }
        }

        #clip {
          perspective: 1000px;
        }
      `}</style>

      {/* <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
    </section>
  )
}
