import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="font-bold text-xl text-gray-900">FitZone</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/membership"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/membership"
              className="block mx-3 mt-4 bg-orange-500 text-white px-4 py-2 rounded-md text-center hover:bg-orange-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;