import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const gallery = [
  {
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Bridal Lehenga',
  },
  {
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Silk Saree Blouse',
  },
  {
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Festive Wear',
  },
  {
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Wedding Collection',
  },
  {
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Anarkali Suits',
  },
  {
    image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Indo-Western',
  },
  {
    image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Custom Designs',
  },
  {
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Bridal Wear',
  },
];

export default function DesignerGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            Our Custom Design Gallery
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
            Get inspired by our portfolio of custom creations crafted for our valued clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-luxury-maroon/0 group-hover:bg-luxury-maroon/40 transition-all" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-6 w-6 text-white mb-2" />
                <h3 className="text-white font-medium text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections/custom-gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
