import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7cbaa7fc-aaf9-4714-bd46-a72a305a5da3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
      
    }
  };

  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      transition={{duration: 1, ease: 'easeOut'}}
      whileInView={{opacity: 1, y:0}}
      className='text-center p-6 py-20 lg:px-32 w-full relative z-10' id='Contact'>
        <motion.div
           initial={{opacity:0, y:20}}
           whileInView={{opacity: 1, y:0}}
           transition={{duration: 0.8}}
        >
          <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-slate-800 dark:text-slate-100 tracking-tight'>Contact <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>With Us</span></h1>
          <p className='text-center text-gray-500 dark:text-gray-400 mb-12 mt-4 max-w-xl mx-auto text-lg'>Get in Touch with Us - We're Here to Help you scale your business!</p>
        </motion.div>

        <form onSubmit={onSubmit} className='max-w-3xl mx-auto text-slate-600 dark:text-slate-300 pt-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-blue-900/10 border border-white/40 dark:border-slate-700/50'>
            <div className='flex flex-wrap gap-y-6'>
                <div className='w-full md:w-1/2 text-left md:pr-4'>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                    <input className='w-full border border-white/50 dark:border-slate-700 rounded-xl py-3.5 px-4 bg-white/50 dark:bg-slate-900/50 focus:bg-white/80 dark:focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 outline-none backdrop-blur-sm' type="text" name='Name' placeholder='John Doe' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                    <input className='w-full border border-white/50 dark:border-slate-700 rounded-xl py-3.5 px-4 bg-white/50 dark:bg-slate-900/50 focus:bg-white/80 dark:focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 outline-none backdrop-blur-sm' type="email" name='Email' placeholder='john@example.com' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea className='w-full border border-white/50 dark:border-slate-700 rounded-xl py-3.5 px-4 bg-white/50 dark:bg-slate-900/50 focus:bg-white/80 dark:focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 outline-none h-48 resize-none backdrop-blur-sm'
                name="Message" placeholder='How can we help you?' required></textarea>
            </div>
            <button className='w-full md:w-auto bg-blue-600 text-white py-3.5 px-12 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300'>{result ? result : "Send Message"}</button>
        </form>
    </motion.div>
  )
}

export default Contact