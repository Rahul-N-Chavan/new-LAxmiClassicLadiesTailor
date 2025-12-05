import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const collections = [
  {
    name: 'Top Picks For You',
    description: 'Explore our bestselling and most popular designs',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Punjabi Style',
    description: 'Vibrant and traditional Punjabi wear collection',
    image: 'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Velvet Collection',
    description: 'Luxurious velvet designs perfect for winter and special occasions',
    image: 'https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Custom Design Gallery',
    description: 'Browse our portfolio of custom creations',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function CollectionsPage() {
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
                Collections
              </h1>
              <p className="text-xl text-white/90">
                Discover our curated seasonal and special collections
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {collections.map((collection, index) => (
                <Link
                  key={index}
                  href={`/collections/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="group cursor-pointer">
                    <div
                      className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-cover bg-center"
                      style={{ backgroundImage: `url(${collection.image})` }}
                    >
                      <div className="absolute inset-0 bg-luxury-maroon/0 group-hover:bg-luxury-maroon/40 transition-all" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-luxury-maroon mb-3 group-hover:text-luxury-gold transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-luxury-maroon/70 text-lg mb-6">
                      {collection.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxury-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-6">
              Looking for Something Specific?
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Explore our full range of categories or book a consultation for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button
                  variant="outline"
                  className="border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
                >
                  Browse Categories
                </Button>
              </Link>
              <Link href="/consult">
                <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium">
                  Book A Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
