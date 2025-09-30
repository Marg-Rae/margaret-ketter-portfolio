'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
      </svg>
    ),
    color: 'text-blue-400'
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.84 4.67l8.25 14.3a7.233 7.233 0 01-7.41-14.3z"/>
      </svg>
    ),
    color: 'text-white'
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125z"/>
      </svg>
    ),
    color: 'text-blue-600'
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
      </svg>
    ),
    color: 'text-green-600'
  },
  {
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184C10.616 2.087 7.628 3.921 6.364 9.501c-.873 3.846 2.132 7.988 5.636 7.988 3.504 0 6.509-4.142 5.636-7.988z"/>
      </svg>
    ),
    color: 'text-green-500'
  },
  {
    name: 'Prisma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.2034-1.1908.6081L3.9034 18.7029c-.2207.3748-.2207.8429 0 1.2177.2207.3748.6283.6081 1.0794.6081H20.727c.4511 0 .8587-.2333 1.0794-.6081.2207-.3748.2207-.8429 0-1.2177z"/>
      </svg>
    ),
    color: 'text-indigo-500'
  },
  {
    name: 'API Development',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0l8 4v8l-8 4-8-4V4l8-4zm6.5 6L12 8.5 5.5 6 12 3.5 18.5 6zM4 7.5v7L12 18l8-3.5v-7L12 11 4 7.5z"/>
      </svg>
    ),
    color: 'text-orange-500'
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    color: 'text-cyan-400'
  },
  {
    name: 'Email Integration',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    color: 'text-purple-500'
  },
  {
    name: 'Full-Stack',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: 'text-yellow-400'
  }
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Full-Stack Technologies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I build complete web applications from frontend to backend, databases, and deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/20 animate-fade-in-up animation-delay-${(index % 5) * 100}`}
            >
              <div className={`${skill.color} mb-3 transition-all duration-300 group-hover:scale-110 animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-white text-center group-hover:text-pink-400 transition-colors">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Full-Stack Skills Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up animation-delay-600">
            <div className="bg-pink-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-pink-600 transition-colors">
              <svg className="w-8 h-8 text-pink-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
            <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS, responsive design, performance optimization</p>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-700">
            <div className="bg-pink-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-pink-600 transition-colors">
              <svg className="w-8 h-8 text-pink-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend & Database</h3>
            <p className="text-gray-300">Node.js, API development, MongoDB, Prisma ORM, database design, email integration</p>
          </div>

          <div className="text-center animate-fade-in-up animation-delay-800">
            <div className="bg-pink-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-pink-600 transition-colors">
              <svg className="w-8 h-8 text-pink-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Deployment & Tools</h3>
            <p className="text-gray-300">Vercel deployment, Git/GitHub, CI/CD, project management, creative strategy</p>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Full-Stack Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Frontend UI/UX</h4>
              <p className="text-gray-300 text-sm">Responsive React components with modern design</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">API Layer</h4>
              <p className="text-gray-300 text-sm">RESTful APIs with Next.js API routes</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Database</h4>
              <p className="text-gray-300 text-sm">MongoDB with Prisma ORM for data management</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Deployment</h4>
              <p className="text-gray-300 text-sm">Seamless deployment with Vercel and Git workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}