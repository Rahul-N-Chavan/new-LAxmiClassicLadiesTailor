import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ValueProposition from '@/components/home/ValueProposition';
import ProductShowcase from '@/components/home/ProductShowcase';
import CustomizationSection from '@/components/home/CustomizationSection';
import DesignerGallery from '@/components/home/DesignerGallery';
import Testimonials from '@/components/home/Testimonials';
import InstagramFeed from '@/components/home/InstagramFeed';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <ValueProposition />
        <ProductShowcase />
        <CustomizationSection />
        <DesignerGallery />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
