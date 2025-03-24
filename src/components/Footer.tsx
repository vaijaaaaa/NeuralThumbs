import React from 'react';
import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                ThumbCraft
              </span>
            </div>
            <p className="text-slate-600 mb-6 max-w-xs">
              Create stunning YouTube thumbnails that attract more viewers and grow your channel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-display font-bold uppercase text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Templates</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-display font-bold uppercase text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-display font-bold uppercase text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ThumbCraft. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-slate-500">
            Designed with precision for professional content creators
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
