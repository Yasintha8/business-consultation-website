import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const About = () => {
  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      transition={{duration: 1, ease: 'easeOut'}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true, amount: 0.2}}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden relative z-10' id='About'
    >
        
        <motion.div
           initial={{opacity:0, y:20}}
           whileInView={{opacity: 1, y:0}}
           transition={{duration: 0.8}}
           className="text-center"
        >
          <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-slate-800 dark:text-slate-100 tracking-tight'>Who <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>We Are</span></h1>
          <p className='text-center text-gray-500 dark:text-gray-400 mb-12 mt-4 max-w-2xl mx-auto text-lg'>Empowering businesses with strategic insights, innovative solutions, and unwavering support to achieve sustainable growth and market dominance.</p>
        </motion.div>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full'>
            
          <motion.div 
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.8}}
            className='w-full lg:w-1/2 flex justify-center lg:justify-start relative'
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img src={assets.brand_img} alt="About Us" className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl z-10 hover:scale-105 transition-transform duration-500"/>
                {/* Floating Badge */}
                <motion.div 
                  initial={{y: 20, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{delay: 0.5, duration: 0.8}}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 dark:border-slate-700 hidden sm:block z-20"
                >
                  <p className="text-4xl font-bold text-blue-600 mb-1">10+</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Exp.</p>
                </motion.div>
            </div>
          </motion.div>
          
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-slate-600'>
                <p className='text-gray-600 dark:text-gray-300 max-w-lg mb-10 text-lg leading-relaxed text-center md:text-left'>At NextWave Solutions, we believe in the power of strategic thinking and flawless execution. Our team of seasoned consultants brings decades of industry experience to help you navigate complex challenges, optimize operations, and unlock new avenues for revenue generation. We don't just advise; we partner with you to build a legacy.</p>
                <div className='grid grid-cols-2 gap-8 w-full'>
                    <div className='bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300 w-full'>
                        <p className='text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2'><CountUp start={0} end={10} duration={2.5} enableScrollSpy scrollSpyOnce />+</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide'>Years of Excellence</p>
                    </div>
                    <div className='bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/40 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300 w-full'>
                        <p className='text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2'><CountUp start={0} end={200} duration={2} enableScrollSpy scrollSpyOnce />+</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide'>Projects Completed</p>
                    </div>
                </div>
          </div>
        </div>
    </motion.div>
  )
}

export default About