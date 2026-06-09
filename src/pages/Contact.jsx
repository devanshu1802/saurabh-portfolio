import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* PAGE HEADER */}
      <div className='lg:p-5 p-2 pt-[15vh] lg:pt-[20vh]'>
        <h1 className='font-[font2] lg:text-[10vw] text-6xl uppercase leading-none'>Contact</h1>
      </div>

      {/* CONTACT DETAILS SECTION */}
      <div className='lg:p-5 p-2'>
        {/* Email Row */}
        <div className='border-t-1 border-white py-6 lg:py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0'>
          <span className='text-xs lg:text-sm uppercase text-gray-400 tracking-wider'>Email</span>
          <a
            href='mailto:sauravsingh010703@gmail.com'
            className='font-[font2] text-xl lg:text-3xl uppercase transition-all duration-300 hover:text-[#D3FD50] group break-all md:break-normal'
          >
            sauravsingh010703@gmail.com
            <span className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>→</span>
          </a>
        </div>

        {/* Phone Row */}
        <div className='border-t-1 border-white py-6 lg:py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0'>
          <span className='text-xs lg:text-sm uppercase text-gray-400 tracking-wider'>Phone</span>
          <a
            href='tel:+917651824919'
            className='font-[font2] text-xl lg:text-3xl uppercase transition-all duration-300 hover:text-[#D3FD50] group'
          >
            +91 XXXXX XXXXX
            <span className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>→</span>
          </a>
        </div>
      </div>

      {/* CONNECT SECTION */}
      <div className='lg:p-5 p-2 mt-12 lg:mt-20'>
        <h2 className='font-[font2] lg:text-[8vw] text-5xl uppercase leading-none'>Connect</h2>
        <div className='border-t-1 border-white mt-4 lg:mt-8'></div>

        {/* LinkedIn Row */}
        <div className='border-t-1 border-white py-6 lg:py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0'>
          <span className='text-xs lg:text-sm uppercase text-gray-400 tracking-wider'>LinkedIn</span>
          <a
            href='https://www.linkedin.com/in/saurabh-a3a2a4280/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-[font2] text-xl lg:text-3xl uppercase transition-all duration-300 hover:text-[#D3FD50] group'
          >
            linkedin.com/saurabh
            <span className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>→</span>
          </a>
        </div>

        {/* GitHub Row */}
        <div className='border-t-1 border-white py-6 lg:py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0'>
          <span className='text-xs lg:text-sm uppercase text-gray-400 tracking-wider'>GitLab</span>
          <a
            href='https://gitlab.com/sauravsingh010703'
            target='_blank'
            rel='noopener noreferrer'
            className='font-[font2] text-xl lg:text-3xl uppercase transition-all duration-300 hover:text-[#D3FD50] group'
          >
            gitlab.com/saurabh
            <span className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>→</span>
          </a>
        </div>

        {/* ArtStation Row */}
        <div className='border-t-1 border-white border-b-1 py-6 lg:py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0'>
          <span className='text-xs lg:text-sm uppercase text-gray-400 tracking-wider'>ArtStation</span>
          <a
            href='https://www.artstation.com/saurabh583'
            target='_blank'
            rel='noopener noreferrer'
            className='font-[font2] text-xl lg:text-3xl uppercase transition-all duration-300 hover:text-[#D3FD50] group'
          >
            artstation.com/saurabh
            <span className='inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>→</span>
          </a>
        </div>
      </div>

      {/* AVAILABILITY STRIP */}
      <div className='mt-20 lg:mt-32 bg-black border-t-1 border-white'>
        <div className='lg:p-5 p-2 py-8 lg:py-12 flex items-center justify-center gap-3'>
          <span className='w-3 h-3 bg-[#D3FD50] rounded-full animate-pulse'></span>
          <span className='font-[font2] text-lg lg:text-2xl uppercase tracking-wider'>
            Open for Freelance & Collaborations
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
