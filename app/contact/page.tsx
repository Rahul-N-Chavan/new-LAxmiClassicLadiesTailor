'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                Get In Touch
              </h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-luxury-maroon mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-maroon mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-maroon mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-maroon mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-maroon mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-luxury-maroon mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your requirements..."
                      rows={6}
                      className="border-luxury-maroon/30 focus:border-luxury-gold"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-luxury-maroon mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-maroon mb-1">
                          Visit Our Store
                        </h4>
                        <p className="text-luxury-maroon/70 text-sm">
                          123 Fashion Street, Mumbai,
                          <br />
                          Maharashtra - 400001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-maroon mb-1">
                          Call Us
                        </h4>
                        <p className="text-luxury-maroon/70 text-sm">
                          +91 98765 43210
                          <br />
                          +91 98765 43211
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-maroon mb-1">
                          Email Us
                        </h4>
                        <p className="text-luxury-maroon/70 text-sm">
                          info@laxmiclassic.com
                          <br />
                          support@laxmiclassic.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-luxury-gold/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-luxury-maroon mb-1">
                          Business Hours
                        </h4>
                        <p className="text-luxury-maroon/70 text-sm">
                          Monday - Saturday: 10:00 AM - 8:00 PM
                          <br />
                          Sunday: 11:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-luxury-cream p-6 rounded-lg">
                  <h4 className="font-serif text-lg font-bold text-luxury-maroon mb-3">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-luxury-maroon/70 text-sm mb-4">
                    Book a consultation with our expert stylists to discuss your requirements
                    in person.
                  </p>
                  <Button
                    className="w-full bg-luxury-maroon hover:bg-luxury-maroon/90 text-white"
                    onClick={() => (window.location.href = '/consult')}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[400px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8756502892494!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
