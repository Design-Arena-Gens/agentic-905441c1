export default function Services() {
  const services = [
    {
      title: "Google Ads",
      description: "Search, Shopping, Display, and YouTube campaigns optimized for conversions, not just clicks.",
      features: [
        "Search & Shopping campaigns",
        "Performance Max optimization",
        "Remarketing strategies",
        "Conversion tracking setup"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Meta Ads",
      description: "Facebook & Instagram campaigns that turn social scrollers into loyal customers.",
      features: [
        "Facebook & Instagram ads",
        "Audience targeting & testing",
        "Creative strategy",
        "Lead generation funnels"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Landing Page CRO",
      description: "High-converting landing pages designed to maximize your ad spend ROI.",
      features: [
        "Conversion rate optimization",
        "A/B testing & analytics",
        "Mobile-first design",
        "Fast-loading pages"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Full-Funnel Strategy",
      description: "End-to-end strategy from awareness to conversion, with every touchpoint optimized.",
      features: [
        "Multi-channel integration",
        "Customer journey mapping",
        "Attribution modeling",
        "Retention campaigns"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy mb-4">
            Services Built for Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Every service. Every channel. Every dollar optimized.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold text-navy">
              All backed by performance guarantees
            </span>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-electricBlue/50"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-electricBlue to-electricBlue/70 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-2xl text-navy mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-electricBlue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
