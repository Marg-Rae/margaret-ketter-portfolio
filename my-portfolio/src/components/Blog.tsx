'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Blog Image Component with fallback
function BlogImage({ src, alt, fallbackColor, fallbackTextColor, category }: {
  src: string;
  alt: string;
  fallbackColor: string;
  fallbackTextColor: string;
  category: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div 
        className="w-full h-full flex items-center justify-center text-center"
        style={{ backgroundColor: fallbackColor }}
      >
        <div>
          <div className="text-3xl mb-2">📝</div>
          <div 
            className="text-sm font-semibold"
            style={{ color: fallbackTextColor }}
          >
            {category}
          </div>
          <div 
            className="text-xs mt-1 opacity-75"
            style={{ color: fallbackTextColor }}
          >
            Blog Post
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() => setImageError(true)}
      unoptimized={true}
    />
  );
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Strategy in East Africa",
    excerpt: "Exploring emerging trends and opportunities in the rapidly evolving digital landscape of East Africa.",
    category: "Strategy",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/digital-strategy-africa.jpg",
    fallbackColor: "#e0f2fe",
    fallbackTextColor: "#0284c7",
    slug: "future-digital-strategy-east-africa"
  },
  {
    id: 2,
    title: "Designing for Cultural Context: Lessons from Kenya",
    excerpt: "How local culture and context should influence digital design decisions for better user experiences.",
    category: "Design",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/images/blog/cultural-design-kenya.jpg",
    fallbackColor: "#f3e8ff",
    fallbackTextColor: "#9333ea",
    slug: "designing-cultural-context-kenya"
  },
  {
    id: 3,
    title: "Building Sustainable Creative Communities",
    excerpt: "A guide to fostering and maintaining creative communities that support local talent and innovation.",
    category: "Community",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/creative-communities.jpg",
    fallbackColor: "#f0f9ff",
    fallbackTextColor: "#1d4ed8",
    slug: "building-sustainable-creative-communities"
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights on digital strategy, creative process, and the intersection of technology and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-700">
              <div className="relative h-48">
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  fallbackColor={post.fallbackColor}
                  fallbackTextColor={post.fallbackTextColor}
                  category={post.category}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-pink-500/20 text-pink-400 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-pink-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-pink-400 hover:text-pink-300 font-semibold text-sm flex items-center"
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
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}