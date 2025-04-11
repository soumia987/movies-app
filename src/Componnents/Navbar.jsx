import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#222222] py-2 px-16 border-t border-b border-[#000]">
        <ul className="flex flex-wrap items-center justify-center space-x-4">
          <li className="flex-1 text-3xl font-bold text-cyan-400">Watch TV</li>
          
          <li className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-10 w-10 flex items-center justify-center text-white border border-[#151515] rounded-md"
            >
              <span className="fas fa-bars"></span>
            </button>
          </li>

          <div className={`flex space-x-6 lg:flex-row lg:space-x-12 lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
            <li><a href="#" className="text-gray-200 hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-cyan-400">Series</a></li>
            <li><a href="#" className="text-gray-200 hover:text-cyan-400">Films</a></li>
            <li><a href="#" className="text-gray-200 hover:text-cyan-400">Favoris</a></li>
          </div>

          <li className="flex items-center space-x-2">
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-48 px-3 text-black text-sm rounded-l-md"
            />
            <button className="h-10 w-10 flex items-center justify-center bg-[#f2f2f2] border border-[#cccccc] rounded-r-md hover:bg-[#e6e6e6]">
              <span className="fas fa-search text-[#222222] text-xl"></span>
            </button>
          </li>
        </ul>
      </nav>

    
    </div>
  );
}

export default Navbar;
