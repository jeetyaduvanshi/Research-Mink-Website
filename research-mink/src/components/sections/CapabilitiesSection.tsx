"use client";

import { Zap, Globe2, Users2, BarChart3, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Users2,
    eyebrow: "01 — Recruitment",
    title: "Global B2B & C-Suite Recruitment",
    desc: "Verified access to IT decision-makers, C-Suite executives, HR leaders, healthcare professionals, and niche hard-to-reach segments — authenticated and ready to survey.",
    bullets: [
      "NPI registry & corporate email validation",
      "LinkedIn signal enrichment layer",
      "Role, seniority & org-size targeting",
      "Dedicated B2B recruitment desk",
    ],
    color: "#0066FF",
    stat: "17M+",
    statLabel: "B2B Verified Profiles",
  },
  {
    icon: Globe2,
    eyebrow: "02 — Consumer Panels",
    title: "High-Velocity Consumer Panels",
    desc: "30M+ profiled consumer respondents across US, UK, EMEA, APAC, and LATAM. Continuously refreshed with behavioral and psychographic enrichment for deep segmentation.",
    bullets: [
      "Behavioral & purchase-intent enrichment",
      "Age, income, geography, lifestyle segments",
      "Rapid launch — live in under 4 hours",
      "Multi-lingual survey support",
    ],
    color: "#00D2FF",
    stat: "30M+",
    statLabel: "Consumer Panel Members",
  },
  {
    icon: Zap,
    eyebrow: "03 — Fraud Defense",
    title: "Enterprise Fraud Defense Stack",
    desc: "Seven-layer quality enforcement — digital fingerprinting, IP telemetry, deduplication, AI response verification, honeypot traps, behavioral analysis, and compliance audits.",
    bullets: [
      "Real-time fingerprinting & IP scoring",
      "AI open-end gibberish detection",
      "Deduplication across panel sources",
      "99.4% fraud-free completion rate",
    ],
    color: "#10B981",
    stat: "99.4%",
    statLabel: "Validated Completion Rate",
  },
  {
    icon: BarChart3,
    eyebrow: "04 — Feasibility",
    title: "Instant Feasibility & Pricing Engine",
    desc: "Real-time project scoping with turnaround time estimates, confidence scores, and custom quota management — all before you speak to sales.",
    bullets: [
      "< 2 hour feasibility turnaround",
      "Dynamic IR, LOI & N calculations",
      "Multi-market quota modeling",
      "One-click RFP submission",
    ],
    color: "#38BDF8",
    stat: "< 2hrs",
    statLabel: "Avg. Feasibility Response",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32 bg-[#080E21]">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-eyebrow mb-3">⚙️ Core Capabilities</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Everything a Global Research{" "}
            <span className="gradient-text">Operation Needs</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Four integrated pillars powering end-to-end sample acquisition, quality enforcement, and project delivery at enterprise speed.
          </p>
        </div>

        {/* Capability cards — alternating layout */}
        <div className="space-y-5">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isEven = idx % 2 === 1;
            return (
              <div
                key={cap.title}
                className={`glass-card rounded-2xl p-6 lg:p-8 grid lg:grid-cols-2 gap-8 items-center group ${isEven ? "lg:direction-rtl" : ""}`}
              >
                {/* Text side */}
                <div className={isEven ? "lg:order-2" : ""}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: cap.color }}>
                    {cap.eyebrow}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: cap.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="flex items-center gap-1.5 text-sm font-semibold mt-6 transition-colors group/btn"
                    style={{ color: cap.color }}
                    onClick={() => document.querySelector("#feasibility")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explore this capability
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Stat/visual side */}
                <div className={`${isEven ? "lg:order-1" : ""}`}>
                  <div
                    className="rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[180px]"
                    style={{
                      background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${cap.color}10 0%, transparent 70%)`,
                      border: `1px solid ${cap.color}20`,
                    }}
                  >
                    <div
                      className="p-4 rounded-2xl mb-4"
                      style={{ background: `${cap.color}15`, border: `1px solid ${cap.color}25` }}
                    >
                      <Icon size={32} style={{ color: cap.color }} />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold tabular-nums mb-1" style={{ color: cap.color }}>
                      {cap.stat}
                    </div>
                    <div className="text-xs text-[#475569] uppercase tracking-wider">{cap.statLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
