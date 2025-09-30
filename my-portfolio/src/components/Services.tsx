const services = [
  {
    title: "Brand Strategy",
    description: "Comprehensive brand strategy development including positioning, messaging, and visual identity guidelines.",
    features: [
      "Brand positioning & messaging",
      "Visual identity design",
      "Brand guidelines",
      "Market research & analysis"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Digital Strategy",
    description: "Strategic digital transformation planning to help your business thrive in the digital landscape.",
    features: [
      "Digital transformation roadmap",
      "User experience strategy",
      "Technology consultation",
      "Performance optimization"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "CMS integration",
      "Mobile responsiveness"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "UX/UI Design",
    description: "User-centered design solutions that prioritize usability, accessibility, and beautiful aesthetics.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Interface design",
      "Usability testing"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    title: "Creative Consultation",
    description: "Strategic creative guidance for projects, teams, and organizations looking to innovate.",
    features: [
      "Creative workshops",
      "Team training",
      "Project consultation",
      "Innovation strategy"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Content Strategy",
    description: "Strategic content planning and creation to engage your audience and drive business goals.",
    features: [
      "Content strategy planning",
      "Editorial calendar creation",
      "Content creation",
      "Performance analytics"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive creative and strategic services to help your business succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-gray-900 p-8 rounded-xl hover:bg-gray-800 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${(index % 3) * 200}`}>
              <div className="text-pink-400 mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 hover:text-pink-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900 p-8 rounded-2xl border border-pink-500/20 animate-fade-in-up animation-delay-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Let&apos;s discuss how I can help bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}