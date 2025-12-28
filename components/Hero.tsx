import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#EAE9E5]">
      {/* Spline Embed */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-eCgRgH5YuQgVCd9dMFhEnZ2s/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="NexBot 3D Model"
        ></iframe>
      </div>

      {/* Overlay Content - Pointer events none allows interaction with 3D model */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between pb-12 pt-32 px-6 md:px-12 container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-stone-400/50 bg-white/30 backdrop-blur-sm text-xs font-semibold tracking-wider text-stone-800 mb-6">
            BETA LAUNCHING LATE 2024
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-stone-900 leading-[0.9]">
            Say hello <br />
            <span className="serif italic font-normal text-stone-700">to NexBot</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-lg font-medium leading-relaxed bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            Built for busy households, NexBot works 24/7 to make your life lighter. Hand off your repetitive to-do's, so you can focus on what really matters.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-between items-end w-full"
        >
          <div className="pointer-events-auto flex gap-4">
             <button className="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl">
               JOIN THE FOUNDING FAMILY
             </button>
             <button className="bg-white/50 backdrop-blur-md text-stone-900 border border-stone-200 px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white transition-colors">
               WATCH THE FILM
             </button>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2 text-stone-500 animate-bounce">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </div>
        </motion.div>
      </div>
      
      {/* Gradient fade at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;