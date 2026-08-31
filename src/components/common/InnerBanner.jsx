import React from 'react';
import { Link } from 'react-router-dom';

export default function InnerBanner({ eyebrow, title, paragraph }) {
  return (
    <section className="inner-banner">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>{title}</span></div>
      </div>
    </section>
  );
}
