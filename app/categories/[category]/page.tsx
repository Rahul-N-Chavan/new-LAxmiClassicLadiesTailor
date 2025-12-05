import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function generateStaticParams() {
  return [
    { category: 'ethnic-wear' },
    { category: 'sarees' },
    { category: 'blouses' },
    { category: 'indo-western' },
    { category: 'lehengas' },
    { category: 'wedding-tailoring' },
  ];
}

const categoryData: Record<string, { name: string; description: string; items: Array<{ name: string; image: string; price: string }> }> = {
  'ethnic-wear': {
    name: 'Ethnic Wear',
    description: 'Traditional ethnic wear with modern designs and perfect fit',
    items: [
      {
        name: 'Designer Suit Set',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹8,999',
      },
      {
        name: 'Sharara Collection',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹12,999',
      },
      {
        name: 'Anarkali Suit',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹9,999',
      },
      {
        name: 'Palazzo Suit',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹7,499',
      },
    ],
  },
  'sarees': {
    name: 'Sarees',
    description: 'Elegant sarees in various fabrics with custom blouses',
    items: [
      {
        name: 'Silk Saree',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹12,999',
      },
      {
        name: 'Organza Saree',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹10,999',
      },
      {
        name: 'Satin Saree',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹9,999',
      },
      {
        name: 'Custom Embroidery',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹18,999',
      },
    ],
  },
  'blouses': {
    name: 'Blouses',
    description: 'Stunning blouse designs to complement your sarees',
    items: [
      {
        name: 'Bridal Blouse',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹3,999',
      },
      {
        name: 'Silk Blouse',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹3,499',
      },
      {
        name: 'Backless Blouse',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹4,999',
      },
      {
        name: 'Ruffle Blouse',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹3,999',
      },
    ],
  },
  'indo-western': {
    name: 'Indo-Western',
    description: 'Contemporary fusion wear blending tradition with modern style',
    items: [
      {
        name: 'Co-ord Set',
        image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹12,999',
      },
      {
        name: 'Gown',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹15,999',
      },
      {
        name: 'Jumpsuit',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹13,999',
      },
      {
        name: 'Jacket Set',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹14,999',
      },
    ],
  },
  'lehengas': {
    name: 'Lehengas',
    description: 'Gorgeous lehengas for every occasion and celebration',
    items: [
      {
        name: 'Festive Lehenga',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹22,999',
      },
      {
        name: 'Bridal Lehenga',
        image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹45,999',
      },
      {
        name: 'Georgette Lehenga',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹18,999',
      },
      {
        name: 'Ruffle Lehenga',
        image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹24,999',
      },
    ],
  },
  'wedding-tailoring': {
    name: 'Wedding Tailoring',
    description: 'Complete bridal and wedding trousseau services',
    items: [
      {
        name: 'Bridal Ensemble',
        image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹75,000+',
      },
      {
        name: 'Mehendi Wear',
        image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹25,000+',
      },
      {
        name: 'Reception Outfit',
        image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹35,000+',
      },
      {
        name: 'Sangeet Wear',
        image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '₹22,000+',
      },
    ],
  },
};

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categoryData[params.category] || categoryData['ethnic-wear'];

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[300px] bg-luxury-maroon text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                {category.name}
              </h1>
              <p className="text-xl text-white/90">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, index) => (
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
                      Starting from {item.price}
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
              Ready to Order?
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a consultation to discuss your preferences and start customizing your perfect outfit
            </p>
            <Link href="/consult">
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-8">
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
