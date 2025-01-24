import React, { useState } from 'react';
import { Home, FlaskRound as Flask, FileImage, Users, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Flask, label: 'Our Labs', href: '#labs' },
    { icon: FileImage, label: 'Posters', href: '#posters' },
    { icon: Users, label: 'People', href: '/people' },
  ];

  return (
    <header className="fixed w-full bg-indigo-950/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">RISE 2025</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 transition-colors ${
                      location.pathname === item.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-indigo-950/95 backdrop-blur-sm">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 py-3 transition-colors ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;