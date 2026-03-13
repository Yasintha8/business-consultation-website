import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ theme, toggleTheme }) => {
  const[showMobileMenu, setshowMobileMenu] = useState(false)

useEffect(()=>{
  if(showMobileMenu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return()=>{
    document.body.style.overflow = 'auto'
  };
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 right-0 z-50'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 glassmorphism rounded-b-3xl mx-4 mt-2 transition-all duration-300'>
            <img src={assets.logo} alt='logo' className='h-8 w-auto' />
            <ul className='hidden md:flex gap-8 text-slate-800 font-medium' >
                <a href="#Header" className='cursor-pointer hover:text-blue-600 transition-colors duration-300 relative group'>
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#About" className='cursor-pointer hover:text-blue-600 transition-colors duration-300 relative group'>
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#Projects" className='cursor-pointer hover:text-blue-600 transition-colors duration-300 relative group'>
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#Testimonials" className='cursor-pointer hover:text-blue-600 transition-colors duration-300 relative group'>
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </ul>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none transition-transform hover:scale-110 active:scale-95 bg-slate-200/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200" aria-label="Toggle Dark Mode">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>
              <button className='hidden md:block bg-blue-600 px-8 py-2.5 rounded-full text-white font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5'>Sign up</button>
            </div>
          <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer invert opacity-70 hover:opacity-100 transition-opacity' alt="Menu" />
        </div>
        
        {/* ---------------mobile-menu--------- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed inset-0 bg-white/95 backdrop-blur-xl z-50' : 'h-0 w-0 opacity-0 overflow-hidden'} transition-all duration-500 ease-in-out`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setshowMobileMenu(false)} src={assets.cross_icon} className='w-8 hover:rotate-90 transition-transform duration-300' alt="Close" />
          </div>
          <ul className='flex flex-col items-center gap-6 mt-10 px-5 text-2xl font-semibold text-slate-800'>
             <a onClick={()=> setshowMobileMenu(false)} href="#Header" className='hover:text-blue-600 transition-colors duration-300'>Home</a>
             <a onClick={()=> setshowMobileMenu(false)} href="#About" className='hover:text-blue-600 transition-colors duration-300'>About</a>
             <a onClick={()=> setshowMobileMenu(false)} href="#Projects" className='hover:text-blue-600 transition-colors duration-300'>Services</a>
             <a onClick={()=> setshowMobileMenu(false)} href="#Testimonials" className='hover:text-blue-600 transition-colors duration-300'>Testimonials</a>
             <button onClick={()=> setshowMobileMenu(false)} className='mt-4 bg-blue-600 px-10 py-3 rounded-full text-white font-medium shadow-lg shadow-blue-500/30'>Sign up</button>
          </ul>
        </div>
    </div>
  )
}
  

export default Navbar
