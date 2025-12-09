export default function Results() {
  const metrics = [
    {
      value: "4.8x",
      label: "Average ROAS",
      description: "Return on ad spend across all clients"
    },
    {
      value: "60%",
      label: "Lower CPA",
      description: "Cost per acquisition reduction"
    },
    {
      value: "100+",
      label: "Brands Scaled",
      description: "E-commerce, SaaS, and SMBs"
    }
  ];

  const clients = [
    "Shopify", "WooCommerce", "BigCommerce", "Klaviyo", "HubSpot"
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy mb-4">
            Real Results. Real ROI.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just run ads—we engineer profit machines.
          </p>
        </div>

        {/* Metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-5xl md:text-6xl font-poppins font-extrabold text-electricBlue mb-3">
                {metric.value}
              </div>
              <div className="text-xl font-bold text-navy mb-2">
                {metric.label}
              </div>
              <div className="text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">
            Trusted By Teams Using
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
