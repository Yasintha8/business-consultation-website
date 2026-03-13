import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonails = () => {
  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      transition={{duration: 1, ease: 'easeOut'}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true, amount: 0.2}}
    className='container mx-auto py-10 lg:py-32 w-full overflow-hidden' id='Testimonials'>
        
        <motion.div
           initial={{opacity:0, y:20}}
           whileInView={{opacity: 1, y:0}}
           transition={{duration: 0.8}}
           className="text-center"
        >
          <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-slate-800 dark:text-slate-100 tracking-tight'>Customer <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>Testimonials</span></h1>
          <p className='text-center text-gray-500 dark:text-gray-400 mb-16 mt-4 max-w-xl mx-auto text-lg'>Hear from our successful partners who transformed their businesses with our guidance.</p>
        </motion.div>
        
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index)=>(
              <motion.div 
                 key={index}
                 whileHover={{y: -10}}
                 className='max-w-[340px] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl rounded-2xl px-8 py-10 text-center relative group transition-all duration-300'
              >
                  {/* Decorative background blob */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <img className='w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-slate-50 dark:border-slate-700 shadow-md group-hover:border-blue-100 dark:group-hover:border-blue-800 transition-colors' src={testimonial.image} alt={testimonial.name} />
                    <h2 className='text-xl text-slate-800 dark:text-slate-100 font-bold mb-1'>{testimonial.name}</h2>
                    <p className='text-blue-500 dark:text-blue-400 mb-4 text-sm font-medium'>{testimonial.title}</p>
                    <div className='flex justify-center gap-1.5 mb-6'>
                      {Array.from({length:testimonial.rating},(item, index)=>(
                        <img key={index} src={assets.star_icon} alt="Star rating" className="w-4 h-4" />
                      ))}
                    </div>
                    <p className='text-slate-600 dark:text-slate-400 leading-relaxed italic relative'>
                      <span className="text-4xl text-blue-200 dark:text-blue-900/50 absolute -top-4 -left-2">"</span>
                      {testimonial.text}
                      <span className="text-4xl text-blue-200 dark:text-blue-900/50 absolute -bottom-6 -right-2">"</span>
                    </p>
                  </div>
              </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonails