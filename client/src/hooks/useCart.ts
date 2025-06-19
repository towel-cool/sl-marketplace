import { useEffect } from 'react';
import { useCartContext } from '../context/CartProvider';

// Custom hook that utilizes the context
export function useCart() {
  const { cartItems, addToCart, removeFromCart } = useCartContext();

  useEffect(() => {
    // Make sure to update localStorage every time cartItems changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return { cartItems, addToCart, removeFromCart };
}
