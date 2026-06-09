import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)

  useGSAP(function(){
    if (window.innerWidth < 1024) return;
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start:'top 8%',
        end:'top -80%',
        pin: true,
        pinType: 'transform',
        scrub: 1,
      }
    })
  })

  return (
    <div className='parent'>
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[60vw] md:h-[45vw] lg:h-[30vw] rounded-4xl w-[50vw] md:w-[35vw] lg:w-[20vw] top-32 md:top-40 lg:top-70 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[22vw]'>
          <img className='h-full object-cover w-full' src="/photo.jpg" alt="Profile" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[70vw] md:mt-[50vh] lg:mt-[55vh]'>
            <h1 className='text-[16vw] text-center uppercase leading-[15vw]'>Saurabh</h1>
          </div>
          <div className='lg:pl-[40%] lg:pr-[5%] p-4 md:p-6 mt-4 lg:mt-24'>
            <p style={{ fontFamily: "'Satoshi', sans-serif" }} className='lg:text-[2rem] text-lg md:text-xl text-white/85 leading-relaxed lg:leading-[1.5] tracking-wide indent-6 md:indent-10 lg:indent-20 text-justify sm:text-left'>
              I am a passionate 3D Artist and Game Developer specializing in immersive environments and realistic, game-ready assets. My work bridges the gap between high-fidelity visual artistry and real-time engine optimization. Whether crafting intricate worlds in Blender and Maya or bringing them to life in Unreal Engine and Unity, I obsess over every detail to ensure performance never compromises breathtaking aesthetics.
            </p>
          </div>
        </div>
      </div>
      <div id='page2' className="min-h-screen flex flex-col justify-center bg-black text-white pb-20 relative pt-32">
         {/* Infinite Tools Marquee */}
         <div className="flex overflow-hidden whitespace-nowrap border-y border-white/20 py-10 lg:py-16 w-full opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default">
            <div className="moveX-slow flex items-center pr-10 lg:pr-20">
                <h1 className="text-3xl md:text-5xl lg:text-[8vw] font-[font2] text-transparent [-webkit-text-stroke:1px_white] uppercase">Blender • Unreal Engine • Maya • Unity • ZBrush • Substance Painter •&nbsp;</h1>
            </div>
            <div className="moveX-slow flex items-center pr-10 lg:pr-20">
                <h1 className="text-3xl md:text-5xl lg:text-[8vw] font-[font2] text-transparent [-webkit-text-stroke:1px_white] uppercase">Blender • Unreal Engine • Maya • Unity • ZBrush • Substance Painter •&nbsp;</h1>
            </div>
         </div>

         {/* Expertise Grid */}
         <div className="max-w-7xl mx-auto px-6 w-full mt-24 lg:mt-32">
            <h2 className="text-3xl lg:text-5xl font-[font2] mb-16 uppercase tracking-widest text-[#defd50]">Core Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
               {/* Skill 1 */}
               <div className="flex flex-col gap-6 group cursor-pointer">
                  <div className="h-[2px] w-full bg-white/20 relative">
                     <div className="absolute left-0 top-0 h-full w-0 bg-[#defd50] group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                  <h3 className="text-2xl font-[font2] uppercase tracking-wide">Environment Art</h3>
                  <p style={{ fontFamily: "'Satoshi', sans-serif" }} className="text-xl font-light text-white/70 leading-relaxed">
                     Crafting immersive, highly optimized worlds for real-time engines. Specializing in modular kits, terrain generation, and atmospheric storytelling.
                  </p>
               </div>

               {/* Skill 2 */}
               <div className="flex flex-col gap-6 group cursor-pointer">
                  <div className="h-[2px] w-full bg-white/20 relative">
                     <div className="absolute left-0 top-0 h-full w-0 bg-[#defd50] group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                  <h3 className="text-2xl font-[font2] uppercase tracking-wide">Hard Surface</h3>
                  <p style={{ fontFamily: "'Satoshi', sans-serif" }} className="text-xl font-light text-white/70 leading-relaxed">
                     Precision modeling for weapons, vehicles, and sci-fi architectural assets, ensuring pristine topology and clean bakes for game-ready performance.
                  </p>
               </div>

               {/* Skill 3 */}
               <div className="flex flex-col gap-6 group cursor-pointer">
                  <div className="h-[2px] w-full bg-white/20 relative">
                     <div className="absolute left-0 top-0 h-full w-0 bg-[#defd50] group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                  <h3 className="text-2xl font-[font2] uppercase tracking-wide">PBR Texturing</h3>
                  <p style={{ fontFamily: "'Satoshi', sans-serif" }} className="text-xl font-light text-white/70 leading-relaxed">
                     Developing rich, realistic surfaces using physically based rendering workflows, procedural materials, and detailed map generation in Substance.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Agence