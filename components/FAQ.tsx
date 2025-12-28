import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-stone-900 group-hover:text-amber-700 transition-colors">
          {question}
        </span>
        <span className="text-stone-400 group-hover:text-amber-700 transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-stone-600 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What can NexBot do?",
      answer: "NexBot is designed to handle repetitive household tasks. Currently, it can organize clutter, fold laundry, handle dishes, and provide general assistance in the kitchen. Its capabilities are expanding monthly via OTA updates."
    },
    {
      question: "Is NexBot available for purchase?",
      answer: "We are currently in a closed Beta program for our 'Founding Families'. Public reservations will open in late 2025. You can join the waitlist today to secure your spot in line."
    },
    {
      question: "How much will a NexBot cost?",
      answer: "Building a single NexBot today — by hand, with custom components — costs approximately $20,000. We expect that to be the retail price initially, dropping significantly as we scale manufacturing in 2026."
    },
    {
      question: "How big is NexBot? How fast can it move?",
      answer: "NexBot stands at 5'6\" and weighs 140lbs. It moves at a walking pace of roughly 3-4 mph to ensure safety around children and pets."
    },
    {
      question: "Is NexBot safe?",
      answer: "Safety is our number one priority. NexBot features multiple redundant safety systems, LiDAR collision avoidance, and force-limiting actuators that stop immediately upon unexpected contact."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
          <p className="text-stone-500 mb-6">Can't find the answer you're looking for?</p>
          <a href="#" className="text-stone-900 font-semibold underline decoration-stone-300 hover:decoration-stone-900 transition-all">
            Contact Support
          </a>
        </div>
        <div className="lg:col-span-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;