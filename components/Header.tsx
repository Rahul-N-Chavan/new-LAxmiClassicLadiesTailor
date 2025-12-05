'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Heart, ShoppingBag, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from '@/components/MegaMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <Scissors className="h-8 w-8 text-luxury-gold" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-luxury-maroon tracking-tight">
                Laxmi Classic
              </span>
              <span className="text-xs text-luxury-gold uppercase tracking-wider">
                Ladies Tailor
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onMouseEnter={() => setActiveMenu(null)}
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('categories')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors">
                Categories
              </button>
              {activeMenu === 'categories' && (
                <MegaMenu type="categories" onClose={() => setActiveMenu(null)} />
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('collections')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors">
                Collections
              </button>
              {activeMenu === 'collections' && (
                <MegaMenu type="collections" onClose={() => setActiveMenu(null)} />
              )}
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <Link href="/consult">
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-6">
                Book A Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-luxury-maroon" />
            ) : (
              <Menu className="h-6 w-6 text-luxury-maroon" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-luxury-maroon">Categories</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/categories/ethnic-wear"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ethnic Wear
                </Link>
                <Link
                  href="/categories/sarees"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sarees
                </Link>
                <Link
                  href="/categories/blouses"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blouses
                </Link>
                <Link
                  href="/categories/indo-western"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Indo-Western
                </Link>
                <Link
                  href="/categories/lehengas"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lehengas
                </Link>
                <Link
                  href="/categories/wedding-tailoring"
                  className="block text-sm text-luxury-maroon/80 hover:text-luxury-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wedding Tailoring
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="block text-sm font-medium text-luxury-maroon hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/consult"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium">
                Book A Consultation
              </Button>
            </Link>
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
              <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-luxury-maroon hover:text-luxury-gold transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
