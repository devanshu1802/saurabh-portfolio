import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white lg:p-10 p-5 mt-20 border-t border-gray-800 relative z-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="font-[font2] text-3xl uppercase tracking-wider lg:w-1/3 text-center lg:text-left">
          <Link to="/">Saurabh</Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-sm uppercase tracking-widest font-[font1] lg:w-1/3 justify-center items-center text-center">
          <a href="https://www.artstation.com/saurabh583" target="_blank" rel="noreferrer" className="hover:text-[#defd50] transition-colors">ArtStation</a>
          <a href="https://www.linkedin.com/in/saurabh-a3a2a4280/" target="_blank" rel="noreferrer" className="hover:text-[#defd50] transition-colors">LinkedIn</a>
          <a href="https://gitlab.com/sauravsingh010703" target="_blank" rel="noreferrer" className="hover:text-[#defd50] transition-colors">GitLab</a>
        </div>
        
        <div className="lg:text-right text-center lg:w-1/3">
          <a href="mailto:contact@saurabh.com" className="inline-block border border-white hover:border-[#defd50] hover:text-[#defd50] hover:bg-[#defd50]/10 px-6 py-3 rounded-full transition-all uppercase tracking-widest text-xs font-[font2]">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-900 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-center md:text-left text-xs text-gray-500 font-[font1]">
        <p>&copy; {new Date().getFullYear()} Saurabh Portfolio. All rights reserved.</p>
        <p>Designed with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
