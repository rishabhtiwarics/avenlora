import bottleLine from '../img/productimg1.jpeg';
import amberSet from '../img/productimg2.jpeg';
import blackLogo from '../img/avenlora-black-logo.png';
import whiteLogo from '../img/avenlora_white_logo.png';
import mainLogo from '../img/avenlora-main-logo.png';
import middleBanner1 from '../img/middlebennr1.jpeg';
import middleBanner2 from '../img/middlebennr2.jpeg';
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
  middleBanner2
};

export const categories = [
  { title: 'For Man', image: category1, filter: 'Men' },
  { title: 'For Woman', image: category2, filter: 'Women' },
  { title: 'Combo Offer', image: category3, filter: 'Combo' },
  { title: 'All Fragrances', image: category4, filter: 'all' }
];

export const products = [
  { id: 1, slug: 'golden-oud', name: 'Golden Oud Premium', category: 'Oud', price: 549, oldPrice: 3999, rating: 5, image: productImg1, tone: '#c69a3a', badge: 'New Launch', description: 'Warm oud, saffron heat, polished woods, and a deep amber trail made for festive evenings.' },
  { id: 2, slug: 'shadow-mist', name: 'Shadow Mist', category: 'Men', price: 899, oldPrice: 1299, rating: 4, image: productImg2, tone: '#2d211a', badge: 'Best Seller', description: 'Smoky spice, dark vanilla, and refined woods with a clean premium finish.' },
  { id: 3, slug: 'ocean-veil', name: 'Ocean Veil', category: 'Fresh', price: 799, oldPrice: 1299, rating: 3.5, image: productImg3, tone: '#315c36', badge: 'Fresh', description: 'Citrus lift, aquatic freshness, blue woods, and soft musk for daily wear.' },
  { id: 4, slug: 'velvet-rouge', name: 'Velvet Rouge', category: 'Women', price: 999, oldPrice: 1499, rating: 4.5, image: productImg4, tone: '#8f1f2b', badge: 'Arrival', description: 'Velvet rose, red fruit, creamy amber, and sandalwood for a graceful signature.' },
  { id: 5, slug: 'jasmine-bliss', name: 'Jasmine Bliss Premium', category: 'Floral', price: 999, oldPrice: 1299, rating: 4, image: productImg1, tone: '#a8752b', badge: 'Loved', description: 'Soft jasmine, white musk, and creamy woods with a delicate long lasting trail.' },
  { id: 6, slug: 'luxe-oud', name: 'Luxe Oud Premium', category: 'Luxury', price: 1599, oldPrice: 2999, rating: 5, image: productImg2, tone: '#241b16', badge: 'Luxury', description: 'Deep resin, rare woods, glowing amber, and a rich gift-ready character.' }
];

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
  { name: 'Ayesha Khan', text: 'Golden Oud feels premium from the first spray. Projection is strong and the bottle looks elegant.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul Mehta', text: 'Ocean Veil became my daily office fragrance. Clean, fresh, and never too loud.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sana Ali', text: 'The combo pack made a beautiful gift. Packaging and fragrance both felt luxurious.', image: 'https://randomuser.me/api/portraits/women/68.jpg' }
];
