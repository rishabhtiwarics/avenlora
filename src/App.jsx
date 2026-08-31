import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Layout from './components/common/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsCondition from './pages/TermsCondition.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import Profile from './pages/Profile.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';

export default function App() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/auth');

  return (
    <CartProvider>
      <Layout hideChrome={isAuthPage}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}