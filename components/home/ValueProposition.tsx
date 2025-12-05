import { Scissors, Palette, Award, Sparkles, Recycle } from 'lucide-react';

const values = [
  {
    icon: Scissors,
    title: 'Tailored to Perfection',
    description: 'Expert craftsmanship ensuring the perfect fit for every body type',
  },
  {
    icon: Palette,
    title: 'Unlimited Design Possibilities',
    description: 'Bring your unique vision to life with our custom design services',
  },
  {
    icon: Award,
    title: 'Premium Quality Craftsmanship',
    description: 'Finest fabrics and meticulous attention to detail in every stitch',
  },
  {
    icon: Sparkles,
    title: 'Personalized Styling Assistance',
    description: 'One-on-one consultation with our expert fashion stylists',
  },
  {
    icon: Recycle,
    title: 'Upcycling & Best Out of Waste',
    description: 'Transform your old garments into stunning new creations',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            Why Choose Laxmi Classic
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
            Experience the difference of true custom tailoring with our signature services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-3">
                  {value.title}
                </h3>
                <p className="text-luxury-maroon/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
