import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-16 pb-6 px-4 md:px-20 lg:px-32 bg-slate-900 dark:bg-slate-950 w-full overflow-hidden transition-colors duration-500' id='Footer'>
       <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-12'>
        {/* first column */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="Company Logo" className='h-10 w-auto mb-6' />
          <p className='text-slate-400 mt-4 leading-relaxed'>We are dedicated to providing top-tier business consultation, helping you scale, optimize, and dominate your market with expert strategies.</p>
        </div>
        
        {/* second column */}
        <div className='w-full md:w-1/5 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-6'>Company</h3>
          <ul className='flex flex-col gap-3 text-slate-400 font-medium'>
            <a href="#Header" className='hover:text-blue-400 transition-colors w-max'>Home</a>
            <a href="#About" className='hover:text-blue-400 transition-colors w-max'>About us</a>
            <a href="#Contact" className='hover:text-blue-400 transition-colors w-max'>Contact us</a>
            <a href="# " className='hover:text-blue-400 transition-colors w-max'>Privacy policy</a>
          </ul>
        </div>
        
        {/* third column */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-6'>Subscribe to our newsletter</h3>
          <p className='text-slate-400 mb-6 max-w-80 leading-relaxed'>Stay updated with our latest news, business tips, and exclusive offers.</p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input type="email" placeholder="Enter your email" className='p-3.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:flex-1'/>
            <button className='py-3.5 px-6 rounded-xl bg-blue-600 font-medium text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap'>Subscribe</button>
          </div>
        </div>
       </div>
       
       <div className='border-t border-slate-800 py-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium'>
        <p className="text-slate-500">Copyright © 2025 Business Consult. All rights reserved.</p>
        <div className="flex gap-6 text-slate-500">
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
        </div>
       </div>
    </div>
  ) 
}

export default Footer