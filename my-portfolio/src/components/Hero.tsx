'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const titles = ["Full Stack Developer", "Creative Strategist", "Consultant"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12 relative">
          {/* Floating background elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-pink-500/10 rounded-full animate-float animation-delay-200"></div>
          <div className="absolute top-20 right-10 w-16 h-16 bg-pink-400/10 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-10 left-20 w-12 h-12 bg-pink-300/10 rounded-full animate-float animation-delay-800"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
            <span className="inline-block animate-scale-in animation-delay-100">Margaret</span>{' '}
            <span className="inline-block animate-scale-in animation-delay-300 text-pink-400">Ketter</span>
          </h1>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-200">
            <a href="https://x.com/hash_haven009?t=sigxVViQbIRjXuzUoetkXw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110" title="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/margaret-ketter-083b79354" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110" title="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Marg-Rae" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110" title="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.fiverr.com/s/dDq3lmY" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110" title="Fiverr">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.947 18.678c-1.75 0-3.176-1.426-3.176-3.176s1.426-3.176 3.176-3.176 3.176 1.426 3.176 3.176-1.426 3.176-3.176 3.176zM8.293 8.678c-1.75 0-3.176-1.426-3.176-3.176s1.426-3.176 3.176-3.176 3.176 1.426 3.176 3.176-1.426 3.176-3.176 3.176zM18.621 8.678c-1.75 0-3.176-1.426-3.176-3.176s1.426-3.176 3.176-3.176 3.176 1.426 3.176 3.176-1.426 3.176-3.176 3.176z"/>
              </svg>
            </a>
            <a href="https://www.upwork.com/freelancers/~01e69c4594494a9e9c?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110" title="Upwork">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.006-2.439-5.458-5.439-5.458z"/>
              </svg>
            </a>
          </div>

          <div className="max-w-3xl mx-auto mb-8 animate-slide-in-up animation-delay-600">
            <h2 className="text-2xl md:text-3xl text-pink-400 mb-4 min-h-[2.5rem] flex items-center justify-center animate-pulse-glow">
              <span className="transition-all duration-500 ease-in-out">
                {titles[currentTitleIndex]}
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-700">
              Based in Kenya
            </p>
            <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up animation-delay-800">
              I build complete web applications from frontend to backend, combining strategic thinking 
              with modern technologies like React, Next.js, Node.js, and MongoDB to create scalable digital solutions.
            </p>
          </div>

          <Link
            href="#about"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover-lift animate-bounce-in animation-delay-900"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}