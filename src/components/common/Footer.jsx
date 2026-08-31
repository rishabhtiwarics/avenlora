import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandAssets, categories } from '../../data/products.js';

const BRANDS = [
  { name: 'Amazon.in', img: 'https://krishnaayurved.com/cdn/shop/files/ka-amzin-logo.png?v=1775421770&width=110' },
  { name: 'Flipkart', img: 'https://krishnaayurved.com/cdn/shop/files/ka-flipk-logo.png?v=1775421768&width=110' }
];


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark">AVENLORA</div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={brandAssets.mainLogo} alt="Avenlora" />
          <p>Avenlora creates premium perfumes crafted beyond reason, with refined bottles, lasting notes, and memorable gifting appeal.</p>
          <div className="socials"><Instagram /><Facebook /><Youtube /></div>
        </div>
        <div className="footer-market">
          <h4>Available On</h4>
          <div className="market-logos">
            {BRANDS.map((brand) => (
              <a className="market-card" href="#" aria-label={brand.name} key={brand.name}>
                <img src={brand.img} alt={brand.name} />
              </a>
            ))}
          </div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-condition">Terms & Condition</Link>
        </div>
        <div className="footer-categories">
          <h4>Categories</h4>
          <div className="footer-categories-row">
            {categories.map((cat) => {
              const filter = cat.filter || cat.title;
              const to = filter === 'all' ? '/shop' : `/shop?category=${encodeURIComponent(filter)}`;
              return (
                <Link to={to} key={cat.title}>
                  <img src={cat.image} alt="" />
                  <span>{cat.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><MapPin size={17} /> Delhi, India</p>
          <p><Phone size={17} /> +91 98765 43210</p>
          <p><Mail size={17} /> hello@avenlora.com</p>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2026 Avenlora Perfume. All rights reserved.</div>
    </footer>
  );
}