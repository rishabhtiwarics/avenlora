import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products.js';

export default function FeaturedCategories() {
  return (
    <section className="section featured-categories">
      <div className="section-head container">
        <div><span className="eyebrow">Shop By Fragrance</span><h2>Featured Categories</h2></div>
        <Link className="text-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link>
      </div>
      <div className="container category-grid">
        {categories.map((cat) => (
          <Link to="/shop" className="category-card" key={cat.title}>
            <img src={cat.image} alt={cat.title} />
            <span className="category-title">{cat.title}</span>
            <span className="category-arrow"><ArrowRight size={17} /></span>
          </Link>
        ))}
      </div>
      <div className="container category-mobile-action"><Link className="primary-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link></div>
    </section>
  );
}