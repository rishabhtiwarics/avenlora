import React from 'react';
export default function ImageBanner({ images, className = '' }) {
  const classes = ['image-banner', images.length > 1 ? 'split' : '', className].filter(Boolean).join(' ');

  return <section className={classes}>{images.map((image, index) => <img src={image} alt="Avenlora perfume banner" key={index} />)}</section>;
}