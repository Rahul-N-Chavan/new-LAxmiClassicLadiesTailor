import Link from 'next/link';
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-maroon text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scissors className="h-6 w-6 text-luxury-gold" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">
                  Laxmi Classic
                </span>
                <span className="text-xs text-luxury-gold uppercase tracking-wider">
                  Ladies Tailor
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Experience the luxury of custom craftsmanship. Premium ladies tailoring with unlimited design possibilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-luxury-gold rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-luxury-gold rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Visit Our Store
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/ethnic-wear"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Ethnic Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/sarees"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Sarees
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/blouses"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Blouses
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/indo-western"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Indo-Western
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/lehengas"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Lehengas
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/wedding-tailoring"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  Wedding Tailoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  123 Fashion Street, Mumbai,<br />Maharashtra - 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <a
                  href="mailto:info@laxmiclassic.com"
                  className="text-white/80 hover:text-luxury-gold transition-colors text-sm"
                >
                  info@laxmiclassic.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-white/60 text-sm">
            © 2024 Laxmi Classic Ladies Tailor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
