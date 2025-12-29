import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 relative">
                  <Image
                    src="/logo.svg"
                    alt="Talu logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                    priority={false}
                  />
                </div>
                <span className="text-2xl font-bold">Talu</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                Making bedtime magical with personalized stories that spark imagination and strengthen bonds between parents and children.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@taluapp.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Talu. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
