export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Burgers' | 'Sides' | 'Drinks' | 'Desserts';
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Mohsin Monster',
    description: 'Double beef patty, triple cheddar, caramelized onions, and our secret monster sauce.',
    price: '$12.99',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2',
    name: 'Fiery Zinger',
    description: 'Spicy crispy chicken breast, jalapenos, peri-peri mayo, and fresh lettuce.',
    price: '$10.99',
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's1',
    name: 'Loaded Lava Fries',
    description: 'Golden fries smothered in melted cheese, bacon bits, and spicy ranch.',
    price: '$6.99',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Crunchy Onion Rings',
    description: 'Beer-battered jumbo onion rings served with honey mustard dip.',
    price: '$5.49',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd1',
    name: 'Midnight Shake',
    description: 'Rich dark chocolate swirl with crushed oreos and whipped cream.',
    price: '$5.99',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'd2',
    name: 'Vintage Cola',
    description: 'Ice-cold classic cola with a slice of lemon.',
    price: '$2.49',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  }
];
