"use client";
import React from "react";
import { Globe, FileText, Zap, Monitor, Info, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Website Cloning",
      description:
        "Clone any publicly accessible website with a single click. Our tool handles complex layouts and designs with ease.",
      delay: "0ms",
    },
    {
      icon: FileText,
      title: "Code Extraction",
      description:
        "Extract HTML, CSS, JavaScript, and other assets from websites, all neatly organized and formatted.",
      delay: "100ms",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description:
        "Our optimized algorithms process even complex websites in seconds, saving you valuable development time.",
      delay: "200ms",
    },
    {
      icon: Monitor,
      title: "Responsive Analysis",
      description:
        "Analyze how websites adapt to different screen sizes and get insights into their responsive design techniques.",
      delay: "300ms",
    },
    {
      icon: Info,
      title: "SEO Insights",
      description:
        "Get detailed information about meta tags, structured data, and other SEO elements used by successful websites.",
      delay: "400ms",
    },
    {
      icon: Star,
      title: "Learning Tool",
      description:
        "Perfect for developers and designers who want to learn by examining well-crafted websites and understanding their structure.",
      delay: "500ms",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight animate-slide-up">
            Powerful Features
          </h1>
          <p className="text-lg text-blue-200/90 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
            Our comprehensive suite of tools helps you understand and learn from
            any website's code and structure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:border-blue-400/40 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-200/80 text-sm leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.6s ease-out 0.15s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Features;
