import React from 'react';
import HeroSlider from '../components/home/HeroSlider.jsx';
import FeaturedCategories from '../components/home/FeaturedCategories.jsx';
import StoryHero from '../components/home/StoryHero.jsx';
import ProductSection from '../components/home/ProductSection.jsx';
import ImageBanner from '../components/home/ImageBanner.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import BenefitsStrip from '../components/home/BenefitsStrip.jsx';
import SocialMarquee from '../components/home/SocialMarquee.jsx';
import VideoSection from '../components/home/VideoSection.jsx';
import { brandAssets, products } from '../data/products.js';

export default function Home() {
  return <><HeroSlider /><FeaturedCategories /><StoryHero />
    <ProductSection eyebrow="Customer Choice" title="Best Seller" products={products.slice(1, 5)} variant="seller" bottomAction /><ImageBanner images={[brandAssets.middleBanner1]} className="middle-banner" /><ProductSection eyebrow="Just Arrived" title="New Arrivals" products={products.slice(2, 6)} variant="arrival" /><ImageBanner images={[brandAssets.middleBanner2]} className="middle-banner" /><BenefitsStrip /><Testimonials /><SocialMarquee /><VideoSection /></>;
}