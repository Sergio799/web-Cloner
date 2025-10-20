"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make web development more accessible and
              educational.
            </p>
          </div>

          <div className="space-y-16">
            <section
              className="animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                Website Cloner was founded in 2023 by a team of passionate web
                developers who were tired of the tedious process of manually
                analyzing website code. We wanted to create a tool that would
                make it easy for developers, designers, and students to learn
                from existing websites by providing clean, readable code that
                could be studied and used as a reference.
              </p>
            </section>

            <section
              className="animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                Our mission is to democratize web development knowledge by
                making it easy for anyone to understand how their favorite
                websites are built. We believe that the best way to learn is by
                example, and our tool provides the perfect way to see real-world
                examples of effective web development techniques.
              </p>
            </section>
            <section
              className="animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <p className="text-blue-200 text-lg leading-relaxed">
                  Website Cloner uses advanced algorithms to analyze and extract
                  the code from any publicly accessible website. Our system
                  processes the HTML, CSS, JavaScript, and other assets, and
                  organizes them into a clean, readable format that's easy to
                  understand and learn from.
                </p>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Unlike simple "view source" tools, our system analyzes the
                  rendered DOM, compiled CSS, and executed JavaScript to give
                  you a complete picture of how the website works. This makes it
                  an invaluable tool for learning modern web development
                  techniques.
                </p>
              </div>
            </section>
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default About;
