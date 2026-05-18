import { Link } from "react-router-dom";
import logo from "../assets/sb-logo.jpeg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md sticky top-0 z-50">

      <Link
        to="/"
        className="flex items-center gap-3 hover:text-pink-500 transition"
      >
        <img
          src={logo}
          alt="logo"
          className="w-20 h-14 object-cover rounded-full"
        />

      </Link>

      <div className="flex gap-8 text-lg">
        <Link to="/gallery" className="hover:text-pink-500 transition">Gallery</Link>
        <Link to="/products" className="hover:text-pink-500 transition">Products</Link>
        <Link to="/custom-order" className="hover:text-pink-500 transition">Custom Cakes</Link>
      </div>

    </nav>
  );
}

export default Navbar;