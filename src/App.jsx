import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Cursor from './components/common/Cursor'
import Footer from './components/common/Footer'
import PageTransition from './components/common/PageTransition'
import SmoothScroll from './components/common/SmoothScroll'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const Projects = lazy(() => import('./pages/Projects'))
const Agence = lazy(() => import('./pages/Agence'))

const App = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className='overflow-x-hidden min-h-screen flex flex-col bg-black text-white'>
        <Cursor />
        <Navbar />
        <FullScreenNav />
        <div className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black"><div className="w-10 h-10 border-4 border-[#defd50] border-t-transparent rounded-full animate-spin"></div></div>}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageTransition><Home /></PageTransition>} />
                <Route path='/work' element={<PageTransition><Projects /></PageTransition>} />
                <Route path='/agence' element={<PageTransition><Agence /></PageTransition>} />
                <Route path='/about' element={<PageTransition><About /></PageTransition>} />
                <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
                <Route path='/blog' element={<PageTransition><Blog /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App