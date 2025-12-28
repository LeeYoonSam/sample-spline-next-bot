import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Intuition from './components/Intuition';
import Specs from './components/Specs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <Features />
      <Intuition />
      <Specs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;