export default function FinalCTA() {
  return (
    <section id="audit" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h2 className="font-poppins font-bold text-4xl md:text-6xl text-navy mb-6">
          Ready to Turn Ad Spend Into <span className="text-electricBlue">Profit</span>?
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Book a free 15-minute strategy call. No pitch, no obligation—just actionable insights you can use today.
        </p>

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="#book-call"
            className="inline-flex items-center justify-center bg-orange hover:bg-orange/90 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Book Free 15-Min Strategy Call
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Reassurance */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-electricBlue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Zero obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-electricBlue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Performance or your money back</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-electricBlue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Free audit included</span>
          </div>
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-poppins font-bold text-navy mb-2">15 min</div>
            <div className="text-gray-600">Average call duration</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-poppins font-bold text-navy mb-2">$0</div>
            <div className="text-gray-600">Cost for audit & strategy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-poppins font-bold text-navy mb-2">24hrs</div>
            <div className="text-gray-600">To receive your audit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
