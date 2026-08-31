import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) || products[0];
  const cart = useCart();
  return <section className="page-section container product-detail"><img src={product.image} alt={product.name} /><div><span className="eyebrow">{product.badge}</span><h1>{product.name}</h1><div className="price big"><strong>₹{product.price.toLocaleString('en-IN')}</strong><del>₹{product.oldPrice.toLocaleString('en-IN')}</del></div><p>{product.description}</p><button className="primary-btn" disabled={cart.inCart(product.id)} onClick={() => cart.addToCart(product)}><ShoppingBag size={18} />{cart.inCart(product.id) ? 'Added to Cart' : 'Add to Cart'}</button><Link className="text-btn" to="/shop">Back to Shop</Link></div></section>;
}
