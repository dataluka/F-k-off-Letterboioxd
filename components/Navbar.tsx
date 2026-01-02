import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { MONKEY_IMG_URL } from '../constants';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-gray-100 h-16 transition-all duration-300">
      <div className="max-w-3xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <button 
          onClick={() => onNavigate('feed')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Home"
        >
          {/* Container allows natural width, limited by height to ensure it fits in navbar */}
          <div className="h-12 w-auto py-1">
            <img 
              src={MONKEY_IMG_URL} 
              alt="Logo" 
              className="h-full w-auto object-contain transition-all duration-500 hover:scale-105"
              onError={(e) => {
                // Fallback if image is missing
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-gray-200', 'w-12', 'rounded-full');
              }}
            />
          </div>
          <span className="font-serif font-bold text-lg tracking-tight hidden sm:block">
            F**k Off Letterboxd
          </span>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <button 
              onClick={() => onNavigate('about')}
              className={`hover:text-black transition-colors ${currentView === 'about' ? 'text-black underline underline-offset-4' : ''}`}
            >
              About Me
            </button>
            <button 
              onClick={() => onNavigate('archive')}
              className={`hover:text-black transition-colors ${currentView === 'archive' ? 'text-black underline underline-offset-4' : ''}`}
            >
              Archive
            </button>
          </div>

          {/* Search */}
          <div className="relative flex items-center">
            <div className={`
              flex items-center overflow-hidden transition-all duration-300 ease-in-out
              ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'}
            `}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-gray-300 text-sm py-1 focus:outline-none focus:border-black font-serif"
              />
            </div>
            
            <button 
              onClick={() => {
                if(isSearchOpen && searchQuery) {
                  // Perform search logic here if needed
                  console.log("Searching for:", searchQuery);
                }
                setIsSearchOpen(!isSearchOpen);
              }}
              className="ml-2 text-gray-500 hover:text-black focus:outline-none"
            >
              {isSearchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;