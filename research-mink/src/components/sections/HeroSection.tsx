"use client";

import { useEffect, useRef } from "react";
import MetricTicker from "@/components/ui/MetricTicker";
import { ArrowRight, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToFeasibility = () => {
    document.querySelector("#feasibility")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden mesh-bg pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Decorative orbs */}
      <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full bg-[#0066FF]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-[#00D2FF]/08 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0066FF]/04 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Precision Audiences.</span>
            <br />
            <span className="gradient-text">High-Velocity Insights.</span>
            <br />
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
              Zero Compromise on Data Integrity.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg lg:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-10">
            Research Mink powers global research agencies and Fortune 500 brands with{" "}
            <span className="text-[#94A3B8]">35M+ verified respondents</span>, real-time feasibility estimates,
            and enterprise-grade fraud defense — across B2B, healthcare, and consumer verticals.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              id="hero-cta-feasibility"
              onClick={scrollToFeasibility}
              className="btn-primary flex items-center gap-2 text-base px-7 py-3.5 w-full sm:w-auto"
            >
              Launch Feasibility Estimator
              <ArrowRight size={18} />
            </button>
            <button
              id="hero-cta-consultation"
              className="btn-secondary flex items-center gap-2 text-base px-7 py-3.5 w-full sm:w-auto"
            >
              <Calendar size={16} />
              Book Enterprise Consultation
            </button>
          </div>

          {/* Metric ticker */}
          <MetricTicker />

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#475569]">
            {["GDPR Compliant", "ESOMAR Member", "ISO 20252", "CCPA Ready"].map((badge) => (
              <span key={badge} className="badge-verified text-[10px]">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080E21] to-transparent pointer-events-none" />
    </section>
  );
}
