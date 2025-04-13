// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, BookOpen, Upload, Settings, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  const mobileLinkClasses = (path) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between mx-auto w-full">
        <h1 className="text-xl font-bold text-gray-800">Constitution Archive</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={linkClasses('/')}>
            <BookOpen className="h-4 w-4 mr-2" />
            Home
          </Link>
          <Link to="/search" className={linkClasses('/search')}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Link>
          <Link to="/admin" className={linkClasses('/admin')}>
            <Upload className="h-4 w-4 mr-2" />
            Admin
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={mobileLinkClasses('/')}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Home
            </div>
          </Link>
          <Link
            to="/search"
            className={mobileLinkClasses('/search')}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search
            </div>
          </Link>
          <Link
            to="/admin"
            className={mobileLinkClasses('/admin')}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Admin
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;