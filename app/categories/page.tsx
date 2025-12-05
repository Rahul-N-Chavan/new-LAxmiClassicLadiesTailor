import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Ethnic Wear',
    description: 'Suit Sets, Sharara Sets, Anarkali Suits, and more',
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sarees',
    description: 'Organza, Tissue, Satin, and Custom Embroidery',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Blouses',
    description: 'Bridal, Silk, Backless, and Ruffle designs',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Indo-Western',
    description: 'Co-ord Sets, Gowns, Jumpsuits, and more',
    image: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Lehengas',
    description: 'Ruffle, Festive, Georgette, and Designer pieces',
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Wedding Tailoring',
    description: 'Engagement, Mehendi, Shaadi, and Reception wear',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function CategoriesPage() {
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
                Our Categories
              </h1>
              <p className="text-xl text-white/90">
                Explore our curated collection of premium tailoring
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="group cursor-pointer">
                    <div
                      className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-luxury-maroon/0 group-hover:bg-luxury-maroon/40 transition-all" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-luxury-maroon mb-2 group-hover:text-luxury-gold transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-luxury-maroon/70 text-sm mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center text-luxury-gold font-medium group-hover:space-x-2 transition-all">
                      Explore <ArrowRight className="h-4 w-4 ml-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxury-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert stylists to discuss your custom tailoring needs
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
