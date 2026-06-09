import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    slug: 'mastering-nanite-unreal-engine-5',
    title: 'Mastering Nanite in UE5',
    description: 'A deep dive into optimizing ultra-high poly environments without losing performance.',
    date: 'MAY 2026',
    tag: 'Engine'
  },
  {
    id: 2,
    slug: 'modular-environment-design-blender',
    title: 'Modular Environment Design',
    description: 'How to build scalable, reusable 3D architecture kits for level design.',
    date: 'OCT 2025',
    tag: 'Modeling'
  },
  {
    id: 3,
    slug: 'procedural-texturing-substance',
    title: 'Procedural Wear & Tear',
    description: 'Creating hyper-realistic, dynamic edge wear using Substance Painter smart materials.',
    date: 'MAR 2025',
    tag: 'Texturing'
  },
  {
    id: 4,
    slug: 'lighting-fundamentals-real-time',
    title: 'Cinematic Real-Time Lighting',
    description: 'Balancing Lumen and baked lighting to achieve photorealistic game environments.',
    date: 'NOV 2024',
    tag: 'Lighting'
  },
  {
    id: 5,
    slug: 'game-asset-optimization',
    title: 'The Art of Retopology',
    description: 'Baking high-poly details onto low-poly meshes for pristine game-ready assets.',
    date: 'JUN 2024',
    tag: 'Optimization'
  }
]

const Blog = () => {
  return (
    <div className='min-h-screen bg-black text-white pb-32'>
      {/* PAGE HEADER */}
      <div className='lg:p-10 p-6 pt-[20vh] lg:pt-[25vh] mb-12 lg:mb-20'>
        <h1 className='font-[font2] lg:text-[10vw] md:text-7xl text-5xl uppercase leading-none'>Insights</h1>
        <p style={{ fontFamily: "'Satoshi', sans-serif" }} className='text-lg lg:text-2xl text-white/60 tracking-wide mt-6 font-light max-w-3xl leading-relaxed'>
          Thoughts, tutorials, and deep dives into 3D environment art, engine optimization, and the modern game development pipeline.
        </p>
      </div>

      {/* BLOG POST LIST */}
      <div className='lg:px-10 px-6'>
        <div className='border-t border-white/20'></div>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className='block cursor-pointer border-b border-white/20 py-8 lg:py-12 transition-all duration-500 hover:bg-white/[0.02] hover:px-4 lg:hover:px-8 group relative overflow-hidden'
          >
            {/* The Green hover underline overlaying the border */}
            <div className="absolute left-0 bottom-[-1px] h-[2px] w-0 bg-[#defd50] transition-all duration-700 ease-out group-hover:w-full z-20"></div>
            
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10 relative z-10'>
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 lg:w-1/2">
                 <span className="text-xs font-[font2] text-[#defd50] tracking-widest uppercase border border-[#defd50]/30 px-4 py-1.5 rounded-full w-fit shrink-0">
                    {post.tag}
                 </span>
                 <h2 className='font-[font2] text-3xl lg:text-4xl uppercase leading-tight transition-colors duration-500'>
                   {post.title}
                 </h2>
              </div>

              <p style={{ fontFamily: "'Satoshi', sans-serif" }} className='text-base lg:text-xl text-white/60 font-light lg:w-1/3 leading-relaxed'>
                {post.description}
              </p>

              <div className="flex items-center gap-6 lg:w-48 justify-between lg:justify-end mt-2 lg:mt-0">
                <span style={{ fontFamily: "'Satoshi', sans-serif" }} className='text-sm uppercase text-white/40 tracking-wider font-light'>
                  {post.date}
                </span>
                {/* Arrow Icon */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#defd50] group-hover:border-[#defd50] transition-all duration-500 -rotate-45 group-hover:rotate-0 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" className="group-hover:stroke-black stroke-white transition-colors duration-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
