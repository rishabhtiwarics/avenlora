import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProductCard from '../shop/ProductCard.jsx';

export default function ProductSection({ eyebrow, title, paragraph, products, variant = 'grid', bottomAction = false }) {
  return (
    <section className={`section ${variant === 'related' ? 'related-products-section' : ''}`}>
      <div className="section-head container">
        <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{paragraph && <p>{paragraph}</p>}</div>
        {variant !== 'related' && <Link className="text-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link>}
      </div>
      {variant === 'related' ? <div className="container"><Swiper className="related-products-swiper" modules={[Autoplay]} autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }} loop={products.length > 3} spaceBetween={12} slidesPerView={2} breakpoints={{ 621: { slidesPerView: 2, spaceBetween: 18 }, 921: { slidesPerView: 3, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 20 } }}>{products.map((product) => <SwiperSlide key={product.id}><ProductCard product={product} variant="related" /></SwiperSlide>)}</Swiper></div> : <div className={`container product-grid ${variant}`}>{products.map((product) => <ProductCard key={product.id} product={product} variant={variant} />)}</div>}
      {bottomAction && <div className="container product-mobile-action"><Link className="primary-btn" to="/shop">Shop Now <ArrowRight size={17} /></Link></div>}
    </section>
  );
}
