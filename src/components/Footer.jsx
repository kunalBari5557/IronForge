import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">FitZone</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your body and mind at FitZone. Our state-of-the-art facility and expert trainers are here to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Trainers
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">123 Fitness Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@fitzone.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 FitZone. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;