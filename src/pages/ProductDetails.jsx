import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Banknote, ChevronLeft, ChevronRight, MapPinned, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import ProductSection from '../components/home/ProductSection.jsx';

const THUMBNAIL_LIMIT = 3;

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === slug) || products[0];
  const cart = useCart();
  const detailsRef = useRef(null);
  const images = product.images?.length ? product.images : [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedBottle, setSelectedBottle] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const selectedImage = images[activeImage] || images[0];
  const bottleOptions = product.bottleOptions || [];
  const selectedBottleOption = selectedBottle === null ? null : bottleOptions[selectedBottle];
  const lowestBottlePrice = bottleOptions.length ? Math.min(...bottleOptions.map((option) => option.price)) : product.price;
  const displayedPrice = selectedBottleOption?.price || lowestBottlePrice;
  const displayedOldPrice = selectedBottleOption?.oldPrice || product.oldPrice;
  const cartProduct = selectedBottleOption ? { ...product, size: selectedBottleOption.size, price: selectedBottleOption.price, oldPrice: selectedBottleOption.oldPrice } : product;
  const relatedProducts = products.filter((item) => item.id !== product.id);
  const visibleThumbnails = images.slice(thumbnailStart, thumbnailStart + THUMBNAIL_LIMIT);

  useEffect(() => {
    setActiveImage(0);
    setThumbnailStart(0);
    setQuantity(1);
    setSelectedBottle(null);
    const onScroll = () => setShowSticky(Boolean(detailsRef.current && detailsRef.current.getBoundingClientRect().bottom < 0));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [product.id]);

  const selectImage = (index) => {
    setActiveImage(index);
    if (index < thumbnailStart) setThumbnailStart(index);
    if (index >= thumbnailStart + THUMBNAIL_LIMIT) setThumbnailStart(index - THUMBNAIL_LIMIT + 1);
  };
  const moveMainImage = (direction) => selectImage(activeImage + direction);
  const addQuantityToCart = () => {
    if (!selectedBottleOption) return;
    Array.from({ length: quantity }).forEach(() => cart.addToCart(cartProduct));
  };
  const buyNow = () => {
    if (!selectedBottleOption) return;
    if (!cart.inCart(product.id)) addQuantityToCart();
    navigate('/cart');
  };

  return (
    <>
      <section className="page-section container product-detail-page" ref={detailsRef}>
        <nav className="shop-inline-breadcrumb breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><strong>{product.name}</strong></nav>
        <div className="product-detail">
          <div className="product-gallery">
            <img className="product-gallery-main" src={selectedImage} alt={product.name} />
            {images.length > 1 && <>{activeImage > 0 && <button className="product-gallery-nav previous" type="button" onClick={() => moveMainImage(-1)} aria-label="Previous product image"><ChevronLeft size={23} /></button>}{activeImage < images.length - 1 && <button className="product-gallery-nav next" type="button" onClick={() => moveMainImage(1)} aria-label="Next product image"><ChevronRight size={23} /></button>}<div className="product-gallery-thumbs"><div className="thumbnail-list">{visibleThumbnails.map((image, offset) => { const index = thumbnailStart + offset; return <button type="button" className={activeImage === index ? 'active' : ''} onClick={() => selectImage(index)} key={`${image}-${index}`} aria-label={`View ${product.name} image ${index + 1}`}><img src={image} alt="" /></button>; })}</div></div></>}
          </div>
          <div className="product-detail-info"><span className="eyebrow">{product.badge}</span><h1>{product.name}</h1><div className="product-detail-meta"><span className="detail-rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill={index < Math.round(product.rating) ? 'currentColor' : 'none'} />)}<strong>{product.rating.toFixed(1)}</strong></span><span className="detail-stock"><i />{product.status}</span></div><div className="price big"><strong>{selectedBottleOption ? '₹' : 'From ₹'}{displayedPrice.toLocaleString('en-IN')}</strong><del>₹{displayedOldPrice.toLocaleString('en-IN')}</del></div><BottleSizeOptions options={bottleOptions} selected={selectedBottle} onSelect={setSelectedBottle} /><p>{product.description}</p><div className="product-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="product-purchase-row"><div className="product-quantity"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={17} /></button><strong>{quantity}</strong><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}><Plus size={17} /></button></div><button className="primary-btn" disabled={!selectedBottleOption || cart.inCart(product.id)} onClick={addQuantityToCart}><ShoppingBag size={18} />{cart.inCart(product.id) ? 'Added to Cart' : 'Add to Cart'}</button><button type="button" className="light-btn product-buy-now" disabled={!selectedBottleOption} onClick={buyNow}>Buy Now</button></div><div className="product-benefits"><ProductBenefit icon={ShieldCheck} text="Secure Transaction" /><ProductBenefit icon={Banknote} text="Pay on Delivery" /><ProductBenefit icon={MapPinned} text="Easy Order Tracking" /><ProductBenefit icon={Truck} text="Free Delivery" /></div><div className="prepaid-offer">Get extra 5% off on prepaid orders</div></div>
        </div>
      </section>
      <ProductSection eyebrow="You may also like" title="Related Fragrances" products={relatedProducts} variant="related" />
      <div className={`product-section__sticky-product ${showSticky ? 'show' : ''}`}><div className="container sticky-product-inner"><img src={product.image} alt="" /><div className="sticky-product-copy"><strong>{product.name}</strong><span>{selectedBottleOption ? '₹' : 'From ₹'}{displayedPrice.toLocaleString('en-IN')}</span></div><div className="sticky-product-quantity"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={16} /></button><strong>{quantity}</strong><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}><Plus size={16} /></button></div><button type="button" className="primary-btn sticky-product-add" disabled={!selectedBottleOption || cart.inCart(product.id)} onClick={addQuantityToCart}><ShoppingBag size={17} />{cart.inCart(product.id) ? 'Added to Cart' : 'Add to Cart'}</button></div></div>
    </>
  );
}

function ProductBenefit({ icon: Icon, text }) {
  return <div><Icon size={19} /><span>{text}</span></div>;
}

function BottleSizeOptions({ options, selected, onSelect }) {
  return <div className="bottle-size-options" role="group" aria-label="Choose bottle size"><span className="bottle-size-title">Select bottle size</span><div>{options.map((option, index) => <button type="button" className={selected === index ? 'active' : ''} aria-pressed={selected === index} onClick={() => onSelect(index)} key={option.size}><b>{option.label}</b><strong>{option.size}</strong><span>₹{option.price.toLocaleString('en-IN')}</span><small>{option.note}</small></button>)}</div></div>;
}
