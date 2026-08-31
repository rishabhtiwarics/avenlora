import React from 'react';
import { Gift, LockKeyhole, PackageCheck, Truck } from 'lucide-react';

const benefits = [
  {
    title: 'Free domestic delivery',
    text: 'On all orders above INR 1000',
    icon: Truck
  },
  {
    title: 'Free sample',
    text: 'Not applicable on Discovery Packs',
    icon: PackageCheck
  },
  {
    title: 'Gift-Wrap',
    text: 'Gift wrap your order along with the handwritten Note',
    icon: Gift
  },
  {
    title: 'Secure payments',
    text: 'Encrypted data to ensure payment security',
    icon: LockKeyhole
  }
];

export default function BenefitsStrip() {
  return (
    <section className="benefits-strip" aria-label="Shopping benefits">
      <div className="container benefits-grid">
        {benefits.map(({ title, text, icon: Icon }) => (
          <div className="benefit-item" key={title}>
            <span className="benefit-icon"><Icon size={24} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}