"use client";

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitPopup({ isOpen, onClose }: ExitPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange/80 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Headline */}
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-navy text-center mb-4">
            Wait! Before You Go...
          </h3>

          {/* Subheadline */}
          <p className="text-gray-600 text-center mb-6">
            Download our free guide: <span className="font-bold text-navy">"5 Ad Mistakes Killing Your ROI"</span>
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-8">
            {[
              "Identify the #1 reason ads fail",
              "Learn how to cut wasted spend by 50%",
              "Discover 3 quick wins you can implement today"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-electricBlue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Download Free Guide →
            </button>
          </form>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 text-center mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
