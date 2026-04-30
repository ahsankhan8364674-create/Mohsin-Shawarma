import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-template-columns-[1fr_1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full mb-6">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-wider">Top Rated Fast Food in Town</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-brand-charcoal leading-[0.9] mb-8">
            SATISFY YOUR <span className="text-brand-red">CRAVINGS</span> IN EVERY BITE.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Experience the boldest flavors and the juiciest burgers crafted with passion and fresh ingredients. Your ultimate comfort food destination.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-red text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/30">
              Explore Menu
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-charcoal">50k+ Happy Customers</p>
                <div className="flex text-brand-yellow">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-yellow rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl skew-y-1">
             <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" 
              alt="Delicious Fast Food Spread" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-widest mb-1">Today's Special</p>
                  <p className="text-white text-xl font-bold font-display">Deep Fried Crispy Wings</p>
                </div>
                <div className="bg-brand-yellow text-brand-charcoal text-xl font-black px-4 py-2 rounded-xl">
                  $8.99
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Delivery</p>
              <p className="text-sm font-black text-brand-charcoal">30 Mins Express</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
