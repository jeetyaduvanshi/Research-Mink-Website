"use client";

import { Quote } from "lucide-react";

const caseStudies = [
  {
    tag: "B2B · Technology",
    headline: "Tier-1 Tech Firm Reached 500 Enterprise CIOs in 72 Hours",
    body: "A global software leader needed 500 verified C-level IT decision-makers across North America and DACH for product benchmarking research. Research Mink deployed its enterprise B2B panel with NPI-validated targeting, delivering completes with a 96.4% pass-through quality rate — 3 days ahead of schedule.",
    metrics: [
      { value: "500", label: "CIO Completes" },
      { value: "72hrs", label: "Full Delivery" },
      { value: "96.4%", label: "QC Pass Rate" },
    ],
    gradient: "from-[#0066FF]/10 to-transparent",
  },
  {
    tag: "Healthcare · Pharma",
    headline: "Oncology Study Across 6 EU Markets — 300 Specialists in 5 Days",
    body: "A top-10 pharmaceutical company required oncologist and haematologist recruitment across Germany, France, Italy, Spain, Netherlands, and Sweden. With AHPRA-equivalent screening and GDPR-compliant consent, we delivered 300 physician completes with verified NPI credentials.",
    metrics: [
      { value: "300", label: "Physicians" },
      { value: "6", label: "EU Markets" },
      { value: "GDPR", label: "Fully Compliant" },
    ],
    gradient: "from-[#10B981]/08 to-transparent",
  },
  {
    tag: "Consumer · Retail",
    headline: "Gen Z Shopper Panel: 2,000 Completes Across US & UK in 36 Hours",
    body: "A global retail brand needed Gen Z shoppers (18-24) who made online fashion purchases in the last 30 days. Our consumer panel delivered 2,000 qualified completes with verified purchase behavior, split equally across the US and UK, with a 12-minute LOI — under budget.",
    metrics: [
      { value: "2,000", label: "Gen Z Completes" },
      { value: "36hrs", label: "Turnaround" },
      { value: "Under Budget", label: "On All Metrics" },
    ],
    gradient: "from-[#00D2FF]/08 to-transparent",
  },
];

const testimonials = [
  {
    quote: "Research Mink consistently delivers B2B completions at speeds I've never seen from any panel provider. Their fraud defense is not marketing — it's real, and it shows in our data quality scores.",
    name: "Sarah Chen",
    role: "VP of Research Operations",
    company: "Tier-1 Market Research Firm",
    initials: "SC",
    color: "#0066FF",
  },
  {
    quote: "We've used five panel providers in the last two years. Research Mink is the only one where our client actually commented on response quality without prompting. That never happens.",
    name: "Marcus Williams",
    role: "Senior Insights Lead",
    company: "Global Consumer Insights Agency",
    initials: "MW",
    color: "#00D2FF",
  },
  {
    quote: "The feasibility estimator saved us three days of back-and-forth before project kickoff. We scope, confirm, and launch same-day now. It's transformed how we pitch timelines to clients.",
    name: "Priya Nair",
    role: "Director of Research Technology",
    company: "Fortune 200 Financial Services",
    initials: "PN",
    color: "#10B981",
  },
];

export default function SocialProof() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#080E21]">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#0066FF]/06 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">📈 Case Studies</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Proven at{" "}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Real project outcomes from research agencies, Fortune 500 brands, and global pharma companies.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          {caseStudies.map((cs) => (
            <div key={cs.tag} className="glass-card rounded-2xl p-6 group overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${cs.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <span className="badge-blue text-[10px] mb-4 inline-block">{cs.tag}</span>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{cs.headline}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">{cs.body}</p>
                <div className="divider-glow mb-4" />
                <div className="grid grid-cols-3 gap-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-base font-bold text-[#00D2FF] tabular-nums">{m.value}</div>
                      <div className="text-[10px] text-[#475569] leading-snug">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <p className="section-eyebrow mb-8 text-center">Client Voices</p>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6 relative">
                <Quote size={24} className="text-[#1E293B] mb-4" />
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-[#475569]">{t.role}</div>
                    <div className="text-xs text-[#334155]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
