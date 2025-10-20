"use client";
import React, { useState, useCallback } from "react";
import { Search, Copy, Globe, Zap, Download, Eye, Code, CheckCircle } from "lucide-react";
import Features from "@/app/Components/Features";
import About from "@/app/Components/About";
import Pricing from "@/app/Components/Pricing";

const Home = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a valid URL");
      return;
    }

    setIsLoading(true);
    setError(null);
    setShowCode(false);

    try {
      const res = await fetch("http://127.0.0.1:8000/clone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      setResponse(data.html || "No HTML content received");
      setShowCode(true);

      setTimeout(() => {
        document.getElementById("code-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to clone website. Please check the URL and try again.");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [response]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([response], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cloned-website.html";
    a.click();
    URL.revokeObjectURL(url);
  }, [response]);

  const handlePreview = useCallback(() => {
    const blob = new Blob([response], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }, [response]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-indigo-500 rounded-full blur-3xl animate-pulse opacity-30" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Website Cloner
              </h1>
            </div>

            <div className="hidden md:flex space-x-6">
              {["home", "features", "about", "pricing"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group capitalize"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Landing/Hero section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero section */}
            <div className="mb-16 space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Paste the URL
                </h2>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
                  <Zap className="w-8 h-8 text-blue-400 animate-pulse" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400" />
                </div>

                <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get the Code
                </h3>
              </div>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Transform any website into clean, readable code instantly.
                Perfect for developers, designers, and anyone who wants to learn
                from the web.
              </p>
            </div>

            {/* Search section */}
            <div className="max-w-2xl mx-auto mb-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                        <input
                          type="url"
                          placeholder="https://example.com"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="pl-12 h-14 w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 outline-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="h-14 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-fit"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Cloning...</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-5 h-5" />
                            <span>Clone Website</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center animate-shake">
                  {error}
                </div>
              )}
            </div>

            {/* Quick features preview */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Globe,
                  title: "Any Website",
                  description:
                    "Clone any public website instantly with just a URL",
                },
                {
                  icon: Copy,
                  title: "Clean Code",
                  description:
                    "Get well-formatted, readable code ready for development",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Process websites in seconds, not minutes",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300 flex justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Display Section */}
        {showCode && (
          <section id="code-section" className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Cloned Website Code
                      </h3>
                      <p className="text-slate-300">
                        Successfully cloned from:{" "}
                        <span className="text-blue-400">{url}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={handleCopy}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? "Copied!" : "Copy"}</span>
                      </button>

                      <button
                        onClick={handleDownload}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>

                      <button
                        onClick={handlePreview}
                        className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6">
                  <div className="bg-slate-900/50 rounded-xl border border-white/5 overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-slate-800/50">
                      <div className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400 font-mono">
                          cloned-website.html
                        </span>
                      </div>
                    </div>
                    <pre className="p-6 text-sm text-slate-300 overflow-auto max-h-96 font-mono leading-relaxed">
                      {response}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features section */}
        <section id="features">
          <Features />
        </section>

        {/* About section */}
        <section id="about">
          <About />
        </section>

        {/* Pricing section */}
        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </div>
  );
};

export default Home;
