import Navigation from '@/components/Navigation';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}