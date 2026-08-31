import React from 'react';
import { Instagram } from 'lucide-react';
import inst1 from '../../img/instgramimg/ins1.jpeg';
import inst2 from '../../img/instgramimg/ins2.jpeg';
import inst3 from '../../img/instgramimg/ins3.jpeg';
import inst4 from '../../img/instgramimg/ins4.jpeg';
import inst5 from '../../img/instgramimg/ins5.jpeg';

const images = [inst1, inst2, inst3, inst4, inst5];

export default function SocialMarquee() {
  const row = [...images, ...images];
  return (
    <section className="social-section">
      <div className="section-head container center-title">
        <div><span className="eyebrow">Follow Us</span><h2>Instagram Moments</h2></div>
      </div>
      <div className="image-marquee">
        <div>
          {row.map((image, index) => (
            <a className="social-marquee-card" href="https://www.instagram.com/" aria-label="Open Avenlora Instagram" key={index}>
              <img src={image} alt="Instagram perfume post" />
              <span className="social-overlay"><Instagram size={26} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
