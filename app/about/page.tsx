import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Sparkles, Users, Recycle, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[400px] bg-luxury-maroon text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl text-white/90">
                Crafting dreams into reality, one stitch at a time
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-6">
                  About Laxmi Classic Ladies Tailor
                </h2>
                <div className="space-y-4 text-luxury-maroon/80 leading-relaxed">
                  <p>
                    Founded with a passion for exceptional craftsmanship and an eye for detail,
                    Laxmi Classic Ladies Tailor has been serving discerning clients for over two
                    decades. We believe that every woman deserves to wear clothes that not only fit
                    perfectly but also reflect her unique personality and style.
                  </p>
                  <p>
                    Our journey began with a simple mission: to provide the finest custom tailoring
                    services that combine traditional techniques with contemporary designs. Today, we
                    are proud to be one of the most trusted names in ladies tailoring, known for our
                    commitment to quality, precision, and customer satisfaction.
                  </p>
                  <p>
                    From everyday ethnic wear to elaborate bridal trousseau, we specialize in creating
                    garments that make you look and feel extraordinary. Every piece that leaves our
                    atelier is a testament to our dedication to the art of tailoring.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div
                  className="aspect-[4/5] rounded-lg bg-cover bg-center shadow-2xl"
                  style={{
                    backgroundImage:
                      'url(https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=800)',
                  }}
                />
                <div className="absolute -bottom-6 -left-6 bg-luxury-gold text-white p-8 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold font-serif">20+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxury-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
                Our commitment to excellence is reflected in everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <Award className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Expert Craftsmanship
                </h3>
                <p className="text-luxury-maroon/70">
                  Our team of skilled artisans brings years of experience and passion to every
                  project, ensuring impeccable quality in every stitch.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <Heart className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Personalized Service
                </h3>
                <p className="text-luxury-maroon/70">
                  We take the time to understand your vision, preferences, and requirements to
                  create garments that are uniquely yours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <Sparkles className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Premium Materials
                </h3>
                <p className="text-luxury-maroon/70">
                  We source only the finest fabrics and materials to ensure your garments look
                  stunning and stand the test of time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <Users className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Style Consultation
                </h3>
                <p className="text-luxury-maroon/70">
                  Our expert stylists guide you through design choices, helping you create outfits
                  that complement your style and body type.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <Recycle className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Upcycling Service
                </h3>
                <p className="text-luxury-maroon/70">
                  Transform your old or outdated garments into fresh, contemporary pieces with our
                  innovative upcycling and alteration services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <Clock className="h-12 w-12 text-luxury-gold mb-4" />
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  Timely Delivery
                </h3>
                <p className="text-luxury-maroon/70">
                  We understand the importance of deadlines and ensure your garments are ready when
                  you need them, without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-luxury-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Create Your Perfect Outfit?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert stylists and let us bring your fashion vision to
              life
            </p>
            <Link href="/consult">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-8"
              >
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
