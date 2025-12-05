import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instagramPosts = [
  'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4">
            <Instagram className="h-8 w-8 text-luxury-gold" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto mb-6">
            Stay updated with our latest designs, style tips, and behind-the-scenes content
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium">
              <Instagram className="h-5 w-5 mr-2" />
              @laxmiclassic
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${post})` }}
              >
                <div className="absolute inset-0 bg-luxury-maroon/0 group-hover:bg-luxury-maroon/40 transition-all" />
              </div>
              <div className="relative h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
