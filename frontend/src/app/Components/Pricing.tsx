"use client";
import React from "react";
import { Globe, Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for occasional use and learning.",
      features: [
        "5 website clones per day",
        "Basic code extraction",
        "HTML and CSS only",
        "24-hour code storage",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-slate-700 hover:bg-slate-600 text-white",
      popular: false,
      delay: "0ms",
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For developers who need more powerful features.",
      features: [
        "Unlimited website clones",
        "Full code extraction (HTML, CSS, JS)",
        "Asset downloading",
        "Code annotations",
        "Responsive design analysis",
        "Permanent code storage",
      ],
      buttonText: "Subscribe Now",
      buttonStyle:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white",
      popular: true,
      delay: "100ms",
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "For teams working together on multiple projects.",
      features: [
        "Everything in Pro",
        "5 team members",
        "Team collaboration",
        "Project management",
        "API access",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-slate-700 hover:bg-slate-600 text-white",
      popular: false,
      delay: "200ms",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Main Content */}
      <div className="px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. No hidden fees or surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in-up cursor-pointer ${
                  plan.popular ? "border-blue-500/40" : ""
                }`}
                style={{ animationDelay: plan.delay }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-blue-200/80 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-blue-200/80 mb-8 leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-blue-200/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-2px) translateX(-50%);
          }
          50% {
            transform: translateY(2px) translateX(-50%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .lg\\:scale-110 {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
