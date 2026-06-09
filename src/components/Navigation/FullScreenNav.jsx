import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useEffect } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavbarContext)

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup to ensure scrolling works if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [navOpen]);

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullScreennav', {
      display: 'block'
    })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })
    tl.to('.navlink', {
      opacity: 1
    })
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.navlink', {
      opacity: 0
    })
    tl.to('.fullScreennav', {
      display: 'none'
    })
  }

  useGSAP(function () {
    if (window.innerWidth < 1024) {
      if (navOpen) {
        gsap.set('.fullScreennav', { display: 'block' })
        gsap.set('.stairing', { height: '100%' })
        gsap.set('.link', { opacity: 1, rotateX: 0 })
        gsap.set('.navlink', { opacity: 1 })
      } else {
        gsap.set('.link', { opacity: 0, rotateX: 90 })
        gsap.set('.stairing', { height: 0 })
        gsap.set('.navlink', { opacity: 0 })
        gsap.set('.fullScreennav', { display: 'none' })
      }
      return;
    }

    if (navOpen) {
      gsapAnimation()
    }
    else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  return (
    <div ref={fullScreenRef} id='fullScreennav' className='fullScreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0'>

      <div className='h-screen w-full fixed'>
        <div className='h-full flex w-full '>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>

      </div>

      <div ref={fullNavLinksRef} className='relative'>
        <div className='navlink flex w-full justify-between lg:p-5 p-2 items-start'>
          <Link to="/" onClick={() => setNavOpen(false)} className='p-2 md:p-3 lg:p-3'>
            <div className='w-16 md:w-24 lg:w-30'>
              <img src="/logo.png" alt="Logo" className="w-full" />
            </div>
          </Link>
          <div onClick={() => {
            setNavOpen(false)
          }} className='lg:h-26 md:h-18 h-12 lg:w-26 md:w-18 w-12 relative cursor-pointer '>
            <div className='lg:h-35 md:h-25 h-16 lg:w-1 w-0.5 absolute -rotate-45 origin-top bg-[#D3FD50]'></div>
            <div className='lg:h-35 md:h-25 h-16 lg:w-1 w-0.5 absolute right-0 rotate-45 origin-top bg-[#D3FD50]'></div>
          </div>
        </div>

        <div className='lg:py-10 md:py-32 py-20'>
          <Link to="/work" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block'>
            <h1 className='font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Work</h1>
            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>See Everything</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://plus.unsplash.com/premium_photo-1669904021308-567d085a0ee7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>See Everything</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://plus.unsplash.com/premium_photo-1661740413748-3779fcdcbdf4?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" />
              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>See Everything</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://plus.unsplash.com/premium_photo-1669904021308-567d085a0ee7?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>See Everything</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://plus.unsplash.com/premium_photo-1661740413748-3779fcdcbdf4?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work" />
              </div>
            </div>
          </Link>
          <Link to="/agence" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block'>
            <h1 className='font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>About</h1>
            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1756900100261-0c128f4e6e7d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1756900100261-0c128f4e6e7d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Know Me</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1555786766-e1e69380c4bc?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
              </div>
            </div>
          </Link>
          <Link to="/contact" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block'>
            <h1 className='font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Contact</h1>
            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Get In Touch</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1768839720467-90cc32edeb26?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Get In Touch</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1622462237923-1fdb4486ac12?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Get In Touch</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1768839720467-90cc32edeb26?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Get In Touch</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1622462237923-1fdb4486ac12?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
              </div>
            </div>
          </Link>
          <Link to="/blog" onClick={() => setNavOpen(false)} className='link origin-top relative border-y-1 border-white block'>
            <h1 className='font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Blog</h1>
            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Read Articles</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1704881986198-1d0019b2b2c0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Journal" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Read Articles</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=2258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coding" />
              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Read Articles</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1704881986198-1d0019b2b2c0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Journal" />
                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] md:text-5xl text-4xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Read Articles</h2>
                <img className='lg:h-22 md:h-12 h-8 shrink-0 lg:w-70 md:w-30 w-20 rounded-full object-cover px-2 md:px-4' src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=2258&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coding" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default FullScreenNav