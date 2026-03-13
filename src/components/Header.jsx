import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

export const Header = ({ theme, toggleTheme }) => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full relative overflow-hidden'
    style={{backgroundImage: "url('/header_img2.png')"}} id='Header'>
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
        
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
        
        <motion.div 
          initial={{opacity:0, y:50}}
          transition={{duration: 1.2, ease: "easeOut"}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-20'>
            <motion.h2 
              initial={{opacity:0, scale:0.9}}
              whileInView={{opacity: 1, scale:1}}
              transition={{duration: 1, delay: 0.2}}
            className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-bold pt-20 text-white leading-tight drop-shadow-xl'>
              Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Business</span> for Success
            </motion.h2>
            <motion.p 
              initial={{opacity:0}}
              whileInView={{opacity: 1}}
              transition={{duration: 1, delay: 0.8}}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              We provide expert consultation to help you scale, optimize, and dominate your market.
            </motion.p>
            <motion.div 
              initial={{opacity:0, y:20}}
              whileInView={{opacity: 1, y:0}}
              transition={{duration: 1, delay: 1.2}}
            className='space-x-4 sm:space-x-6 mt-12 flex justify-center'>
                <a href="#Projects" className='px-8 py-3 rounded-full font-medium text-white border border-white/50 hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm'>Our Services</a>
                <a href="#Contact" className='px-8 py-3 rounded-full font-medium text-white bg-blue-600 shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300'>Contact Us</a>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Header