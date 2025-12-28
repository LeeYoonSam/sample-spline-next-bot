import React from 'react';
import { motion } from 'framer-motion';

const Intuition: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-[#EAE9E5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight"
          >
            From imitation to <span className="text-stone-400">intuition</span>
          </motion.h2>
          
          <div className="h-24 w-[1px] bg-stone-300 my-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=2940&auto=format&fit=crop" 
                 alt="Robot Hand Close up" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg max-w-xs">
                 <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wider">Skill Capture Glove™</p>
                 <p className="text-sm font-medium text-stone-800">Enables NexBot to distill millions of human movements into its onboard AI.</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-8"
          >
             <h3 className="text-3xl md:text-4xl font-bold text-stone-900">
               What the glove does, NexBot learns.
             </h3>
             <p className="text-lg text-stone-600 leading-relaxed">
               Our Skill Capture Glove™ enables NexBot to distill millions of human movements into its onboard AI, unlocking helpful home skills. 
             </p>
             <p className="text-lg text-stone-600 leading-relaxed">
               To date we've shipped over 2,000 gloves to our Memory Developers. They collect 'memories' in their homes to make NexBot useful in yours.
             </p>
             
             <div className="flex gap-4 pt-4">
               <button className="border border-stone-300 px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-900 hover:text-white transition-colors">
                 Explore Technology
               </button>
               <button className="text-stone-900 font-semibold px-6 py-3 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-all">
                 Become a MemDev
               </button>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Intuition;