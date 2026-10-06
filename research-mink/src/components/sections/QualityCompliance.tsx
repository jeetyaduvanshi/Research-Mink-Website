"use client";

import { Shield, Fingerprint, Brain, Eye, Lock, Award } from "lucide-react";

const defenseItems = [
  {
    icon: Fingerprint,
    title: "Digital Fingerprinting",
    desc: "Device canvas fingerprinting, browser entropy scoring, and hardware-level deduplication prevent panel pollution across sessions and devices.",
    stat: "99.7%",
    statLabel: "Dedup Accuracy",
    color: "#0066FF",
  },
  {
    icon: Eye,
    title: "IP Telemetry & Reputation",
    desc: "Real-time IP scoring against 240M+ flagged ranges. VPN, datacenter, Tor exit node, and residential proxy detection at the entry gate.",
    stat: "< 50ms",
    statLabel: "Detection Latency",
    color: "#00D2FF",
  },
  {
    icon: Brain,
    title: "AI Open-End Verification",
    desc: "NLP-powered quality scoring of verbatim responses. Flags gibberish, copy-paste AI content, and speeder patterns before data delivery.",
    stat: "97.2%",
    statLabel: "Response Quality Score",
    color: "#38BDF8",
  },
  {
    icon: Shield,
    title: "Honeypot Bot Defense",
    desc: "Invisible question traps, behavioral mouse-movement analysis, and timing anomaly detection block automated survey attackers.",
    stat: "< 0.6%",
    statLabel: "Bot Pass-Through Rate",
    color: "#10B981",
  },
  {
    icon: Lock,
    title: "GDPR & CCPA Compliance",
    desc: "Fully documented consent chains, opt-out management, right-to-erasure workflows, and data minimization protocols built into every study.",
    stat: "100%",
    statLabel: "Consent Audit Coverage",
    color: "#F59E0B",
  },
  {
    icon: Award,
    title: "ISO 20252 Protocols",
    desc: "ISO 20252:2019-aligned operational standards with ESOMAR code compliance and independent quarterly audits by certified assessors.",
    stat: "ISO 20252",
    statLabel: "Certified Standard",
    color: "#A78BFA",
  },
];

const certifications = [
  { label: "GDPR Article 17", detail: "Right to Erasure Compliant" },
  { label: "CCPA Opt-Out", detail: "California Privacy Rights" },
  { label: "ESOMAR", detail: "ICC/ESOMAR International Code" },
  { label: "ISO 20252:2019", detail: "Market Research Standard" },
  { label: "SOC 2 Type II", detail: "Security & Availability" },
];

export default function QualityCompliance() {
  return (
    <section id="quality" className="relative py-24 lg:py-32 bg-[#0A1128]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D2FF]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="section-eyebrow mb-3">🔒 Data Quality & Compliance</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Enterprise Fraud Defense.{" "}
            <br />
            <span className="gradient-text">Zero Data Compromise.</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Seven layers of quality control — from respondent recruitment to data delivery — ensure every complete is legitimate, deduplicated, and regulation-ready.
          </p>
        </div>

        {/* Defense grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {defenseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card rounded-2xl p-6 group relative overflow-hidden">
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `${item.color}08` }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold tabular-nums" style={{ color: item.color }}>
                      {item.stat}
                    </div>
                    <div className="text-[9px] text-[#475569] uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Certification strip */}
        <div className="glass-card rounded-2xl p-6">
          <p className="text-xs text-[#475569] uppercase tracking-wider font-semibold mb-4">
            Certifications & Standards
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#10B981]/30 transition-colors duration-200"
              >
                <span className="text-[#10B981] text-xs">✓</span>
                <div>
                  <div className="text-xs font-bold text-white">{cert.label}</div>
                  <div className="text-[10px] text-[#475569]">{cert.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
