import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
      initial={{opacity:0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Who<span className='text-blue-500'> We Are</span></h1>
        <p className='text-gray-700 max-w-80 text-center mb-8 mt-4 text-xl'>Why Choose Us?</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.brand_img} alt=""  className="w-96 h-96 object-cover rounded-full border border-gray-300 shadow-md"/>
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
               <div>
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Years of Experience</p>
               </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>2+</p>
                <p>Projects Completed</p>
               </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>2+</p>
                <p>Mn. Sq Ft.Delivered</p>
               </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>595+</p>
                <p>Customers worldwide</p>
               </div>
            </div>
            <p className='my-10 max-w-lg'>we specialize in business strategy, financial planning, and marketing solutions to help entrepreneurs and businesses achieve sustainable success. With over [X] years of experience, we have guided countless businesses in streamlining operations, increasing revenue, and building strong brands.</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-800'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About