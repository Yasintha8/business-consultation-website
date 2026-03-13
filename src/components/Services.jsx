import React ,{useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

 useEffect(()=>{
  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      setCardsToShow(projectsData.length);
    } else {
      setCardsToShow(1);
    }
  };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  
 },[])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  }

  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      transition={{duration: 1, ease: 'easeOut'}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true, amount: 0.2}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden relative z-10' id='Projects'>
      
      <motion.div
         initial={{opacity:0, y:20}}
         whileInView={{opacity: 1, y:0}}
         transition={{duration: 0.8}}
         className="text-center"
      >
        <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-slate-800 dark:text-slate-100 tracking-tight'>Services <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Offered</span></h1>
        <p className='text-center text-gray-500 dark:text-gray-400 mb-12 mt-4 max-w-xl mx-auto text-lg'>Streamline Operations, Maximize Results. Tailored solutions for your business growth.</p>
      </motion.div>

      {/* slider buttons */}
      <div className='flex justify-end items-center mb-10 gap-4'>
        <button onClick={prevProject}
        className='p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300' aria-label='Previous Project' >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5 opacity-70 dark:invert" />
        </button>
        <button onClick={nextProject}
        className='p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300' aria-label='Next Project' >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5 opacity-70 dark:invert" />
        </button>
      </div>

    {/* project slider container */}
    <div className='overflow-hidden rounded-2xl p-4 -mx-4'>
      <div className='flex gap-8 transition-transform duration-700 ease-in-out'
    style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
      >
        {projectsData.map((project, index)=>(
          <motion.div 
             key={index} 
             whileHover={{y: -10}}
             className='relative flex-shrink-0 w-full lg:w-[calc(33.333%-1.5rem)] group cursor-pointer'
          >
            <div className="overflow-hidden rounded-2xl shadow-lg border border-white/40 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md">
              <div className="overflow-hidden relative h-64">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'/>
              </div>
              <div className='p-8 relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl z-20 -mt-10 mx-6 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-blue-900/10 border border-white/50 dark:border-slate-600/50 group-hover:-translate-y-2 transition-transform duration-500'>
                <h2 className='text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h2>
                <div className='text-slate-500 dark:text-slate-400 text-sm font-medium'>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {project.price}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    </motion.div>
  )
}

export default Projects