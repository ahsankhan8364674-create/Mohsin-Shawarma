import { motion } from 'motion/react';
import { ShoppingBag, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-brand-red p-2 rounded-lg">
            <UtensilsCrossed className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-extrabold text-brand-charcoal uppercase tracking-tighter">
            Mohsin <span className="text-brand-red">Fast Food</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Menu', 'Why Us', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="font-medium text-brand-charcoal hover:text-brand-red transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-yellow text-brand-charcoal font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-brand-yellow/20 hover:bg-brand-yellow/90 transition-all"
        >
          <ShoppingBag size={18} />
          <span>Order Now</span>
        </motion.button>
      </div>
    </nav>
  );
}
