import { useCartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";

export function Navbar () {
  const { cartItems } = useCartContext();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-2 bg-white flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        <img src={Logo} className="max-w-32" />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 text-yellow-400 font-bold font-stretch-semi-expanded uppercase font-sans">
        <Link className="hover:text-blue-700 transition">Locations & Menu</Link>
        <Link className="hover:text-blue-700 transition">Events</Link>
        <Link className="hover:text-blue-700 transition">Reservations</Link>
        <Link className="hover:text-blue-700 transition">Concept</Link>
        <Link to="/shop" className="hover:text-blue-700 transition">Shop</Link>
        <Link to="/cart" className="hover:text-blue-700 transition">Cart ({totalQuantity})</Link>
      </div>
    </nav>
  );
};
