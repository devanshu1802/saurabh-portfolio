import React, { useRef } from 'react'
import Video from './video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeHeroText = () => {
  const containerRef = useRef();

  useGSAP(() => {
    if (window.innerWidth < 1024) return;
    gsap.from('.reveal-text', {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='font-[font1] mt-32 md:mt-48 lg:mt-0 pt-10 md:pt-16 lg:pt-5 text-center'>
      <div className='overflow-hidden py-4 -my-4'>
        <div className='reveal-text lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>The spark for </div>
      </div>
      <div className='overflow-hidden py-4 -my-4'>
        <div className='reveal-text lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase  lg:leading-[8vw] leading-[10vw]'>all
          <div className='h-[9vw] w-[18vw] lg:h-[7vw] lg:w-[14vw] overflow-hidden -mt-2 rounded-full'><Video /></div>
          things </div>
      </div>
      <div className='overflow-hidden py-4 -my-4'>
        <div className='reveal-text lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>creative</div>
      </div>
    </div>
  )
}

export default HomeHeroText