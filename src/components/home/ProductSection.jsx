import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../shop/ProductCard.jsx';

export default function ProductSection({ eyebrow, title, paragraph, products, variant = 'grid', bottomAction = false }) {
  return (
    <section className="section">
      <div className="section-head container">
        <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{paragraph && <p>{paragraph}</p>}</div>
        <Link className="text-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link>
      </div>
      <div className={`container product-grid ${variant}`}>{products.map((product) => <ProductCard key={product.id} product={product} variant={variant} />)}</div>
      {bottomAction && <div className="container product-mobile-action"><Link className="primary-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link></div>}
    </section>
  );
}