import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-full fixed'>
        <Video />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0"></div>
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between z-10'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home