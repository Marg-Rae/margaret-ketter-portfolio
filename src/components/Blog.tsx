import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Strategy in East Africa",
    excerpt: "Exploring emerging trends and opportunities in the rapidly evolving digital landscape of East Africa.",
    category: "Strategy",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e0f2fe"/><text x="50%" y="40%" text-anchor="middle" dy=".3em" fill="#0284c7" font-family="Arial, sans-serif" font-size="14">Digital Strategy</text><text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="#0284c7" font-family="Arial, sans-serif" font-size="12">East Africa</text></svg>')}`,
    slug: "future-digital-strategy-east-africa"
  },
  {
    id: 2,
    title: "Designing for Cultural Context: Lessons from Mombasa",
    excerpt: "How local culture and context should influence digital design decisions for better user experiences.",
    category: "Design",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3e8ff"/><text x="50%" y="40%" text-anchor="middle" dy=".3em" fill="#9333ea" font-family="Arial, sans-serif" font-size="14">Cultural Design</text><text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="#9333ea" font-family="Arial, sans-serif" font-size="12">Mombasa</text></svg>')}`,
    slug: "designing-cultural-context-mombasa"
  },
  {
    id: 3,
    title: "Building Sustainable Creative Communities",
    excerpt: "A guide to fostering and maintaining creative communities that support local talent and innovation.",
    category: "Community",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f9ff"/><text x="50%" y="40%" text-anchor="middle" dy=".3em" fill="#1d4ed8" font-family="Arial, sans-serif" font-size="14">Creative</text><text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="#1d4ed8" font-family="Arial, sans-serif" font-size="12">Communities</text></svg>')}`,
    slug: "building-sustainable-creative-communities"
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights on digital strategy, creative process, and the intersection of technology and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}