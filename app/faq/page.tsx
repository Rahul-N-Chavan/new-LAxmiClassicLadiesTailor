import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What services does Laxmi Classic Ladies Tailor offer?',
        a: 'We specialize in custom tailoring for ethnic wear, sarees, blouses, lehengas, indo-western outfits, and complete wedding trousseau. We also offer alteration, upcycling, and styling consultation services.',
      },
      {
        q: 'Do you offer ready-to-wear garments?',
        a: 'While we primarily focus on custom tailoring, we do have a curated collection of ready-to-stitch designs that can be customized according to your measurements and preferences.',
      },
      {
        q: 'Where is your store located?',
        a: 'We are located at 123 Fashion Street, Mumbai, Maharashtra - 400001. You can visit us during our business hours: Monday to Saturday (10 AM - 8 PM) and Sunday (11 AM - 6 PM).',
      },
    ],
  },
  {
    category: 'Customization & Design',
    questions: [
      {
        q: 'Can I bring my own design or reference images?',
        a: 'Absolutely! We encourage you to bring reference images, Pinterest boards, or any design inspirations. Our expert team will work with you to create a piece that matches your vision.',
      },
      {
        q: 'Can I provide my own fabric?',
        a: 'Yes, you can bring your own fabric. However, we also have an extensive collection of premium fabrics that you can choose from. Our stylists can guide you in selecting the best fabric for your design.',
      },
      {
        q: 'What if I want to modify a traditional design?',
        a: 'We specialize in contemporary interpretations of traditional designs. Share your ideas with us, and we will help you create a unique piece that blends tradition with modern aesthetics.',
      },
      {
        q: 'Do you offer upcycling services?',
        a: 'Yes! We can transform your old sarees, lehengas, or other garments into stunning new pieces. This is a sustainable and cost-effective way to refresh your wardrobe.',
      },
    ],
  },
  {
    category: 'Measurements & Fitting',
    questions: [
      {
        q: 'How are measurements taken?',
        a: 'Our trained professionals take precise measurements during your consultation appointment. We take multiple measurements to ensure the perfect fit. For bridal wear, we recommend 2-3 fittings.',
      },
      {
        q: 'What if my measurements change before the final delivery?',
        a: 'We schedule fitting appointments during the production process. If there are significant changes, we can make adjustments. Please inform us as soon as possible for best results.',
      },
      {
        q: 'Do you offer alterations after delivery?',
        a: 'Yes, we provide complimentary minor alterations within 15 days of delivery. Major alterations or changes after this period may incur additional charges.',
      },
    ],
  },
  {
    category: 'Timeline & Pricing',
    questions: [
      {
        q: 'How long does it take to complete an order?',
        a: 'Standard orders typically take 2-3 weeks. Bridal and heavy embroidery work may take 4-6 weeks. Rush orders can be accommodated with additional charges. We will provide a precise timeline during consultation.',
      },
      {
        q: 'What is your pricing structure?',
        a: 'Pricing depends on the design complexity, fabric choice, and embellishment work. We provide a detailed quotation after understanding your requirements. We offer transparent pricing with no hidden charges.',
      },
      {
        q: 'Do you require advance payment?',
        a: 'We require 50% advance payment to confirm your order and begin work. The remaining balance is due at the time of final delivery.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, UPI, credit/debit cards, and online bank transfers. All transactions are documented with proper receipts.',
      },
    ],
  },
  {
    category: 'Wedding & Bridal Services',
    questions: [
      {
        q: 'How far in advance should I book for bridal wear?',
        a: 'We recommend booking at least 3-4 months before your wedding date. This allows ample time for design consultation, multiple fittings, and any necessary adjustments.',
      },
      {
        q: 'Do you create complete bridal trousseau?',
        a: 'Yes! We can create your entire wedding wardrobe including engagement, mehendi, sangeet, wedding, and reception outfits. We offer package deals for complete trousseau orders.',
      },
      {
        q: 'Can you match outfits with my wedding theme or color scheme?',
        a: 'Absolutely! Our stylists work closely with you to ensure your outfits complement your wedding theme, venue, and overall aesthetic.',
      },
    ],
  },
];

export default function FAQPage() {
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-luxury-maroon mb-6 flex items-center">
                  <HelpCircle className="h-8 w-8 text-luxury-gold mr-3" />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border border-luxury-maroon/20 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-luxury-maroon hover:text-luxury-gold">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-luxury-maroon/70 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-luxury-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-luxury-maroon mb-4">
              Still Have Questions?
            </h2>
            <p className="text-luxury-maroon/70 text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help. Get in touch with us or schedule a consultation to
              discuss your requirements in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-luxury-maroon text-luxury-maroon hover:bg-luxury-maroon hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/consult">
                <Button
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
                >
                  Book a Consultation
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
