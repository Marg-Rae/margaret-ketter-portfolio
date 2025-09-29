const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per project",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    features: [
      "Brand strategy consultation",
      "Logo design & basic branding",
      "Simple website (up to 5 pages)",
      "Mobile responsive design",
      "Basic SEO optimization",
      "2 rounds of revisions",
      "30 days support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$5,500",
    period: "per project",
    description: "Ideal for growing businesses that need comprehensive digital solutions.",
    features: [
      "Comprehensive brand strategy",
      "Complete visual identity system",
      "Custom website (up to 15 pages)",
      "Advanced functionality integration",
      "Content management system",
      "SEO optimization & analytics",
      "E-commerce integration (if needed)",
      "3 rounds of revisions",
      "90 days support",
      "Training sessions"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$12,000+",
    period: "per project",
    description: "For established businesses requiring advanced solutions and ongoing partnership.",
    features: [
      "Complete digital transformation strategy",
      "Advanced web application development",
      "Custom functionality & integrations",
      "Multi-platform compatibility",
      "Advanced analytics & reporting",
      "Ongoing maintenance & updates",
      "Priority support",
      "Unlimited revisions",
      "Team training & workshops",
      "Quarterly strategy reviews"
    ],
    popular: false,
    cta: "Contact Us"
  }
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for high-quality creative and strategic services. All packages include dedicated support and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Initial strategy consultation</li>
                <li>✓ Regular progress updates</li>
                <li>✓ Project timeline & milestones</li>
                <li>✓ Final file deliverables</li>
                <li>✓ Launch support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 50% upfront, 50% upon completion</li>
                <li>✓ Milestone-based payments available</li>
                <li>✓ Monthly payment plans for larger projects</li>
                <li>✓ All major payment methods accepted</li>
                <li>✓ Invoice payment terms: Net 15</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}