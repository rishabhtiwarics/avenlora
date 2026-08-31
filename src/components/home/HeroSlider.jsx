import React from 'react';
import { useEffect, useState } from 'react';
import banner1 from '../../img/bnner1.jpeg';
import banner2 from '../../img/bnner2.jpeg';
import banner3 from '../../img/bnner3.jpeg';

const slides = [banner1, banner2, banner3];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % slides.length), 4200);
    return () => clearInterval(timer);
  }, []);
  return <section className="hero-slider">{slides.map((slide, index) => <img key={slide} src={slide} alt="Avenlora perfume" className={index === active ? 'active' : ''} />)}<div className="hero-dots">{slides.map((_, index) => <button key={index} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Go to slide ${index + 1}`} />)}</div></section>;
}