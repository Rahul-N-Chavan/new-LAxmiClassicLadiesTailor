'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'Thank you for booking a consultation! We will contact you shortly to confirm your appointment.'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      serviceType: '',
      budget: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[400px] bg-luxury-maroon text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                Book A Consultation
              </h1>
              <p className="text-xl text-white/90">
                Let's bring your fashion vision to life together
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-luxury-maroon mb-6">
                  Schedule Your Appointment
                </h2>
                <p className="text-luxury-maroon/70 mb-8">
                  Fill out the form below and our expert stylists will get in touch with you
                  to confirm your consultation appointment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                        <User className="h-4 w-4 mr-2 text-luxury-gold" />
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                        <Mail className="h-4 w-4 mr-2 text-luxury-gold" />
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

                  <div>
                    <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                      <Phone className="h-4 w-4 mr-2 text-luxury-gold" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 00000 00000"
                      className="border-luxury-maroon/30 focus:border-luxury-gold"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                        <Calendar className="h-4 w-4 mr-2 text-luxury-gold" />
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="border-luxury-maroon/30 focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                        <Clock className="h-4 w-4 mr-2 text-luxury-gold" />
                        Preferred Time *
                      </label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => handleSelectChange('time', value)}
                        required
                      >
                        <SelectTrigger className="border-luxury-maroon/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00-11:00">10:00 AM - 11:00 AM</SelectItem>
                          <SelectItem value="11:00-12:00">11:00 AM - 12:00 PM</SelectItem>
                          <SelectItem value="12:00-13:00">12:00 PM - 1:00 PM</SelectItem>
                          <SelectItem value="14:00-15:00">2:00 PM - 3:00 PM</SelectItem>
                          <SelectItem value="15:00-16:00">3:00 PM - 4:00 PM</SelectItem>
                          <SelectItem value="16:00-17:00">4:00 PM - 5:00 PM</SelectItem>
                          <SelectItem value="17:00-18:00">5:00 PM - 6:00 PM</SelectItem>
                          <SelectItem value="18:00-19:00">6:00 PM - 7:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-luxury-maroon mb-2 block">
                        Service Type *
                      </label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleSelectChange('serviceType', value)}
                        required
                      >
                        <SelectTrigger className="border-luxury-maroon/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ethnic-wear">Ethnic Wear</SelectItem>
                          <SelectItem value="saree-blouse">Saree & Blouse</SelectItem>
                          <SelectItem value="lehenga">Lehenga</SelectItem>
                          <SelectItem value="indo-western">Indo-Western</SelectItem>
                          <SelectItem value="bridal">Bridal Wear</SelectItem>
                          <SelectItem value="wedding-trousseau">
                            Complete Wedding Trousseau
                          </SelectItem>
                          <SelectItem value="alterations">Alterations</SelectItem>
                          <SelectItem value="upcycling">Upcycling Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-luxury-maroon mb-2 block">
                        Budget Range
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange('budget', value)}
                      >
                        <SelectTrigger className="border-luxury-maroon/30 focus:border-luxury-gold">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-luxury-maroon mb-2">
                      <MessageSquare className="h-4 w-4 mr-2 text-luxury-gold" />
                      Additional Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, design preferences, or any specific ideas you have in mind..."
                      rows={5}
                      className="border-luxury-maroon/30 focus:border-luxury-gold"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium w-full md:w-auto"
                  >
                    Book Consultation
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-luxury-cream p-8 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-luxury-maroon mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-4 text-luxury-maroon/70 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold mr-3 flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>
                        One-on-one consultation with our expert stylist (30-45 minutes)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold mr-3 flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>
                        Discussion of your design ideas, preferences, and budget
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold mr-3 flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Fabric selection guidance from our premium collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold mr-3 flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Precise body measurements taken by professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold mr-3 flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <span>Detailed quotation and timeline discussion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-luxury-maroon text-white p-8 rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    Consultation is FREE!
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Our styling consultation is completely free with no obligation to order. We
                    believe in building relationships and helping you make informed decisions.
                  </p>
                  <p className="text-white/90 text-sm">
                    Walk-ins are welcome, but appointments are recommended to ensure dedicated
                    time with our stylists.
                  </p>
                </div>

                <div className="bg-white border-2 border-luxury-gold p-8 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-luxury-maroon mb-4">
                    Need Help?
                  </h3>
                  <p className="text-luxury-maroon/70 text-sm mb-4">
                    Call us directly to book your appointment or if you have any questions.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center text-luxury-gold hover:text-luxury-gold/80 font-medium"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      +91 98765 43210
                    </a>
                    <a
                      href="mailto:info@laxmiclassic.com"
                      className="flex items-center text-luxury-gold hover:text-luxury-gold/80 font-medium"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      info@laxmiclassic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
