import React from 'react';
import { Shield, Eye, Cpu, Zap } from 'lucide-react';

const Specs: React.FC = () => {
  const specs = [
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Your privacy is protected",
      description: "NexBot is an autonomous robot that does not need to learn through human tele-operation. Instead, we obtain training data from our Memory Developers."
    },
    {
      icon: <Eye className="w-8 h-8 text-amber-600" />,
      title: "Safety for the whole family",
      description: "With a low center of gravity, stable wheelbase, and a lightweight body, NexBot is safe for small members of the home."
    },
    {
      icon: <Cpu className="w-8 h-8 text-amber-600" />,
      title: "Tailored to your home",
      description: "Customize NexBot to fit your aesthetic. Choose from a selection of color-ways and premium knit covers."
    }
  ];

  return (
    <section id="specs" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-stone-900 mb-20 tracking-tighter">
          Designed for real use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-[#EAE9E5] p-8 rounded-3xl h-full flex flex-col justify-between min-h-[400px] hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="bg-stone-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900">{spec.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {spec.description}
                </p>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden h-48 w-full bg-stone-300 relative">
                <img 
                   src={`https://picsum.photos/seed/${index + 55}/400/300`} 
                   alt={spec.title}
                   className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Customizer Teaser */}
        <div className="mt-24 text-center bg-stone-200 rounded-[3rem] p-16 relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">NexBot wears many hats.</h3>
              <div className="w-24 h-24 bg-black rounded-[2rem] mx-auto my-8 rotate-45 flex items-center justify-center text-white">
                <Zap size={40} className="-rotate-45" />
              </div>
              <p className="text-stone-600 mb-8">Which should it wear next?</p>
              <button className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-bold">
                Cast your vote now
              </button>
           </div>
           
           {/* Decorative Background Elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Specs;