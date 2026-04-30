import { motion } from 'motion/react';
import { Truck, Clock, Heart, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: "Fastest Delivery",
    description: "Get your food delivered to your doorstep in under 30 minutes, every single time.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Clock,
    title: "Fresh 24/7",
    description: "Our kitchen never sleeps. Late night cravings? We've got you covered with fresh meals.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: ShieldCheck,
    title: "Pure Ingredients",
    description: "We source only organic vegetables and premium quality beef/chicken from local farms.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Every order is prepared with culinary passion and strict hygiene standards.",
    color: "bg-red-100 text-brand-red"
  }
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal mb-4">
            WHY <span className="text-brand-red">MOHSIN</span> IS BEST?
          </h2>
          <div className="w-24 h-2 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className={`w-20 h-20 mx-auto rounded-3xl ${feature.color} flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                <feature.icon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-brand-charcoal mb-4 uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-charcoal rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              NEVER MISS A DEAL! JOIN OUR <span className="text-brand-yellow">FOODIE CLUB</span>
            </h3>
            <p className="text-gray-400">Subscribe for exclusive discounts, new menu alerts, and birthday surprises.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 flex-1 md:min-w-[300px] outline-none focus:border-brand-yellow transition-colors"
            />
            <button className="bg-brand-yellow text-brand-charcoal font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
