export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
              {/* Placeholder for Margaret's photo - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Margaret Ketter</p>
                  <p className="text-gray-500 text-sm">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I&apos;m Margaret Ketter, a passionate Creative Strategist based in the vibrant coastal city of 
                Mombasa, Kenya. With over 5 years of experience in digital strategy and creative solutions, 
                I bridge the gap between innovative thinking and practical implementation.
              </p>
              <p>
                My approach combines strategic insight with creative flair, helping businesses tell their 
                stories through compelling digital experiences. I specialize in brand strategy, digital 
                marketing, web development, and user experience design.
              </p>
              <p>
                When I&apos;m not crafting strategies or designing solutions, you can find me exploring the 
                beautiful Kenyan coast, experimenting with new technologies, or mentoring aspiring 
                creatives in my community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}