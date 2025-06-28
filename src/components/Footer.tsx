import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">OrderOnTheGo</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your cravings, delivered instantly. We connect you with the best local restaurants 
              and cloud kitchens for a seamless food ordering experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary-400 transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/restaurants" className="hover:text-primary-400 transition-colors duration-200">Restaurants</Link></li>
              <li><Link to="/partners" className="hover:text-primary-400 transition-colors duration-200">For Partners</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>support@orderonthego.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-400 mt-1" />
                <span>123 Food Street<br />Delivery City, DC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-primary-400" />
                Download Our App
              </h4>
              <p className="text-gray-400">Get the best experience on mobile</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <div className="text-sm">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <div className="text-sm">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-white font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 OrderOnTheGo. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;