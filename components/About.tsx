import React from 'react';
import { motion } from 'framer-motion';
import { MONKEY_IMG_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg prose-stone"
      >
        <div className="flex justify-center mb-10">
           {/* Allow natural width for the logo */}
           <img 
              src={MONKEY_IMG_URL} 
              alt="About Me" 
              className="w-auto max-w-full md:max-w-md h-auto rounded-lg shadow-md object-contain"
            />
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-8">About F**k Off Letterboxd</h1>
        
        <div className="font-serif text-lg leading-loose text-gray-700 space-y-6">
          <p>
            Welcome to the digital attic of a cinema obsessive. This is not a place for breaking news, box office analysis, or hot takes generated for engagement. 
          </p>
          <p>
            Instead, <em>F**k Off Letterboxd</em> is an archive of thoughts on the visual medium—from the texture of 16mm grain to the philosophical implications of slow cinema. The name reflects a rejection of the star-rating gamification of film culture, untethered, slightly absurd, but earnestly reaching for something higher.
          </p>
          <p>
            I am a filmmaker and writer based in New York. I believe movies are better than they used to be, but the way we watch them is worse.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center font-sans text-sm text-gray-500">
          <p>Contact: hello@fuckoffletterboxd.com</p>
          <p className="mt-2">© {new Date().getFullYear()} F**k Off Letterboxd. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;