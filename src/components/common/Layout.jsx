import React from 'react';
import Header from './Header.jsx';
import TopHeader from './TopHeader.jsx';
import Footer from './Footer.jsx';
import CartDrawer from './CartDrawer.jsx';

export default function Layout({ children, hideChrome }) {
  return (
    <>
      {!hideChrome && <TopHeader />}
      {!hideChrome && <Header />}
      <main>{children}</main>
      {!hideChrome && <Footer />}
      {!hideChrome && <CartDrawer />}
    </>
  );
}
