import React from 'react';
import InnerBanner from '../components/common/InnerBanner.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Checkout() {
  const { subtotal } = useCart();
  return <><InnerBanner eyebrow="Secure Order" title="Checkout" paragraph="Add delivery details and complete your Avenlora perfume order." /><section className="page-section container checkout"><form><input placeholder="Full name" /><input placeholder="Phone number" /><input placeholder="Email address" /><textarea placeholder="Shipping address" /><button className="primary-btn full">Place Order</button></form><aside><h3>Total</h3><strong>₹{subtotal.toLocaleString('en-IN')}</strong></aside></section></>;
}