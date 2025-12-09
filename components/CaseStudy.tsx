export default function CaseStudy() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy to-electricBlue/10 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-electricBlue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-electricBlue/20 border border-electricBlue/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-electricBlue">Case Study</span>
            </div>

            <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-6">
              How We 5X'd ROAS for a DTC Brand in 90 Days
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A premium skincare brand was burning $15K/month on Meta ads with barely 1.5x ROAS. We rebuilt their entire funnel, optimized creative, and implemented our proven testing framework.
            </p>

            {/* Results */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-poppins font-bold text-electricBlue mb-2">5.2x</div>
                <div className="text-sm text-gray-300">ROAS After 90 Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-poppins font-bold text-electricBlue mb-2">-58%</div>
                <div className="text-sm text-gray-300">Cost Per Acquisition</div>
              </div>
            </div>

            <a
              href="#case-study"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Read Full Case Study
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Visual representation */}
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                {/* Chart header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
                    <div className="text-3xl font-bold text-navy">$127,450</div>
                    <div className="text-sm text-green-600 font-semibold">+425% vs. previous period</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">ROAS</div>
                    <div className="text-3xl font-bold text-electricBlue">5.2x</div>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Month 1</span>
                      <span className="font-semibold text-gray-700">1.5x</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Month 2</span>
                      <span className="font-semibold text-gray-700">3.2x</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-electricBlue/60 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Month 3</span>
                      <span className="font-semibold text-navy">5.2x</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-electricBlue to-orange rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy">-58%</div>
                    <div className="text-xs text-gray-500">CPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy">+312%</div>
                    <div className="text-xs text-gray-500">Conversions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy">2.8%</div>
                    <div className="text-xs text-gray-500">CTR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
