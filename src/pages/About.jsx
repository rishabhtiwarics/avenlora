import React from 'react';
import InnerBanner from '../components/common/InnerBanner.jsx';
import { brandAssets } from '../data/products.js';

export default function About() {
  return <><InnerBanner eyebrow="About Avenlora" title="About" paragraph="Premium perfume crafted around memorable notes, elegant bottles, and modern gifting." /><section className="page-section container two-col"><img src={brandAssets.bottleLine} alt="Avenlora perfume bottles" /><div><span className="eyebrow">Crafted Beyond Reason</span><h2>Fragrance with a confident signature</h2><p>Avenlora blends warm oud, bright florals, fresh aquatic notes, and refined amber into perfumes that feel premium from bottle to dry down.</p><p>Every bottle is designed for daily wear, celebration, and gifting with a clean luxury look.</p></div></section></>;
}
