// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
    countryFlagUrl?: string;
}

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="relative w-full h-full border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center bg-white">
                <div className="absolute top-2 left-2 z-10">
                    <img src={product.countryFlagUrl} className="w-16 h-12 object-contain rounded-sm" />
                </div>
                <img src={product.imageUrl} alt={product.name} className="w-3/4 h-64 object-cover rounded-t-lg mb-4" />
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{product.name}</h2>
                <p className="text-lg font-medium text-gray-600">${product.price.toFixed(2)}</p>
            </div>
        </Link>
   );
}
