import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: "EcoTech Solutions Rebrand",
    category: "Brand Strategy",
    description: "Complete digital transformation and brand strategy for a leading sustainability tech company.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e5f3ff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#2563eb" font-family="Arial, sans-serif" font-size="18">EcoTech Project</text></svg>')}`,
    technologies: ["Brand Strategy", "UI/UX Design", "Web Development"]
  },
  {
    id: 2,
    title: "Coastal Resort Digital Experience",
    category: "Web Development",
    description: "Luxury resort booking platform with immersive user experience and seamless booking flow.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f9ff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#0ea5e9" font-family="Arial, sans-serif" font-size="18">Resort Platform</text></svg>')}`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "FinTech Mobile App Strategy",
    category: "Digital Strategy",
    description: "Strategic planning and UX design for a revolutionary mobile banking application.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#059669" font-family="Arial, sans-serif" font-size="18">FinTech App</text></svg>')}`,
    technologies: ["Mobile UX", "Strategy", "Figma"]
  }
];

const personalProjects = [
  {
    id: 1,
    title: "Mombasa Creative Hub",
    description: "Community platform connecting local artists and creatives in Mombasa.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef3e2"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#d97706" font-family="Arial, sans-serif" font-size="14">Creative Hub</text></svg>')}`,
    link: "#"
  },
  {
    id: 2,
    title: "Swahili Design System",
    description: "Open-source design system inspired by East African culture and aesthetics.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fdf2f8"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#be185d" font-family="Arial, sans-serif" font-size="14">Design System</text></svg>')}`,
    link: "#"
  },
  {
    id: 3,
    title: "Ocean Conservation Blog",
    description: "Personal blog documenting marine conservation efforts along the Kenyan coast.",
    image: `data:image/svg+xml;base64,${btoa('<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#047857" font-family="Arial, sans-serif" font-size="14">Conservation Blog</text></svg>')}`,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Work */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my most impactful client projects showcasing strategic thinking and creative execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passion projects that reflect my interests in community building, design systems, and conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}