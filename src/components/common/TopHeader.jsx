import React from 'react';
import { Gift, Sparkles, Truck, Heart } from 'lucide-react';

const items = [
  { icon: Gift, text: 'Gift Skinn to the one you know by heart - Get upto 25% off on Rakh' },
  { icon: Sparkles, text: 'New Avenlora fragrances crafted for long lasting luxury' },
  { icon: Truck, text: 'Free shipping on prepaid perfume orders' },
  { icon: Heart, text: 'Premium gifting combos available now' }
];

export default function TopHeader() {
  const row = [...items, ...items, ...items];
  return (
    <div className="top-header" aria-label="Store offers">
      <div className="marquee-track">
        {row.map(({ icon: Icon, text }, index) => (
          <span className="marquee-item" key={`${text}-${index}`}><span className="marquee-icon"><Icon size={15} /></span><span>{text}</span></span>
        ))}
      </div>
    </div>
  );
}