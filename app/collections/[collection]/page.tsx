import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function generateStaticParams() {
  return [
    { collection: 'top-picks-for-you' },
    { collection: 'punjabi-style' },
    { collection: 'velvet-collection' },
    { collection: 'custom-design-gallery' },
  ];
}

const collectionData: Record<string, { name: string; description: string; items: Array<{ name: string; image: string; price: string }> }> = {
  'top-picks-for-you': {
    name: 'Top Picks For You',
    description: 'Our most popular and bestselling designs',
    items: [
      {
        name: 'Designer Anarkali',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹8,999',
      },
      {
        name: 'Silk Saree',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹12,999',
      },
      {
        name: 'Bridal Lehenga',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹45,999',
      },
      {
        name: 'Indo-Western Gown',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹15,999',
      },
      {
        name: 'Palazzo Suit',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹7,499',
      },
      {
        name: 'Velvet Sharara',
        image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹18,999',
      },
      {
        name: 'Custom Blouse',
        image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹3,499',
      },
      {
        name: 'Festive Lehenga',
        image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹22,999',
      },
    ],
  },
  'punjabi-style': {
    name: 'Punjabi Style',
    description: 'Vibrant traditional Punjabi wear collection',
    items: [
      {
        name: 'Traditional Punjabi Suit',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹6,999',
      },
      {
        name: 'Embroidered Dupatta',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹4,999',
      },
      {
        name: 'Festive Punjabi Set',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹9,999',
      },
      {
        name: 'Bangles & Kadas',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹2,999',
      },
    ],
  },
  'velvet-collection': {
    name: 'Velvet Collection',
    description: 'Luxurious velvet designs for winter and special occasions',
    items: [
      {
        name: 'Velvet Sharara',
        image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹18,999',
      },
      {
        name: 'Velvet Lehenga',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹28,999',
      },
      {
        name: 'Velvet Suit',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹14,999',
      },
      {
        name: 'Velvet Gown',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹19,999',
      },
      {
        name: 'Velvet Cape Set',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹16,999',
      },
      {
        name: 'Velvet Blouse',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹5,999',
      },
    ],
  },
  'custom-design-gallery': {
    name: 'Custom Design Gallery',
    description: 'Browse our portfolio of bespoke creations for inspiration',
    items: [
      {
        name: 'Bridal Masterpiece',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
      {
        name: 'Contemporary Fusion',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
      {
        name: 'Heritage Collection',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
      {
        name: 'Minimalist Elegance',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
      {
        name: 'Artistic Expression',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
      {
        name: 'Modern Twist',
        image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 'Custom',
      },
    ],
  },
};

export default function CollectionPage({
  params,
}: {
  params: { collection: string };
}) {
  const collection = collectionData[params.collection] || collectionData['top-picks-for-you'];

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[300px] bg-luxury-maroon text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                {collection.name}
              </h1>
              <p className="text-xl text-white/90">
                {collection.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-luxury-gold hover:text-white">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-luxury-maroon mb-2 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-luxury-gold font-bold text-lg mb-3">
                      {item.price}
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
          </div>
        </section>

        <section className="py-20 bg-luxury-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-6">
              Find Your Perfect Style
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Our expert stylists are ready to help you customize any design from this collection
            </p>
            <Link href="/consult">
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-8">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
