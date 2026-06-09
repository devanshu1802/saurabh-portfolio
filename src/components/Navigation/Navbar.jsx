import React, { useContext, useState, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import Magnetic from '../common/Magnetic'

const Navbar = () => {

  const [,setNavOpen]= useContext(NavbarContext)
  
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`z-40 flex fixed top-0 w-full items-start justify-between transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Magnetic>
        <Link to="/" className='p-2 md:p-3 lg:p-3'>
          <div className='w-16 md:w-24 lg:w-30'>
            <img src="/logo.png" alt="Logo" className="w-full" />
          </div>
        </Link>
      </Magnetic> 
     <Magnetic>
       <div onClick={()=>{
        setNavOpen(true) 
       }} 
        className='cursor-pointer lg:h-14 md:h-11 h-9 bg-black relative lg:w-[16vw] md:w-48 w-32'>
         <div className=' relative h-full lg:px-8 md:px-6 px-4 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
          <div className='lg:w-18 md:w-12 w-8 h-0.5 bg-white'></div>
          <div className='lg:w-10 md:w-6 w-4 h-0.5 bg-white'></div>
         </div>
       </div>
     </Magnetic>
    </div>
  )
}

export default Navbar