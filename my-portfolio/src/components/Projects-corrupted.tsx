'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Smart image component with fallback
function ProjectImage({ src, alt, fallbackColor, fallbackTextColor, title, className = "", fill, sizes }: {
  src: string;
  alt: string;
  fallbackColor: string;
  fallbackTextColor: string;
  title: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div 
        className={`w-full h-full flex items-center justify-center text-center ${className}`}
        style={{ backgroundColor: fallbackColor }}
      >
        <div>
          <div 
            className="text-lg font-semibold mb-2"
            style={{ color: fallbackTextColor }}
          >
            {title}
          </div>
          <div 
            className="text-sm opacity-75"
            style={{ color: fallbackTextColor }}
          >
            Add image to display
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setImageError(true)}
      unoptimized={true}
    />
  );
}

const featuredProjects = [
  {
    id: 1,
    title: "Task Manager App",
    category: "Full-Stack Application",
    description: "Complete CRUD application with local storage, task prioritization, and real-time statistics.",
    image: "/images/projects/task-manager.jpg",
    fallbackColor: "#e5f3ff",
    fallbackTextColor: "#2563eb",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Local Storage"],
    liveLink: "https://task-manager-app-marg-raes-projects.vercel.app", // Update this with your actual Vercel URL
    githubLink: "https://github.com/Marg-Rae/task-manager-app",
    role: "Solo Developer - Built complete application from design to deployment",
    duration: "2 weeks",
    keyFeatures: "Implemented priority-based task filtering and persistent data storage with real-time statistics"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    category: "API Integration",
    description: "Real-time weather application with location services and 5-day forecast functionality.",
    image: "/images/projects/weather-dashboard.jpg",
    fallbackColor: "#f0f9ff",
    fallbackTextColor: "#0ea5e9",
    technologies: ["Next.js", "React", "Geolocation API", "Tailwind CSS", "Responsive Design"],
    liveLink: "https://weather-dashboard-marg-raes-projects.vercel.app", // Update this with your actual Vercel URL
    githubLink: "https://github.com/Marg-Rae/weather-dashboard",
    role: "Frontend Developer - Designed UI/UX and integrated weather APIs",
    duration: "1.5 weeks",
    keyFeatures: "Solved geolocation permissions and API rate limiting with smart caching strategies"
  },
  {
    id: 3,
    title: "E-Commerce Showcase",
    category: "Interactive Frontend",
    description: "Product catalog with advanced filtering, search functionality, and shopping cart management.",
    image: "/images/projects/ecommerce-showcase.jpg",
    fallbackColor: "#f0fdf4",
    fallbackTextColor: "#059669",
    technologies: ["Next.js", "React", "TypeScript", "State Management", "Responsive Design"],
    liveLink: "https://ecommerce-showcase-marg-raes-projects.vercel.app", // Update this with your actual Vercel URL
    githubLink: "https://github.com/Marg-Rae/ecommerce-showcase",
    role: "Frontend Developer - Created complex state management and user interactions",
    duration: "2.5 weeks",
    keyFeatures: "Implemented real-time search/filtering and optimized performance for large product catalogs"
  }
];

const personalProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio with blog functionality and contact forms.",
    image: "/images/projects/portfolio-site.jpg",
    fallbackColor: "#fef3e2",
    fallbackTextColor: "#d97706",
    link: "https://margaret-ketter-portfolio.vercel.app",
    githubLink: "https://github.com/MARG-RAE/portfolio",
    tech: "Next.js, Prisma, MongoDB"
  },
  {
    id: 2,
    title: "Design System",
    description: "Component library with reusable UI elements and documentation.",
    image: "/images/projects/design-system.jpg",
    fallbackColor: "#fdf2f8",
    fallbackTextColor: "#be185d",
    link: "#",
    githubLink: "https://github.com/MARG-RAE/design-system",
    tech: "React, Storybook, CSS"
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Work */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Live applications you can test and interact with. Click to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-4 hover-lift animate-scale-in animation-delay-${(index + 1) * 200} group`}>
                <div className="relative h-64 overflow-hidden">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    fallbackColor={project.fallbackColor}
                    fallbackTextColor={project.fallbackTextColor}
                    fill={true}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors duration-200 hover-scale flex-1 flex items-center justify-center"
                        title="View Live Demo"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full transition-colors duration-200 hover-scale"
                        title="View Code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-pink-400 transition-colors duration-200">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="text-pink-400 font-semibold">Role: </span>
                      <span className="text-gray-300">{project.role}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-pink-400 font-semibold">Duration: </span>
                      <span className="text-gray-300">{project.duration}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-pink-400 font-semibold">Challenge: </span>
                      <span className="text-gray-300">{project.keyFeatures}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-semibold text-sm"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                      title="View Source Code"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">More Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Additional work showcasing different development skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div key={project.id} className={`bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="relative h-48 overflow-hidden">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    fallbackColor={project.fallbackColor}
                    fallbackTextColor={project.fallbackTextColor}
                    fill={true}
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-pink-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                  <p className="text-pink-400 text-sm mb-4"><strong>Tech:</strong> {project.tech}</p>
                  <div className="flex space-x-3">
                    <Link 
                      href={project.link}
                      className="flex-1 text-center bg-pink-600 hover:bg-pink-700 text-white py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-semibold"
                    >
                      View Project
                    </Link>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded-lg transition-colors duration-200"
                      title="View Source Code"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}