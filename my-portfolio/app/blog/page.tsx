import Navigation from '@/components/Navigation';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights on digital strategy, creative process, and the intersection of technology and culture.
            </p>
          </div>
        </div>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}