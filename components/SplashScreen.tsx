import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MONKEY_IMG_URL } from '../constants';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically transition after 3 seconds
    const timer = setTimeout(() => {
      handleExit();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsVisible(false);
    // Allow animation to finish before unmounting parent logic
    setTimeout(onComplete, 1000); 
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper cursor-pointer"
          onClick={handleExit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { duration: 1 } 
            }}
            exit={{ 
              y: -100, 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="flex flex-col items-center p-6"
          >
             {/* The Monkey Image */}
             {/* Using width-auto and max-width to respect natural aspect ratio */}
            <div className="relative w-auto max-w-[90vw] md:max-w-lg mb-8 shadow-2xl animate-float rounded-xl overflow-hidden border-4 border-white">
               <img 
                 src={MONKEY_IMG_URL} 
                 alt="The Floating Monkey" 
                 className="block w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
               />
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
              className="text-xl md:text-2xl font-serif italic tracking-widest text-ink/80 text-center"
            >
              f**k off letterboxd
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;