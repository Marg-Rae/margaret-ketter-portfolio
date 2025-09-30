const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "per project",
    description: "Perfect for small businesses and personal brands looking to establish their digital presence.",
    features: [
      "Professional landing page",
      "Responsive design (mobile-friendly)",
      "Contact form integration",
      "Basic SEO optimization",
      "Social media links",
      "Professional email setup",
      "1 round of revisions",
      "30 days support",
      "Domain setup assistance"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$299",
    period: "per project",
    description: "Ideal for growing businesses that need a comprehensive web presence.",
    features: [
      "Complete website (up to 5 pages)",
      "Custom design & branding",
      "Mobile responsive design",
      "Contact form & email integration",
      "SEO optimization",
      "Google Analytics setup",
      "Social media integration",
      "Blog setup (optional)",
      "2 rounds of revisions",
      "60 days support",
      "Content management training"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Premium",
    price: "$499",
    period: "per project",
    description: "For established businesses requiring advanced functionality and comprehensive solutions.",
    features: [
      "Full website (up to 10+ pages)",
      "Advanced custom design",
      "E-commerce integration (optional)",
      "Database integration",
      "Admin dashboard",
      "Advanced SEO & analytics",
      "Email marketing setup",
      "Performance optimization",
      "Security features",
      "3 rounds of revisions",
      "90 days support",
      "Monthly maintenance (3 months)"
    ],
    popular: false,
    cta: "Go Premium"
  }
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Web Development Packages</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional web development services tailored to your business needs. All packages include modern design, responsive functionality, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:border-pink-500/50 transition-all ${
                tier.popular ? 'ring-2 ring-pink-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  tier.popular 
                    ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg' 
                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-pink-500'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Initial strategy consultation</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Regular progress updates</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Project timeline & milestones</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Final file deliverables</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Launch support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> 50% upfront, 50% upon completion</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Milestone-based payments available</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Monthly payment plans for larger projects</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> All major payment methods accepted</li>
                <li className="flex items-center"><span className="text-pink-400 mr-2">✓</span> Invoice payment terms: Net 15</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}