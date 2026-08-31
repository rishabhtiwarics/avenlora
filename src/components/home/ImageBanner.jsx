import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageBanner({ images, mobileImages = [], className = '', to, fullWidth = false }) {
  const classes = ['image-banner', images.length > 1 ? 'split' : '', className].filter(Boolean).join(' ');
  const fullWidthStyle = fullWidth ? { width: '100vw', maxWidth: '100vw', marginLeft: 'calc(50% - 50vw)' } : undefined;

  return (
    <section className={classes} style={fullWidthStyle}>
      {images.map((image, index) => {
        const mobileImage = mobileImages[index];
        const banner = mobileImage ? <picture><source media="(max-width: 768px)" srcSet={mobileImage} /><img src={image} alt="Discover Avenlora perfumes" loading="lazy" decoding="async" /></picture> : <img src={image} alt="Discover Avenlora perfumes" loading="lazy" decoding="async" />;

        return to ? <Link className="image-banner-link" to={to} aria-label="Shop Avenlora perfumes" key={index}>{banner}</Link> : <React.Fragment key={index}>{banner}</React.Fragment>;
      })}
    </section>
  );
}
