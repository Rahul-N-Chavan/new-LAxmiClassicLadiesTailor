import Link from 'next/link';
import { Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  'Schedule a consultation with our expert stylists',
  'Choose your design, fabric, and customization options',
  'Get precise measurements taken by our professionals',
  'Receive your perfectly tailored outfit within the promised timeline',
];

export default function CustomizationSection() {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden aspect-video group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=1200)',
              }}
            >
              <div className="absolute inset-0 bg-luxury-maroon/40" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-luxury-gold transition-colors">
                <Play className="h-8 w-8 text-luxury-maroon group-hover:text-white ml-1" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon">
              Start Your Custom Design Journey
            </h2>
            <p className="text-luxury-maroon/70 text-lg leading-relaxed">
              Experience the art of bespoke tailoring with our comprehensive customization process.
              From initial consultation to final fitting, we ensure every detail is perfect.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-luxury-gold flex-shrink-0 mt-0.5" />
                  <p className="text-luxury-maroon/80">{step}</p>
                </div>
              ))}
            </div>

            <Link href="/consult">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium px-8"
              >
                Book Your Consultation Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
