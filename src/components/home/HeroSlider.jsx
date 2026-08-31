import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import banner1 from '../../img/bnner1.jpeg';
import banner2 from '../../img/bnner2.jpeg';
import banner3 from '../../img/bnner3.jpeg';

const slides = [banner1, banner2, banner3];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const visibleSlides = useMemo(() => {
    const maxStart = Math.max(0, slides.length - 3);
    const start = Math.min(Math.max(0, active - 1), maxStart);
    return slides.slice(start, start + 3).map((_, offset) => start + offset);
  }, [active]);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % slides.length), 4200);
    return () => clearInterval(timer);
  }, []);
  return <section className="hero-slider">{slides.map((slide, index) => <img key={slide} src={slide} alt="Avenlora perfume" className={index === active ? 'active' : ''} />)}<div className="hero-dots" aria-label="Hero slider pagination">{visibleSlides.map((slideIndex) => <button key={slideIndex} className={slideIndex === active ? 'active' : ''} onClick={() => setActive(slideIndex)} aria-label={`Go to slide ${slideIndex + 1}`} aria-current={slideIndex === active ? 'true' : undefined}>{slideIndex + 1}</button>)}</div></section>;
}
