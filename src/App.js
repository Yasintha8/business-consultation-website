import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`w-full overflow-hidden ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500 w-full min-h-screen font-outfit text-slate-800 dark:text-slate-200">
        <ToastContainer/>
        {/* Header has its own background, so it sits outside the animated background area */}
        <Header theme={theme} toggleTheme={toggleTheme}/>
        
        {/* Container for sections with the animated background */}
        <div className="relative w-full z-10">
          <AnimatedBackground />
          <About/>
          <Services/>
          <Testimonails/>
          <Contact/>
        </div>
        
        <Footer/>
      </div>
    </div>
  )
}

export default App