import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
              Mundane made <span className="serif italic font-normal text-amber-700">magic</span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Powered by state-of-the-art AI models and an ever-expanding Skill Library, NexBot doesn't just know how to do a few tasks—it improves its skills faster than any robot that has come before it.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
          
          {/* Main Large Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop" 
              alt="Kitchen Helper" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-4">
                <Sparkles size={12} /> Lightening the load
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">NexBot works in the kitchen</h3>
              <p className="text-stone-200 max-w-xl text-sm md:text-base">
                NexBot can quietly and autonomously clear tables of plates and delicate glasses, throw out food scraps, and load up your dishwasher before running it.
              </p>
            </div>
          </motion.div>

          {/* Secondary Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 relative group overflow-hidden rounded-3xl bg-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" 
              alt="Living Room" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                 <h4 className="text-xl font-bold text-stone-900 mb-2">Autonomous Organizing</h4>
                 <p className="text-stone-600 text-sm">Putting away toys, organizing magazines, and fluffing pillows.</p>
              </div>
            </div>
            <div className="absolute top-6 right-6">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                 <Play size={16} className="text-stone-900 ml-1" />
               </div>
            </div>
          </motion.div>

          {/* Secondary Feature 2 */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="lg:col-span-5 relative group overflow-hidden rounded-3xl bg-stone-800 text-white p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-stone-600 bg-stone-700/50 text-xs font-semibold tracking-wider mb-6">
                LEARNING ENGINE V2
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Always learning, always improving.</h3>
            </div>
            <div className="relative h-48 w-full rounded-xl overflow-hidden mt-4">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop" 
                alt="AI Learning" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Every home is different. NexBot works in yours.</h3>
            <p className="text-stone-600">We believe NexBot should be easy to use in the real world, working autonomously out-of-the-box. Hundreds of people in unique homes show NexBot how chores are done each day, so NexBot can robustly handle the chaos of real life.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">New skills every month.</h3>
            <p className="text-stone-600">In December 2024, NexBot had only one arm and learned its first task: arranging shoes. Today, NexBot is trained on multiple skills in parallel. In October 2025, NexBot learned to fold piles of socks, handle glassware, and pull a shot of espresso.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;