'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X, Stars } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Stars className="h-4 w-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#6C63FF]">Talu</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#6C63FF] transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#6C63FF] transition-colors duration-200 font-medium">
              Pricing
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button href="#download" size="md" className="bg-[#6C63FF] hover:bg-[#5A52E8] text-white">
              Download the App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#6C63FF]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-4">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:text-[#6C63FF] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pricing" 
                className="block px-4 py-2 text-gray-700 hover:text-[#6C63FF] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="px-4">
                <Button href="#download" className="w-full bg-[#6C63FF] hover:bg-[#5A52E8] text-white" size="md">
                  Download the App
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}