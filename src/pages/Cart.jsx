import React from 'react';
import InnerBanner from '../components/common/InnerBanner.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, subtotal } = useCart();
  return <><InnerBanner eyebrow="Shopping Bag" title="Cart" paragraph="Review your selected Avenlora fragrances." /><section className="page-section container cart-page"><div>{items.length ? items.map((item) => <ProductCard key={item.id} product={item} variant="cart" />) : <p>Your cart is empty.</p>}</div><aside><h3>Order Summary</h3><p>Subtotal <strong>₹{subtotal.toLocaleString('en-IN')}</strong></p><Link className="primary-btn full" to="/checkout">Checkout</Link></aside></section></>;
}