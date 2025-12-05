'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ZoomIn, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file, or just use standard string concat

// --- 1. GALLERY DATA ---
const categories = ['All', 'Bridal', 'Sarees', 'Indo-Western', 'Blouses'];

const galleryItems = [
  {
    id: 1,
    category: 'Bridal',
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Royal Red Bridal Lehenga',
    desc: 'Heavy zardosi work on velvet',
  },
  {
    id: 2,
    category: 'Indo-Western',
    image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Contemporary Fusion Gown',
    desc: 'Draped silhouette with belt',
  },
  {
    id: 3,
    category: 'Sarees',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Handloom Silk Saree',
    desc: 'Traditional weave with modern border',
  },
  {
    id: 4,
    category: 'Blouses',
    image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Embroidered Backless Blouse',
    desc: 'Custom cutwork design',
  },
  {
    id: 5,
    category: 'Bridal',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Pastel Engagement Lehenga',
    desc: 'Floral embroidery on net',
  },
  {
    id: 6,
    category: 'Indo-Western',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Chic Co-ord Set',
    desc: 'Perfect for Haldi functions',
  },
  {
    id: 7,
    category: 'Sarees',
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Designer Ruffle Saree',
    desc: 'Pre-stitched for easy wear',
  },
  {
    id: 8,
    category: 'Blouses',
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Velvet Winter Blouse',
    desc: 'Full sleeves with intricate cuffs',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* --- HEADER SECTION (Matches About Page) --- */}
        <section className="relative h-[400px] bg-luxury-maroon text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                Design Gallery
              </h1>
              <p className="text-xl text-white/90">
                Explore our portfolio of bespoke creations and find inspiration for your next outfit.
              </p>
            </div>
          </div>
        </section>

        {/* --- FILTER & GRID SECTION --- */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-luxury-maroon text-white border-luxury-maroon'
                      : 'bg-white text-luxury-maroon border-luxury-maroon/20 hover:border-luxury-maroon hover:bg-luxury-cream'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[3/4]"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content (Visible on Hover) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 text-white">
                    <span className="text-xs font-bold tracking-widest uppercase text-luxury-gold mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center text-luxury-gold text-sm font-medium">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>

                  {/* Icon Top Right */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-2 rounded-full text-luxury-maroon">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Check */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                No designs found in this category.
              </div>
            )}
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 bg-luxury-cream text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-6">
              Inspired by what you see?
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Bring us a picture or choose a design from our gallery, and we will tailor it to your perfect fit.
            </p>
            <Link href="/consult">
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-10 h-12 text-lg">
                Book A Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}