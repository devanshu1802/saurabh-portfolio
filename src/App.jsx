import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Cursor from './components/common/Cursor'
import Footer from './components/common/Footer'
import PageTransition from './components/common/PageTransition'
import SmoothScroll from './components/common/SmoothScroll'

const App = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className='overflow-x-hidden min-h-screen flex flex-col bg-black text-white'>
        <Cursor />
        <Navbar />
        <FullScreenNav />
        <div className="flex-grow">
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
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App