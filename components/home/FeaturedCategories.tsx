import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Ethnic Wear',
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/ethnic-wear',
  },
  {
    name: 'Sarees',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/sarees',
  },
  {
    name: 'Blouses',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/blouses',
  },
  {
    name: 'Indo-Western',
    image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/indo-western',
  },
  {
    name: 'Lehengas',
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/lehengas',
  },
  {
    name: 'Wedding',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categories/wedding-tailoring',
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            Explore Our Collections
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
            Discover premium tailoring across a wide range of ethnic and contemporary styles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-maroon/80 to-luxury-maroon/20 group-hover:from-luxury-maroon/90 transition-all" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-end p-6">
                <Sparkles className="h-6 w-6 text-luxury-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-serif text-2xl font-bold text-white text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
