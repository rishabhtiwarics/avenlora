import React from 'react';
import { Star } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { testimonials } from '../../data/products.js';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const visibleTestimonials = useMemo(() => {
    const total = testimonials.length;
    const previous = (active - 1 + total) % total;
    const next = (active + 1) % total;
    return [previous, active, next].map((index, position) => ({
      ...testimonials[index],
      index,
      position
    }));
  }, [active]);

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      move(1);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section testimonials">
      <div className="center-title">
        <span className="eyebrow">Real Reviews</span>
        <h2>Testimonials</h2>
      </div>
      <div className="container testimonials-carousel">
        {visibleTestimonials.map((item) => (
          <article className={`testimonial-card ${item.position === 1 ? 'active' : ''}`} key={`${item.index}-${active}`}>
            <div className="testimonial-content">
              <img src={item.image} alt={item.name} />
              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
              </div>
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </div>
          </article>
        ))}
      </div>
      <div className="hero-dots static testimonial-dots" aria-label="Testimonials navigation">
        <button aria-label="Previous testimonial" onClick={() => move(-1)} />
        <button className="active" aria-label="Active testimonial" onClick={() => move(0)} />
        <button aria-label="Next testimonial" onClick={() => move(1)} />
      </div>
    </section>
  );
}