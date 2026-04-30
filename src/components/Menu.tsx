import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, MenuItem } from '../types';
import { Plus } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories: (MenuItem['category'] | 'All')[] = ['All', 'Burgers', 'Sides', 'Drinks'];

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal mb-4">
              OUR POPULAR <span className="text-brand-red underline decoration-brand-yellow underline-offset-8">MENU</span>
            </h2>
            <p className="text-gray-500 max-w-lg">
              Hand-picked ingredients, freshly prepared for that authentic Mohsin taste you know and love.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-red text-white' 
                    : 'bg-white text-brand-charcoal hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-red/5 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-red font-black text-sm">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-brand-charcoal group-hover:text-brand-red transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-black text-brand-yellow">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <button className="w-full bg-brand-charcoal text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-red transition-colors">
                    <Plus size={20} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
