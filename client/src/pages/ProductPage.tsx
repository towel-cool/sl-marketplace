// src/pages/ProductPage.tsx
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

import MycologyImg from '../assets/gameimages/mycology.jpg';
import PartyTimeBingoImg from '../assets/gameimages/partytimebingo.webp';
import StockShockImg from '../assets/gameimages/stockshock.avif';
import GalacticShogunImg from '../assets/gameimages/galacticshogun.webp';

const products = [
  { id: 1, name: 'Mycology', price: 65.0, imageUrl: MycologyImg, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 2, name: 'Party Time Bingo', price: 19.99, imageUrl: PartyTimeBingoImg, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 3, name: 'Stock Shock', price: 49.99, imageUrl: StockShockImg, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 4, name: 'Galactic Shogun', price: 49.99, imageUrl: GalacticShogunImg, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="min-h-screen flex flex-grow p-8 text-center text-xl">Product not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col min-h-full">  {/* Flex container for the page */}
      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Description and Add to Cart Button */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {/* Add to Cart Button */}
            <div className="flex gap-4 items-center">
              <button
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Right Column: Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-xl h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
