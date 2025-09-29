import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}