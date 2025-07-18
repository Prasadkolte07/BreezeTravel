import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        <Link to="/">Breeze Travel</Link>
      </h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}