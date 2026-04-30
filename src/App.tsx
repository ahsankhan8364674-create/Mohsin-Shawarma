import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden selection:bg-brand-yellow selection:text-brand-charcoal">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Menu />
        <WhyUs />
      </main>

      <Footer />

      {/* Quick Actions Float */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-brand-charcoal text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-red transition-colors group"
        >
          <svg 
            width="24" height="24" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:-translate-y-1 transition-transform"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
