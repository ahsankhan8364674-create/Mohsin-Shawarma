import { Facebook, Instagram, Twitter, UtensilsCrossed, Fullscreen } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-red p-2 rounded-lg text-white">
                <UtensilsCrossed size={24} />
              </div>
              <span className="text-2xl font-display font-extrabold text-brand-charcoal uppercase tracking-tighter">
                Mohsin <span className="text-brand-red">Fast Food</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              Providing high-quality, delicious fast food that connects people through flavor. Join the revolution of taste.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-brand-charcoal mb-8 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Why Us', 'Our Chefs', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand-red transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-brand-charcoal mb-8 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-500">
                <span>Mon - Fri:</span>
                <span className="font-bold text-brand-charcoal">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>Saturday:</span>
                <span className="font-bold text-brand-charcoal">09:00 AM - 01:00 AM</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>Sunday:</span>
                <span className="font-bold text-brand-red">CLOSED</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-brand-charcoal mb-8 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-gray-500">
              <li>123 Gourmet Street, Food Plaza, New York, NY 10001</li>
              <li className="font-bold text-brand-charcoal">+1 (555) 000-1234</li>
              <li>hello@mohsinfastfood.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400 font-medium">
          <p>© 2026 Mohsin Fast Food. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-charcoal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
