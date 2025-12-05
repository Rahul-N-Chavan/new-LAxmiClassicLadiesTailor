'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Designer Anarkali Suit',
    price: '₹8,999',
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Embroidered Silk Saree',
    price: '₹12,999',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Bridal Lehenga Set',
    price: '₹45,999',
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Indo-Western Gown',
    price: '₹15,999',
    image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Palazzo Suit Set',
    price: '₹7,499',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Velvet Sharara Set',
    price: '₹18,999',
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Custom Blouse Design',
    price: '₹3,499',
    image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Festive Lehenga',
    price: '₹22,999',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            Top Picks For You
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
            Explore our curated collection of bestselling designs, ready to customize
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-luxury-gold hover:text-white">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-luxury-maroon mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-luxury-gold font-bold text-lg mb-3">
                  Starting from {product.price}
                </p>
                <Link href="/consult">
                  <Button
                    variant="outline"
                    className="w-full border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
                  >
                    Customize
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections/top-picks">
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
