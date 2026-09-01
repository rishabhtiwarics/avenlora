import React, { useEffect, useState } from 'react';
import { Check, ShoppingBag, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useCart } from '../../context/CartContext.jsx';

export default function ProductCard({ product, variant = 'grid' }) {
  const cart = useCart();
  const [selectedBottle, setSelectedBottle] = useState('10 ML');
  const added = cart?.inCart(product.id);
  const bottleOptions = product.bottleOptions || [];
  const selectedBottleOption = bottleOptions.find((option) => option.size === selectedBottle) || bottleOptions.find((option) => option.size === '10 ML') || bottleOptions[0];
  const price = `₹${(selectedBottleOption?.price || product.price).toLocaleString('en-IN')}`;
  const oldPrice = `₹${(selectedBottleOption?.oldPrice || product.oldPrice).toLocaleString('en-IN')}`;
  const cartProduct = selectedBottleOption ? { ...product, size: selectedBottleOption.size, price: selectedBottleOption.price, oldPrice: selectedBottleOption.oldPrice } : product;

  if (variant === 'mini') return <Link className="product-mini" to={`/shop/${product.slug}`}><img src={product.image} alt={product.name} /><span>{product.name}</span><Rating rating={product.rating} compact /><strong>{price}</strong></Link>;
  if (variant === 'search') return <Link className="product-search" to={`/shop/${product.slug}`}><img src={product.image} alt={product.name} /><span>{product.name}<small>{price}</small></span></Link>;
  if (variant === 'cart') return <div className="cart-product"><img src={product.image} alt={product.name} /><div className="cart-product-info"><strong>{product.name}</strong><span>{price} x {product.quantity}</span></div><button className="cart-remove" aria-label="Remove item" onClick={() => cart.removeFromCart(product.id)}><Trash2 size={16} /></button></div>;

  return (
    <article className={`product-card ${variant}`} style={{ '--tone': product.tone }}>
      <Link to={`/shop/${product.slug}`} className="product-img"><ProductImageCarousel product={product} autoplay={variant === 'shop' || variant === 'related'} homeAutoplay={variant === 'seller' || variant === 'arrival'} /><span>{product.badge}</span></Link>
      <div className="product-info"><p>{product.category}</p><h3>{product.name}</h3><Rating rating={product.rating} /><div className="price"><strong>{price}</strong><del>{oldPrice}</del></div>{variant === 'shop' && <p className="product-list-description">{product.shortDescription || product.listDescription}</p>}<div className="card-bottle-options" role="group" aria-label={`Select ${product.name} bottle size`}>{bottleOptions.map((option) => <button type="button" className={selectedBottleOption?.size === option.size ? 'active' : ''} aria-pressed={selectedBottleOption?.size === option.size} onClick={() => setSelectedBottle(option.size)} key={option.size}><span>{option.size}</span><small>{option.label}</small></button>)}</div><button className="primary-btn" disabled={added} onClick={() => cart.addToCart(cartProduct)}>{added ? <Check size={17} /> : <ShoppingBag size={17} />}{added ? 'Added' : 'Add to Cart'}</button></div>
    </article>
  );
}

function ProductImageCarousel({ product, autoplay, homeAutoplay }) {
  const images = product.images?.length ? product.images : [product.image];
  if (homeAutoplay && images.length > 1) return <HomeCardImageRotator images={images} alt={product.name} />;
  if (!autoplay || images.length === 1) return <img src={images[0]} alt={product.name} />;
  return <ShopCardImageSwiper images={images} alt={product.name} />;
}

function HomeCardImageRotator({ images, alt }) {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => setActiveImage((current) => (current + 1) % images.length), 3400);
    return () => window.clearInterval(interval);
  }, [images.length]);
  const dotCount = Math.min(3, images.length);
  const activeDot = Math.min(dotCount - 1, Math.floor(activeImage * dotCount / images.length));
  return <div className="home-product-image-rotator">{images.map((image, index) => <img className={index === activeImage ? 'active' : ''} src={image} alt={index === 0 ? alt : ''} key={`${image}-${index}`} />)}<span className="product-image-dots" aria-hidden="true">{Array.from({ length: dotCount }).map((_, index) => <i className={index === activeDot ? 'active' : ''} key={index} />)}</span></div>;
}

function ShopCardImageSwiper({ images, alt }) {
  const [activeImage, setActiveImage] = useState(0);
  const dotCount = Math.min(3, images.length);
  const activeDot = Math.min(dotCount - 1, Math.floor(activeImage * dotCount / images.length));
  return <div className="shop-product-image-rotator"><Swiper className="product-card-image-swiper" modules={[Autoplay, EffectFade]} effect="fade" fadeEffect={{ crossFade: true }} autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }} speed={850} loop allowTouchMove={false} onSlideChange={(swiper) => setActiveImage(swiper.realIndex)}>{images.map((image, index) => <SwiperSlide key={`${image}-${index}`}><img src={image} alt={index === 0 ? alt : ''} /></SwiperSlide>)}</Swiper><span className="product-image-dots" aria-hidden="true">{Array.from({ length: dotCount }).map((_, index) => <i className={index === activeDot ? 'active' : ''} key={index} />)}</span></div>;
}

function Rating({ rating = 4, compact = false }) {
  return (
    <div className={`product-rating ${compact ? 'compact' : ''}`} aria-label={`${rating} out of 5 rating`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.max(0, Math.min(1, rating - index));
        return (
          <span className="rating-star" key={index} style={{ '--fill': `${fill * 100}%` }}>
            <Star size={compact ? 12 : 14} />
          </span>
        );
      })}
      {!compact && <small>{rating.toFixed(1)}</small>}
    </div>
  );
}
