import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Smart Hire Desk
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">Companies</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </nav>

        {/* Login Button */}
        <div className="flex gap-3">
            <Link to="/Login">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Login
          </button>
          </Link>
          <Link to="/Register">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Register
          </button></Link>
        </div>

      </div>
    </header>
  );
}

export default Header;