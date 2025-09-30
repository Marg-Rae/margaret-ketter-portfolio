'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-1 lg:order-1 animate-fade-in-left">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-pink-500/20 hover:ring-pink-500/40 transition-all duration-500 bg-gray-800">
              {!imageError ? (
                <Image
                  src="/images/profile.jpg"
                  alt="Margaret Ketter - Full Stack Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                  unoptimized={true}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-gray-800">
                  <div>
                    <div className="w-32 h-32 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">Margaret Ketter</p>
                    <p className="text-gray-300 text-sm">Full Stack Developer</p>
                    <p className="text-pink-400 text-xs mt-2">Image failed to load</p>
                    <p className="text-gray-400 text-xs mt-1">Please check image file format</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* About Text */}
          <div className="order-2 lg:order-2">
            <h2 className="text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p className="animate-fade-in animation-delay-200">
                I&apos;m Margaret Ketter, a passionate Full Stack Developer from Kenya with 1+ year of experience building 
                end-to-end web applications. I specialize in React, Next.js, TypeScript, Node.js, and modern database technologies. 
                I transform ideas into scalable digital solutions, from responsive frontends to robust APIs and database integrations. 
                When I&apos;m not coding, I&apos;m exploring new technologies and mentoring aspiring developers in my community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors animate-counter">
                <div className="text-3xl font-bold text-pink-400">10+</div>
                <div className="text-gray-300">Full-Stack Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors animate-counter animation-delay-200">
                <div className="text-3xl font-bold text-pink-400">1+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}