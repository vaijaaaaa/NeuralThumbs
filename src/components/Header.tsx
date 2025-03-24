import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            ThumbCraft
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Features
          </a>
          <a href="#preview" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Preview
          </a>
          <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-lg">
            Log in
          </Button>
          <Button className="rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#preview" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preview
            </a>
            <a 
              href="#testimonials" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full rounded-lg">
                Log in
              </Button>
              <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;