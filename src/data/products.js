import bottleLine from '../img/productimg1.jpeg';
import amberSet from '../img/productimg2.jpeg';
import blackLogo from '../img/avenlora-black-logo.png';
import whiteLogo from '../img/avenlora_white_logo.png';
import mainLogo from '../img/avenlora-main-logo.png';
import middleBanner1 from '../img/middlebennr1.jpeg';
import middleBanner2 from '../img/middlebennr2.jpeg';
import mobileMiddleBanner1 from '../img/mobile-middlebennr1.jpeg';
import mobileMiddleBanner2 from '../img/mobile-middlebennr2.jpeg';
import productImg1 from '../img/productimg1.jpeg';
import productImg2 from '../img/productimg2.jpeg';
import productImg3 from '../img/productimg3.jpeg';
import productImg4 from '../img/productimg4.jpeg';
import reel1 from '../img/VideoSection-video.mp4';
import category1 from '../img/categories/categorie1.jpeg';
import category2 from '../img/categories/categorie2.jpeg';
import category3 from '../img/categories/categorie3.jpeg';
import category4 from '../img/categories/categorie4.jpeg';

export const brandAssets = {
  blackLogo,
  whiteLogo,
  mainLogo,
  bottleLine,
  amberSet,
  middleBanner1,
  middleBanner2,
  mobileMiddleBanner1,
  mobileMiddleBanner2
};

export const categories = [
  { title: 'For Man', image: category1, filter: 'Men' },
  { title: 'For Woman', image: category2, filter: 'Women' },
  { title: 'Combo Offer', image: category3, filter: 'Combo' },
  { title: 'All Fragrances', image: category4, filter: 'all' }
];

const productDescriptions = {
  1: 'Golden Oud Premium opens with the warmth of saffron before settling into polished oud woods and glowing amber. Its deep, celebratory character creates a confident scent trail that suits festive evenings, formal gatherings, and moments when you want your fragrance to feel as memorable as your presence.',
  2: 'Shadow Mist is a refined woody fragrance built around smoky spice, dark vanilla, and smooth woods. The opening feels bold yet clean, while the dry-down becomes soft and elegant on skin. It is an easy choice for evenings, office wear, and anyone who enjoys a modern masculine signature.',
  3: 'Ocean Veil combines a bright citrus opening with a cool aquatic heart, blue woods, and a soft musk finish. Fresh without becoming sharp, it has a relaxed clean character that works beautifully for everyday wear, warm weather, travel, and understated professional settings.',
  4: 'Velvet Rouge blends velvet rose and red fruit with creamy amber and smooth sandalwood. The composition begins graceful and luminous, then evolves into a warm, comforting base with a soft lasting trail. It is made for dressier moments, thoughtful gifting, and elegant everyday wear.',
  5: 'Jasmine Bliss Premium is a delicate floral fragrance where soft jasmine meets white musk and creamy woods. Its gentle opening feels fresh and graceful, while the warm base gives it a smooth, long-lasting finish. A lovely choice for daytime plans, gifting, and a polished daily signature.',
  6: 'Luxe Oud Premium is a rich, gift-ready fragrance made with deep resin, rare woods, and glowing amber. The scent develops slowly on skin, revealing a warm luxurious character with impressive depth. Wear it for celebrations, evening occasions, or whenever you want an unmistakably premium presence.'
};

export const products = [
  { id: 1, slug: 'golden-oud', name: 'Golden Oud Premium', category: 'Oud', size: '100 ml', price: 549, oldPrice: 3999, rating: 5, image: productImg1, images: [productImg1], tone: '#c69a3a', badge: 'New Launch', description: 'Warm oud, saffron heat, polished woods, and a deep amber trail made for festive evenings.', listDescription: 'A warm, celebratory oud fragrance balanced with saffron and amber for a confident evening signature.' },
  { id: 2, slug: 'shadow-mist', name: 'Shadow Mist', category: 'Men', size: '50 ml', price: 899, oldPrice: 1299, rating: 4, image: productImg2, images: [productImg2, productImg3], tone: '#2d211a', badge: 'Best Seller', description: 'Smoky spice, dark vanilla, and refined woods with a clean premium finish.', listDescription: 'Smoky spice and dark vanilla settle into polished woods for an effortlessly refined everyday scent.' },
  { id: 3, slug: 'ocean-veil', name: 'Ocean Veil', category: 'Fresh', size: '100 ml', price: 799, oldPrice: 1299, rating: 3.5, image: productImg3, images: [productImg3, productImg1, productImg4], tone: '#315c36', badge: 'Fresh', description: 'Citrus lift, aquatic freshness, blue woods, and soft musk for daily wear.', listDescription: 'A crisp aquatic blend with citrus, blue woods, and soft musk that feels clean from morning to night.' },
  { id: 4, slug: 'velvet-rouge', name: 'Velvet Rouge', category: 'Women', size: '50 ml', price: 999, oldPrice: 1499, rating: 4.5, image: productImg4, images: [productImg4, productImg2, productImg1, productImg3], tone: '#8f1f2b', badge: 'Arrival', description: 'Velvet rose, red fruit, creamy amber, and sandalwood for a graceful signature.', listDescription: 'Velvet rose and red fruits rest on creamy amber and sandalwood for a graceful, memorable trail.' },
  { id: 5, slug: 'jasmine-bliss', name: 'Jasmine Bliss Premium', category: 'Floral', size: '100 ml', price: 999, oldPrice: 1299, rating: 4, image: productImg1, images: [productImg1, productImg4, productImg3, productImg2, productImg1], tone: '#a8752b', badge: 'Loved', description: 'Soft jasmine, white musk, and creamy woods with a delicate long lasting trail.', listDescription: 'Soft jasmine, white musk, and creamy woods create a delicate floral fragrance with lasting warmth.' },
  { id: 6, slug: 'luxe-oud', name: 'Luxe Oud Premium', category: 'Luxury', size: '100 ml', price: 1599, oldPrice: 2999, rating: 5, image: productImg2, images: [productImg2, productImg1, productImg4], tone: '#241b16', badge: 'Luxury', description: 'Deep resin, rare woods, glowing amber, and a rich gift-ready character.', listDescription: 'Rare woods, glowing amber, and deep resin make this a rich, luxurious choice for special occasions.' }
].map((product) => ({ ...product, description: productDescriptions[product.id], shortDescription: product.listDescription, status: 'In Stock', tags: ['Non-Alcoholic', 'Unisex', 'Roll-On', 'Best For Gifting', 'Top Bestsellers'], bottleOptions: [{ label: 'Best Value', size: '60 ML', price: 3599, oldPrice: 3999, note: '+ 10ml gift + 3ml · All 3' }, { label: 'Popular', size: '10 ML', price: 1099, oldPrice: 1299, note: 'All 3 fragrances included' }] }));

export const reels = [
  { productId: 1, video: reel1 },
  { productId: 2, video: reel1 },
  { productId: 3, video: reel1 },
  { productId: 4, video: reel1 },
  { productId: 5, video: reel1 },
  { productId: 6, video: reel1 },
  { productId: 3, video: reel1 },
  { productId: 4, video: reel1 }
];

export const testimonials = [
  { name: 'Ananya Sharma', text: 'Golden Oud has a rich, elegant fragrance and stays beautifully through my evening plans. The bottle also looks so premium.', image: 'https://images.unsplash.com/photo-1631606929991-200006582c09?auto=format&fit=crop&w=240&h=240&q=85' },
  { name: 'Arjun Mehta', text: 'Ocean Veil is perfect for the office—fresh, clean and noticeable without ever feeling too strong. It is now my daily choice.', image: 'https://images.unsplash.com/photo-1704722408439-fb23ed6187ea?auto=format&fit=crop&w=240&h=240&q=85' },
  { name: 'Priya Nair', text: 'I gifted the fragrance combo to my sister and she loved it. The packaging, scent and overall presentation felt truly luxurious.', image: 'https://images.unsplash.com/photo-1669829528850-959d7b08278b?auto=format&fit=crop&w=240&h=240&q=85' }
];
