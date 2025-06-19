import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

// Placeholder info instead of db
import MycologyImg from '../assets/gameimages/mycology.jpg';
import PartyTimeBingoImg from '../assets/gameimages/partytimebingo.webp';
import StockShockImg from '../assets/gameimages/stockshock.avif';
import GalacticShogunImg from '../assets/gameimages/galacticshogun.webp';

import CAFlag from '../assets/flags/ca.png';

const products = [
  { id: 1, name: 'Mycology', price: 65.00, imageUrl: MycologyImg, countryFlagUrl: CAFlag, country: "ca" },
  { id: 2, name: 'Party Time Bingo', price: 19.99, imageUrl: PartyTimeBingoImg, countryFlagUrl: CAFlag, country: "ca" },
  { id: 3, name: 'Stock Shock', price: 49.99, imageUrl: StockShockImg, countryFlagUrl: CAFlag, country: "ca" },
  { id: 4, name: 'Galactic Shogun', price: 49.99, imageUrl: GalacticShogunImg, countryFlagUrl: CAFlag, country: "ca" },
];

export function Shop() {
  const [countryFilter, setCountryFilter] = useState("");

  // Gradient background with subtle opacity and smooth transitions
  const backgroundImage =
    countryFilter === 'Toronto'
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(211, 47, 47, 0.4), rgba(255, 255, 255, 0.7))' // Canadian flag colors, subtle
      : (countryFilter === 'Chicago' || countryFilter === 'Tempe' || countryFilter === 'Tucson')
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(178, 34, 52, 0.4), rgba(0, 51, 160, 0.4), rgba(255, 255, 255, 0.7))' // American flag colors, subtle
      : '';

  // Filter products based on the countryFilter
  const filteredProducts = countryFilter
    ? products.filter(product => product.country === (countryFilter === "Toronto" ? "ca" : "us"))
    : products;

  return (
    <div className="relative min-h-full" style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Main content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Shop Our Games</h1>
          <p className="text-gray-600 text-lg">Explore unique titles across cities</p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {/* All Button */}
          <button
            className="px-4 py-2 rounded-full bg-white border border-stone-400 hover:bg-stone-100 transition"
            onClick={() => setCountryFilter("")}
          >
            All
          </button>
          {["Toronto", "Chicago", "Tempe", "Tucson"].map((city) => (
            <button
              key={city}
              className="px-4 py-2 rounded-full bg-white border border-stone-400 hover:bg-stone-100 transition"
              onClick={() => setCountryFilter(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <h1 className="flex text-4xl font-bold mb-2 justify-center">
          {countryFilter === "Toronto" ? "🇨🇦 Canadian Collection" : ""}
          {countryFilter === "Chicago" || countryFilter === "Tempe" || countryFilter === "Tucson" ? "🇺🇸 American Collection" : ""}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
