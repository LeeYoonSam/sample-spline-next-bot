import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-24 pb-12 border-t border-stone-200">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Large CTA */}
        <div className="bg-[#1C1917] rounded-3xl p-12 md:p-24 text-center mb-24 relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Be one of our Founding Families.
            </h2>
            <p className="text-stone-400 mb-10">
              Insider access. Exclusive perks. Design input.
            </p>
            <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-200 transition-colors">
              Beta program →
            </button>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

        {/* Newsletter */}
        <div className="border-y border-stone-200 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-stone-900 font-medium">
             Get the latest in your inbox
           </div>
           <div className="flex w-full md:w-auto bg-white border border-stone-200 rounded-full p-1 pl-6 focus-within:ring-2 focus-within:ring-stone-400 transition-shadow">
             <input 
               type="email" 
               placeholder="Sign up to our newsletter" 
               className="bg-transparent outline-none w-full md:w-64 text-sm text-stone-900 placeholder:text-stone-400"
             />
             <button className="bg-stone-200 text-stone-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-stone-300 transition-colors">
               Subscribe
             </button>
           </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                N
              </div>
              <span className="font-bold text-lg tracking-tight text-stone-900">
                NEXBOT
              </span>
            </a>
            <p className="text-xs text-stone-500 max-w-xs">
              Fog settles low, dreams rise high. NexBot is watching over the night shift.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-stone-900">Technology</a></li>
              <li><a href="#" className="hover:text-stone-900">Journal</a></li>
              <li><a href="#" className="hover:text-stone-900">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">About</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#" className="hover:text-stone-900">Company</a></li>
              <li><a href="#" className="hover:text-stone-900">Careers</a></li>
              <li><a href="#" className="hover:text-stone-900">Beta Program</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Social</h4>
             <ul className="space-y-2 text-sm text-stone-600">
               <li><a href="#" className="hover:text-stone-900 flex items-center gap-2"><Instagram size={14}/> Instagram</a></li>
               <li><a href="#" className="hover:text-stone-900 flex items-center gap-2"><Twitter size={14}/> X (Twitter)</a></li>
               <li><a href="#" className="hover:text-stone-900 flex items-center gap-2"><Youtube size={14}/> YouTube</a></li>
               <li><a href="#" className="hover:text-stone-900 flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a></li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs text-stone-500">
          <p>© 2024 NexBot Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-900">Terms of Service</a>
            <a href="#" className="hover:text-stone-900">Privacy & Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;