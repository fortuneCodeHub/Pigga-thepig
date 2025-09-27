import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const AnimatedTitle = ({ title, id, containerClass, textColor}) => {

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '+=100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            })

            titleAnimation.to('.animated-word', {
                opacity: 1, 
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.inOut',
                stagger: 0.03,
            })
        }, containerRef)

        return () => ctx.revert();
    }, [])
  return (
    <>
        <div ref={containerRef} id={id} className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                    {line.split(' ').map((word, i) => (
                        <span key={i} className={`animated-word ${textColor}`} dangerouslySetInnerHTML={{ __html: word }} />
                    ))}
                </div>
            ))}
        </div>
    </>
  )
}

export default AnimatedTitle
