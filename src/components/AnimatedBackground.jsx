import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Generate an array of arbitrary dots and short lines to float around
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-slate-300 dark:bg-slate-600 rounded-full opacity-40"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, Math.random() * -150 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
