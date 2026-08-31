import React from 'react';
import { Instagram } from 'lucide-react';
import inst1 from '../../img/instgramimg/inst1.png';
import inst2 from '../../img/instgramimg/inst2.png';
import inst3 from '../../img/instgramimg/inst3.png';
import inst4 from '../../img/instgramimg/inst4.png';
import inst5 from '../../img/instgramimg/inst5.png';
import inst6 from '../../img/instgramimg/inst6.png';
import inst7 from '../../img/instgramimg/inst7.png';

const images = [inst1, inst2, inst3, inst4, inst5, inst6, inst7];

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