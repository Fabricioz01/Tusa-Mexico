import Navbar from '@/components/layout/Navbar';
import HeroVideo from '@/components/hero/HeroVideo';
import FeaturedProducts from '@/components/catalog/FeaturedProducts';
import ProductCatalog from '@/components/catalog/ProductCatalog';
import DealerLocator from '@/components/dealers/DealerLocator';
import ProCommunity from '@/components/pro/ProCommunity';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroVideo />
      <FeaturedProducts />
      <ProductCatalog />
      <DealerLocator />
      <ProCommunity />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
