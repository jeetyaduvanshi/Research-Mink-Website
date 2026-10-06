"use client";

import { useState } from "react";
import {
  Users, Globe, Shield, Zap, Building2, Heart,
  ShoppingCart, Target, CheckCircle, AlertCircle, Clock
} from "lucide-react";

type AudienceCategory = "b2b" | "healthcare" | "consumer" | "niche";
type StepKey = 1 | 2 | 3 | 4;

const audienceCategories = [
  { id: "b2b" as AudienceCategory, label: "B2B Decision Makers", icon: Building2, desc: "IT leaders, C-Suite, DevOps, Finance" },
  { id: "healthcare" as AudienceCategory, label: "Healthcare & Medical", icon: Heart, desc: "Physicians, specialists, patients" },
  { id: "consumer" as AudienceCategory, label: "General Consumer", icon: ShoppingCart, desc: "Mass market, demographics, lifestyle" },
  { id: "niche" as AudienceCategory, label: "Niche Hard-to-Reach", icon: Target, desc: "HNW, early adopters, professionals" },
];

const geographies = [
  "North America", "UK & Europe", "APAC", "LATAM", "Middle East & Africa", "India & South Asia",
];

function estimateFeasibility(
  audience: AudienceCategory,
  n: number,
  loi: number,
  ir: number,
  geoCount: number
): { turnaround: string; confidence: number; label: string; color: string } {
  const base = n * loi * (1 / (ir / 100)) * (audience === "niche" ? 1.8 : audience === "b2b" ? 1.4 : 1);
  const hours = Math.min(Math.max(base / 120 + geoCount * 2, 4), 168);

  let turnaround = "";
  if (hours <= 24) turnaround = "< 24 Hours";
  else if (hours <= 48) turnaround = "24–48 Hours";
  else if (hours <= 96) turnaround = "2–4 Business Days";
  else turnaround = "5–7 Business Days";

  const confidence = Math.max(10, Math.min(99, Math.round(100 - (hours / 168) * 60 + ir / 5)));
  const label = confidence >= 85 ? "High Feasibility" : confidence >= 65 ? "Moderate Feasibility" : "Limited Availability";
  const color = confidence >= 85 ? "#10B981" : confidence >= 65 ? "#F59E0B" : "#EF4444";

  return { turnaround, confidence, label, color };
}

export default function FeasibilityEngine() {
  const [step, setStep] = useState<StepKey>(1);
  const [audience, setAudience] = useState<AudienceCategory>("consumer");
  const [geos, setGeos] = useState<string[]>(["North America"]);
  const [sampleSize, setSampleSize] = useState(500);
  const [loi, setLoi] = useState(15);
  const [ir, setIr] = useState(40);
  const [form, setForm] = useState({ name: "", email: "", company: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleGeo = (geo: string) => {
    setGeos((prev) =>
      prev.includes(geo) ? prev.filter((g) => g !== geo) : [...prev, geo]
    );
  };

  const result = estimateFeasibility(audience, sampleSize, loi, ir, geos.length);

  const steps: { key: StepKey; label: string }[] = [
    { key: 1, label: "Audience" },
    { key: 2, label: "Specs" },
    { key: 3, label: "Estimate" },
    { key: 4, label: "Submit RFP" },
  ];

  return (
    <section id="feasibility" className="relative py-24 lg:py-32 bg-[#0A1128]">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066FF]/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">⚡ Instant Feasibility Engine</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Scope Your Project in{" "}
            <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Get real-time turnaround estimates, feasibility scores, and one-click RFP submission without waiting for a sales call.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10 gap-0">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center">
              <button
                onClick={() => step > s.key && setStep(s.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  step === s.key
                    ? "bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/40"
                    : step > s.key
                    ? "text-[#10B981] cursor-pointer hover:bg-white/[0.03]"
                    : "text-[#475569] cursor-not-allowed"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                    step === s.key
                      ? "border-[#0066FF] bg-[#0066FF]/20 text-[#38BDF8]"
                      : step > s.key
                      ? "border-[#10B981] bg-[#10B981]/20 text-[#10B981]"
                      : "border-[#334155] text-[#475569]"
                  }`}
                >
                  {step > s.key ? "✓" : s.key}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px mx-1 ${step > s.key ? "bg-[#10B981]/40" : "bg-[#1E293B]"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="glass-card rounded-2xl p-6 lg:p-10">
          {/* Step 1: Audience */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Select Audience Category</h3>
              <p className="text-[#64748B] text-sm mb-6">Choose the primary respondent profile for your study.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {audienceCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      id={`audience-${cat.id}`}
                      onClick={() => setAudience(cat.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 group ${
                        audience === cat.id
                          ? "border-[#0066FF]/60 bg-[#0066FF]/10"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${audience === cat.id ? "bg-[#0066FF]/20" : "bg-white/[0.04]"}`}>
                          <Icon size={18} className={audience === cat.id ? "text-[#38BDF8]" : "text-[#64748B]"} />
                        </div>
                        <div>
                          <div className={`font-semibold text-sm mb-0.5 ${audience === cat.id ? "text-white" : "text-[#94A3B8]"}`}>
                            {cat.label}
                          </div>
                          <div className="text-xs text-[#475569]">{cat.desc}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Target Geographies</h3>
              <p className="text-[#64748B] text-sm mb-4">Select one or more markets. Multi-market adds complexity.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {geographies.map((geo) => (
                  <button
                    key={geo}
                    id={`geo-${geo.replace(/\s+/g, "-").toLowerCase()}`}
                    onClick={() => toggleGeo(geo)}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                      geos.includes(geo)
                        ? "border-[#0066FF]/50 bg-[#0066FF]/10 text-[#38BDF8]"
                        : "border-white/[0.06] text-[#64748B] hover:border-white/[0.14] hover:text-white"
                    }`}
                  >
                    {geos.includes(geo) && <span className="mr-1">✓</span>}
                    {geo}
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  id="step1-next"
                  onClick={() => setStep(2)}
                  disabled={geos.length === 0}
                  className="btn-primary px-8 py-3"
                >
                  Next: Sample Specs →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Sample Specs */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sample Specifications</h3>
              <p className="text-[#64748B] text-sm mb-8">Define your study parameters to generate a precise estimate.</p>

              <div className="space-y-8">
                {/* Sample size */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-[#94A3B8]">Sample Size (N Completes)</label>
                    <span className="text-2xl font-bold text-[#00D2FF] tabular-nums">{sampleSize.toLocaleString()}</span>
                  </div>
                  <input
                    id="slider-sample-size"
                    type="range" min={50} max={5000} step={50} value={sampleSize}
                    onChange={(e) => setSampleSize(Number(e.target.value))}
                    className="w-full accent-[#0066FF]"
                  />
                  <div className="flex justify-between text-xs text-[#475569] mt-1">
                    <span>50</span><span>5,000+</span>
                  </div>
                </div>

                {/* LOI */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-[#94A3B8]">Length of Interview (LOI)</label>
                    <span className="text-2xl font-bold text-[#38BDF8] tabular-nums">{loi} min</span>
                  </div>
                  <input
                    id="slider-loi"
                    type="range" min={5} max={45} step={1} value={loi}
                    onChange={(e) => setLoi(Number(e.target.value))}
                    className="w-full accent-[#0066FF]"
                  />
                  <div className="flex justify-between text-xs text-[#475569] mt-1">
                    <span>5 min</span><span>45 min</span>
                  </div>
                </div>

                {/* IR */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-semibold text-[#94A3B8]">Incidence Rate (IR%)</label>
                    <span className="text-2xl font-bold text-[#10B981] tabular-nums">{ir}%</span>
                  </div>
                  <input
                    id="slider-ir"
                    type="range" min={5} max={80} step={5} value={ir}
                    onChange={(e) => setIr(Number(e.target.value))}
                    className="w-full accent-[#0066FF]"
                  />
                  <div className="flex justify-between text-xs text-[#475569] mt-1">
                    <span>5% (Niche)</span><span>80% (Broad)</span>
                  </div>
                  {ir < 20 && (
                    <p className="text-xs text-[#F59E0B] mt-2 flex items-center gap-1">
                      <AlertCircle size={12} /> Low IR may impact turnaround. Our B2B recruitment team can assist.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 justify-between mt-10">
                <button onClick={() => setStep(1)} className="btn-secondary px-6 py-3">← Back</button>
                <button id="step2-next" onClick={() => setStep(3)} className="btn-primary px-8 py-3">
                  Get Instant Estimate →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Output */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Your Feasibility Estimate</h3>
              <p className="text-[#64748B] text-sm mb-8">Based on your inputs — live from our panel supply model.</p>

              {/* Summary */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {[
                  { label: "Category", value: audienceCategories.find((c) => c.id === audience)?.label || "" },
                  { label: "Markets", value: `${geos.length} Selected` },
                  { label: "Sample N", value: sampleSize.toLocaleString() },
                  { label: "LOI / IR", value: `${loi}m / ${ir}%` },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.02] rounded-xl p-3.5 border border-white/[0.06]">
                    <div className="text-xs text-[#475569] mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-white truncate">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Main result */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] text-center">
                  <Clock size={28} className="text-[#38BDF8] mx-auto mb-3" />
                  <div className="text-xs text-[#475569] mb-1 uppercase tracking-wider">Est. Fieldwork Duration</div>
                  <div className="text-3xl font-bold text-white">{result.turnaround}</div>
                </div>

                <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] text-center">
                  <div
                    className="text-5xl font-bold tabular-nums mb-1"
                    style={{ color: result.color }}
                  >
                    {result.confidence}%
                  </div>
                  <div className="text-xs text-[#475569] mb-2 uppercase tracking-wider">Target Match Confidence</div>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border"
                    style={{
                      color: result.color,
                      borderColor: `${result.color}40`,
                      background: `${result.color}12`,
                    }}
                  >
                    <CheckCircle size={12} /> {result.label}
                  </span>
                </div>
              </div>

              {/* Confidence bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-[#475569] mb-2">
                  <span>Panel Match Score</span>
                  <span style={{ color: result.color }}>{result.confidence}% confidence</span>
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${result.confidence}%`,
                      background: `linear-gradient(90deg, #0066FF, ${result.color})`,
                    }}
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-between">
                <button onClick={() => setStep(2)} className="btn-secondary px-6 py-3">← Adjust Specs</button>
                <button id="step3-next" onClick={() => setStep(4)} className="btn-primary px-8 py-3">
                  Submit RFP →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: RFP Form */}
          {step === 4 && !submitted && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Submit Your RFP</h3>
              <p className="text-[#64748B] text-sm mb-6">
                Our team will respond within 2 business hours with a custom proposal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1.5 block uppercase tracking-wider">Full Name *</label>
                  <input
                    id="rfp-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1.5 block uppercase tracking-wider">Work Email *</label>
                  <input
                    id="rfp-email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-[#64748B] mb-1.5 block uppercase tracking-wider">Company / Organization *</label>
                  <input
                    id="rfp-company"
                    type="text"
                    placeholder="Acme Research Group"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-[#64748B] mb-1.5 block uppercase tracking-wider">Additional Notes</label>
                  <textarea
                    id="rfp-notes"
                    rows={3}
                    placeholder="Screening criteria, quota splits, panel exclusions, or anything else we should know..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-between mt-6">
                <button onClick={() => setStep(3)} className="btn-secondary px-6 py-3">← Back</button>
                <button
                  id="rfp-submit"
                  onClick={() => {
                    if (form.name && form.email && form.company) setSubmitted(true);
                  }}
                  disabled={!form.name || !form.email || !form.company}
                  className="btn-primary px-10 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit RFP →
                </button>
              </div>
            </div>
          )}

          {/* Success state */}
          {step === 4 && submitted && (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} className="text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">RFP Received!</h3>
              <p className="text-[#64748B] mb-6 max-w-md mx-auto">
                Thanks, <span className="text-white">{form.name}</span>. Our enterprise team will review your project and respond to <span className="text-[#38BDF8]">{form.email}</span> within 2 business hours.
              </p>
              <button
                onClick={() => { setStep(1); setSubmitted(false); setForm({ name: "", email: "", company: "", notes: "" }); }}
                className="btn-secondary px-8 py-3"
              >
                Start New Estimate
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
