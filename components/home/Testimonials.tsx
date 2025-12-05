'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    content:
      'Laxmi Classic created the most beautiful bridal lehenga for my wedding. The fit was perfect, and the attention to detail was exceptional. I felt like a princess on my special day!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Anjali Desai',
    role: 'Regular Customer',
    content:
      'I have been getting my outfits tailored here for over 5 years. The quality is consistently excellent, and they always understand exactly what I want. Highly recommend for custom ethnic wear!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Meera Patel',
    role: 'Fashion Designer',
    content:
      'The craftsmanship at Laxmi Classic is unparalleled. They transformed my old sarees into stunning contemporary pieces. Their upcycling service is a game-changer!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-4">
            What Our Clients Say
          </h2>
          <p className="text-luxury-maroon/70 text-lg max-w-2xl mx-auto">
            Read about the experiences of our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Quote className="h-10 w-10 text-luxury-gold mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-luxury-gold fill-luxury-gold"
                  />
                ))}
              </div>
              <p className="text-luxury-maroon/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <h4 className="font-semibold text-luxury-maroon">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-luxury-maroon/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
