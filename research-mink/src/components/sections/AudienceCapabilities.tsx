"use client";

import { useState } from "react";
import { Briefcase, Heart, ShoppingBag, Users, ChevronRight } from "lucide-react";

const tabs = [
  { id: "b2b", label: "Enterprise B2B", icon: Briefcase },
  { id: "healthcare", label: "Healthcare & Life Sciences", icon: Heart },
  { id: "consumer", label: "Consumer & Demographics", icon: ShoppingBag },
];

const tabContent = {
  b2b: {
    headline: "Reach the Professionals Who Actually Decide",
    desc: "Research Mink's B2B panels are built on verified professional profiles — not self-declared data. Every respondent is authenticated against corporate email, LinkedIn signal, and role validation protocols.",
    segments: [
      { title: "C-Suite & Board Level", detail: "CEOs, CFOs, CIOs, CMOs across Fortune 500 to mid-market", count: "2.4M+", verified: true },
      { title: "IT Decision Makers", detail: "Infrastructure, cloud, cybersecurity, and DevOps leads", count: "4.1M+", verified: true },
      { title: "Financial Advisors & Analysts", detail: "Wealth managers, private equity, investment banking", count: "1.2M+", verified: true },
      { title: "HR & People Leaders", detail: "CHROs, talent acquisition, benefits managers", count: "1.8M+", verified: true },
      { title: "Small Business Owners", detail: "Founders, principals, and sole proprietors (<200 employees)", count: "6.3M+", verified: true },
      { title: "Supply Chain & Procurement", detail: "Operations directors, logistics managers, category buyers", count: "1.5M+", verified: false },
    ],
    geoMatrix: ["North America", "UK", "DACH", "ANZ", "Singapore", "Japan"],
  },
  healthcare: {
    headline: "Precision Access Across the Entire Care Continuum",
    desc: "From frontline clinicians to pharma decision-makers, Research Mink's healthcare panel is HIPAA-aware, double-opted, and screened against NPI registry and AHPRA verification.",
    segments: [
      { title: "Physicians & GPs", detail: "PCPs, hospitalists, specialists across all major specialties", count: "890K+", verified: true },
      { title: "Specialist Consultants", detail: "Oncologists, cardiologists, neurologists, endocrinologists", count: "320K+", verified: true },
      { title: "Nurses & Allied Health", detail: "RNs, NPs, PAs, pharmacists, occupational therapists", count: "2.1M+", verified: true },
      { title: "Patients & Caregivers", detail: "Active condition management across 80+ chronic & acute conditions", count: "5.2M+", verified: false },
      { title: "Pharma & Biotech Professionals", detail: "Medical affairs, market access, clinical research roles", count: "450K+", verified: true },
      { title: "Medical Device Buyers", detail: "Procurement leads, biomedical engineers, department heads", count: "180K+", verified: true },
    ],
    geoMatrix: ["United States", "Germany", "UK", "France", "Australia", "Canada"],
  },
  consumer: {
    headline: "Broad Consumer Reach. Deep Demographic Precision.",
    desc: "30M+ profiled consumer panelists across North America, EMEA, APAC, and LATAM — enriched with behavioral, psychographic, and purchase-intent data.",
    segments: [
      { title: "Gen Z (18–26)", detail: "Digital natives, gaming, fashion, social commerce", count: "4.2M+", verified: false },
      { title: "Millennials (27–42)", detail: "HH decision makers, mortgages, family purchases", count: "7.8M+", verified: false },
      { title: "High Net Worth Individuals", detail: "HHI $250K+ households, luxury, travel, investment", count: "1.3M+", verified: true },
      { title: "Tech Early Adopters", detail: "First purchasers, beta testers, gadget enthusiasts", count: "2.6M+", verified: false },
      { title: "Parents & Families", detail: "Mothers, fathers, primary caregivers with children 0–18", count: "5.4M+", verified: false },
      { title: "Gamers & Esports Fans", detail: "Console, PC, mobile, and esports spectators", count: "3.1M+", verified: false },
    ],
    geoMatrix: ["US", "UK", "Canada", "Australia", "Germany", "Brazil", "India", "Japan"],
  },
};

export default function AudienceCapabilities() {
  const [activeTab, setActiveTab] = useState("b2b");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section id="audiences" className="relative py-24 lg:py-32 bg-[#080E21]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#0066FF]/08 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-eyebrow mb-3">🎯 Audience Intelligence</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            35M+ Respondents,{" "}
            <span className="gradient-text">Precisely Profiled</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Not just panel — proven supply. Every segment is continuously validated, deduplicated, and enriched with behavioral signals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`audience-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#0066FF]/15 border-[#0066FF]/40 text-[#38BDF8]"
                    : "bg-white/[0.02] border-white/[0.06] text-[#64748B] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: description */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-3">{content.headline}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-6">{content.desc}</p>

              <div className="divider-glow mb-6" />

              <p className="text-xs text-[#475569] uppercase tracking-wider mb-3 font-semibold">Available Markets</p>
              <div className="flex flex-wrap gap-2">
                {content.geoMatrix.map((geo) => (
                  <span key={geo} className="badge-blue text-[10px]">{geo}</span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.04]">
                <button
                  className="flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors group"
                  onClick={() => document.querySelector("#feasibility")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Check panel availability
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: segment grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.segments.map((seg) => (
              <div
                key={seg.title}
                className="glass-card rounded-xl p-4 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-bold text-white leading-snug">{seg.title}</h4>
                  {seg.verified && (
                    <span className="badge-verified text-[9px] shrink-0 ml-2">✓ Verified</span>
                  )}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mb-3">{seg.detail}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#00D2FF] tabular-nums">{seg.count}</span>
                  <span className="text-[10px] text-[#334155] font-medium">Active Panelists</span>
                </div>
                <div className="h-px bg-white/[0.04] mt-3 group-hover:bg-[#0066FF]/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
