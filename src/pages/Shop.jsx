import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, CreditCard, Grid2X2, List, PackagePlus, Search, ShieldCheck, SlidersHorizontal, Tag, Truck, WalletCards } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard.jsx';
import { categories as homeCategories, products } from '../data/products.js';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [status, setStatus] = useState('All products');
  const [category, setCategory] = useState(selectedCategory || 'all');
  const [size, setSize] = useState('All sizes');
  const [sort, setSort] = useState('latest');
  const [itemsToShow, setItemsToShow] = useState(6);
  const [view, setView] = useState('grid');

  const categories = homeCategories.map((item) => ({ label: item.title, value: item.filter }));
  const sizes = ['All sizes', ...new Set(products.map((product) => product.size))];
  const filteredProducts = useMemo(() => products.filter((product) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || [product.name, product.category, product.description].some((value) => value.toLowerCase().includes(query));
    const matchesCategory = category === 'all' || product.category.toLowerCase() === category.toLowerCase();
    const matchesSize = size === 'All sizes' || product.size === size;
    const matchesStatus = status === 'All products' || (status === 'New arrivals' && product.badge === 'New Launch') || (status === 'Best sellers' && product.badge === 'Best Seller');
    const matchesMin = !minPrice || product.price >= Number(minPrice);
    const matchesMax = !maxPrice || product.price <= Number(maxPrice);
    return matchesSearch && matchesCategory && matchesSize && matchesStatus && matchesMin && matchesMax;
  }), [search, minPrice, maxPrice, status, category, size]);
  const sortedProducts = useMemo(() => [...filteredProducts].sort((first, second) => {
    if (sort === 'low') return first.price - second.price;
    if (sort === 'high') return second.price - first.price;
    return second.id - first.id;
  }), [filteredProducts, sort]);
  const displayedProducts = sortedProducts.slice(0, itemsToShow);
  const title = selectedCategory ? selectedCategory : 'vll Fragrances';

  return (
    <>
      <section className="page-section container shop-page">
        <nav className="shop-inline-breadcrumb breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><strong>Shop</strong>
        </nav>
        <div className="shop-layout">
          <aside className="shop-sidebar" aria-label="Shop filters">
              <div className="shop-sidebar-title"><SlidersHorizontal size={18} /><h2>Type &amp; Browse</h2></div>
              <label className="shop-search" htmlFor="product-search">
                <Search size={18} />
                <input id="product-search" type="search" placeholder="Search fragrances" value={search} onChange={(event) => setSearch(event.target.value)} />
              </label>

              <FilterWidget icon={<WalletCards size={17} />} title="Price filter">
                <div className="price-inputs">
                  <input aria-label="Minimum price" type="number" min="0" placeholder="Min ₹" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} />
                  <span>—</span>
                  <input aria-label="Maximum price" type="number" min="0" placeholder="Max ₹" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} />
                </div>
              </FilterWidget>

              <FilterWidget icon={<CheckCircle2 size={17} />} title="Product status">
                <FilterOptions options={['All products', 'New arrivals', 'Best sellers']} value={status} onChange={setStatus} name="status" />
              </FilterWidget>

              <FilterWidget icon={<Tag size={17} />} title="Categories">
                <FilterOptions options={categories} value={category} onChange={setCategory} name="category" />
              </FilterWidget>

              <FilterWidget icon={<WalletCards size={17} />} title="Bottle size">
                <FilterOptions options={sizes} value={size} onChange={setSize} name="size" />
              </FilterWidget>
          </aside>

          <div className="shop-products">
            <div className="shop-toolbar">
              <div><h2>{title}</h2><p>Showing {displayedProducts.length ? `1–${displayedProducts.length}` : '0'} of {filteredProducts.length} products</p></div>
              <div className="shop-controls">
                <label>Sort:
                  <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
                    <option value="latest">Sort by latest</option>
                    <option value="low">Price: low to high</option>
                    <option value="high">Price: high to low</option>
                  </select>
                </label>
                <label>Show:
                  <select value={itemsToShow} onChange={(event) => setItemsToShow(Number(event.target.value))} aria-label="Products to show">
                    <option value="6">6 items</option>
                    <option value="12">12 items</option>
                    <option value="24">24 items</option>
                  </select>
                </label>
                <div className="view-control">
                  <span>View:</span>
                  <div className="view-switcher" aria-label="Product view">
                    <button className={view === 'grid' ? 'active' : ''} type="button" aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')}><Grid2X2 size={18} /></button>
                    <button className={view === 'list' ? 'active' : ''} type="button" aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')}><List size={20} /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`product-grid shop-grid ${view === 'list' ? 'list-view' : ''}`}>
              {displayedProducts.map((product) => <ProductCard key={product.id} product={product} variant="shop" />)}
            </div>
            {!filteredProducts.length && <p className="shop-empty">No fragrances match these filters.</p>}
          </div>
        </div>
      </section>
      <section className="benefits-strip shop-benefits" aria-label="Shopping benefits">
        <div className="container benefits-grid">
          {shopBenefits.map(({ title, text, icon: Icon }) => <div className="benefit-item" key={title}><span className="benefit-icon"><Icon size={24} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>
    </>
  );
}

const shopBenefits = [
  { title: 'Payment only online', text: 'Secure prepaid checkout for faster confirmation and smooth order processing.', icon: CreditCard },
  { title: 'New stocks and sales', text: 'Discover fresh fragrance launches, limited editions, and seasonal perfume offers.', icon: PackagePlus },
  { title: 'Quality assurance', text: 'Every fragrance is selected for its refined notes, lasting character, and presentation.', icon: ShieldCheck },
  { title: 'Delivery from 1 hour', text: 'Quick local delivery support where available, with careful packing for every bottle.', icon: Truck }
];

function FilterWidget({ icon, title, children }) {
  return <section className="filter-widget"><h3>{icon}{title}</h3>{children}</section>;
}

function FilterOptions({ options, value, onChange, name }) {
  return <div className="filter-options">
    {options.map((option) => {
      const optionValue = typeof option === 'string' ? option : option.value;
      const optionLabel = typeof option === 'string' ? option : option.label;
      return <label key={optionValue}><input type="radio" name={name} checked={value === optionValue} onChange={() => onChange(optionValue)} /><span>{optionLabel}</span></label>;
    })}
  </div>;
}
