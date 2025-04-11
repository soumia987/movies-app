import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-orange-500 dark:bg-gray-800 py-2 px-4 md:px-16 border-t border-b border-black dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className='text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors'
            >
              Watch TV
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className={`hidden lg:flex space-x-6`}>
              <Link to="/" className="text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300">Home</Link>
              <a href="#" className="text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300">Series</a>
              <a href="#" className="text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300">Films</a>
              <a href="#" className="text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300">Favoris</a>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <input
                type="search"
                placeholder="Search"
                className="h-10 w-48 px-3 text-black dark:text-white text-sm rounded-l-md dark:bg-gray-700 dark:border-gray-600"
              />
              <button className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-r-md hover:bg-gray-200 dark:hover:bg-gray-500">
                <span className="fas fa-search text-gray-700 dark:text-white text-xl"></span>
              </button>
            </div>

            <button
              onClick={toggleDarkMode}
              className="h-10 w-10 flex items-center justify-center text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span className="fas fa-sun text-xl"></span>
              ) : (
                <span className="fas fa-moon text-xl"></span>
              )}
            </button>

            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="h-10 w-10 flex items-center justify-center text-white border border-gray-800 dark:border-gray-600 rounded-md"
              >
                <span className="fas fa-bars"></span>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-2 pb-2 space-y-2">
            <Link to="/" className="block text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300 py-1">Home</Link>
            <a href="#" className="block text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300 py-1">Series</a>
            <a href="#" className="block text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300 py-1">Films</a>
            <a href="#" className="block text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-300 py-1">Favoris</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;