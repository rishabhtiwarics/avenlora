import React from 'react';
import { Menu, Search, UserRound, ShoppingBag, X, LayoutDashboard, LogOut, ShieldCheck, Facebook, Instagram } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products, brandAssets, categories, testimonials } from '../../data/products.js';
import ProductCard from '../shop/ProductCard.jsx';
import { useCart } from '../../context/CartContext.jsx';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Shop', path: '/shop', mega: true },
  { label: 'Contact', path: '/contact' }
];
const mobileLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setIsCartOpen } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="logo"><img src={brandAssets.mainLogo} alt="Avenlora" /></Link>
        <nav className="desktop-nav">
          {links.map((link) => (
            <div className="nav-item" key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>
              {link.mega && <MegaMenu />}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn search-action" aria-label="Search" onClick={() => setSearchOpen(true)}><Search size={21} /></button>
          <UserMenu />
          <button className="icon-btn cart-trigger" aria-label="Cart" onClick={() => setIsCartOpen(true)}><ShoppingBag size={21} />{count > 0 && <span>{count}</span>}</button>
          <button className="icon-btn mobile-only" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
        </div>
      </div>
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={brandAssets.mainLogo} alt="Avenlora" />
          <button className="icon-btn sidebar-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button>
        </div>
        <div className="sidebar-main">
          <nav className="mobile-nav-list">{mobileLinks.map(({ label, path }) => <NavLink key={path} to={path} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}</nav>
          <Link className="sidebar-mini-banner" to="/shop" onClick={() => setMenuOpen(false)}><img src={brandAssets.bottleLine} alt="Avenlora perfume" /></Link>
          <div className="mobile-user-wrap"><UserPanel compact /></div>
        </div>
        <div className="sidebar-footer"><span>Follow Avenlora</span><div className="sidebar-socials"><a href="#" aria-label="Facebook"><Facebook size={18} /></a><a href="#" aria-label="Instagram"><Instagram size={18} /></a></div></div>
      </div>
      <div className={`overlay ${menuOpen || searchOpen ? 'show' : ''}`} onClick={() => { setMenuOpen(false); setSearchOpen(false); }} />
      <div className={`search-panel ${searchOpen ? 'open' : ''}`}>
        <div className="drawer-head"><strong>Search Avenlora</strong><button className="icon-btn" onClick={() => setSearchOpen(false)}><X size={22} /></button></div>
        <label className="search-box"><Search size={18} /><input placeholder="Search perfume" autoFocus={searchOpen} /></label>
        <div className="search-results">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} variant="search" />)}</div>
      </div>
    </header>
  );
}

function UserMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="user-menu">
      <button className="icon-btn" aria-label="User menu" onClick={() => setOpen((value) => !value)}><UserRound size={21} /></button>
      <div className={`user-dropdown ${open ? 'open' : ''}`}><UserPanel /></div>
    </div>
  );
}

function UserPanel({ compact = false }) {
  const [role, setRole] = useState('guest');
  useEffect(() => setRole(localStorage.getItem('avenloraRole') || 'guest'), []);
  const logout = () => { localStorage.removeItem('avenloraRole'); setRole('guest'); };

  if (role === 'admin') {
    return <div className={`user-panel ${compact ? 'compact' : ''}`}><span className="eyebrow">Admin Login</span><div className="user-row"><span className="avatar admin"><ShieldCheck size={20} /></span><div><strong>Avenlora Admin</strong><small>admin@avenlora.com</small></div></div><Link to="/admin/dashboard" className="user-link"><LayoutDashboard size={17} /> Dashboard</Link><Link to="/profile" className="user-link"><UserRound size={17} /> Admin User Profile</Link><button className="logout-btn" onClick={logout}><LogOut size={17} /> Logout</button></div>;
  }

  if (role === 'user') {
    return <div className={`user-panel ${compact ? 'compact' : ''}`}><span className="eyebrow">User Login</span><div className="user-row"><img src={testimonials[0].image} alt="User" /><div><strong>Ayesha Khan</strong><small>ayesha@avenlora.com</small></div></div><Link to="/profile" className="user-link"><UserRound size={17} /> User Profile</Link><button className="logout-btn" onClick={logout}><LogOut size={17} /> Logout</button></div>;
  }

  return <div className={`user-panel ${compact ? 'compact' : ''}`}><span className="eyebrow">My Account</span><h3>Login to your Avenlora account</h3><p>Access orders, saved perfumes, and faster checkout.</p><div className="auth-actions"><Link to="/auth/login" className="primary-btn">Login</Link><Link to="/auth/register" className="light-btn">Register</Link></div></div>;
}

function MegaMenu() {
  return (
    <div className="mega-menu">
      <div><span className="eyebrow">Shop By Mood</span><h3>Signature Avenlora Perfumes</h3><p>Premium oud, fresh, floral, and gifting fragrances in one refined collection.</p></div>
      <div className="mega-grid mega-category-grid">
        {categories.map((cat) => {
          const to = cat.filter === 'all' ? '/shop' : `/shop?category=${encodeURIComponent(cat.filter)}`;
          return (
            <Link className="mega-category-card" to={to} key={cat.title}>
              <img src={cat.image} alt={cat.title} />
              <span>{cat.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
