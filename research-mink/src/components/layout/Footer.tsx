"use client";

import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const navColumns = [
  {
    title: "Platform",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Global Audiences", href: "#audiences" },
      { label: "Feasibility Engine", href: "#feasibility" },
      { label: "Quality & Compliance", href: "#quality" },
    ],
  },
  {
    title: "Verticals",
    links: [
      { label: "Enterprise B2B", href: "#audiences" },
      { label: "Healthcare & Pharma", href: "#audiences" },
      { label: "Consumer Research", href: "#audiences" },
      { label: "Financial Services", href: "#audiences" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Case Studies", href: "#about" },
      { label: "Client Portal", href: "#" },
      { label: "Panel Login", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Panelist Agreement", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const offices = [
  { city: "Delhi", detail: "India · IST" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060C1A] border-t border-white/[0.04]">
      {/* CTA strip */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="section-eyebrow mb-3">Ready to Launch?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Your Next Study with{" "}
            <span className="gradient-text">Research Mink</span>
          </h2>
          <p className="text-[#64748B] mb-8 max-w-xl mx-auto">
            Get a real-time feasibility estimate and connect with our enterprise team — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#feasibility")}
              className="btn-primary px-8 py-3.5 text-base"
            >
              Launch Feasibility Estimator →
            </button>
            <a
              href="mailto:enterprise@researchmink.com"
              className="btn-secondary px-8 py-3.5 text-base flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              enterprise@researchmink.com
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/15 shadow-[0_0_24px_rgba(0,102,255,0.25)] shrink-0">
                <Image src="/logo.jpg" alt="Research Mink" fill sizes="48px" className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-[17px] tracking-[0.06em]">RESEARCH</span>
                <span className="gradient-text-blue font-black text-[13.5px] tracking-[0.22em] mt-0.5">MINK</span>
              </div>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mb-5 max-w-xs">
              Global Market Research Sample Exchange &amp; Audience Feasibility Engine. Powering research at enterprise scale.
            </p>

            {/* Offices */}
            <div className="space-y-2">
              {offices.map((o) => (
                <div key={o.city} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <MapPin size={12} className="text-[#00D2FF] shrink-0" />
                  <span className="text-white font-medium">{o.city}</span>
                  <span className="text-[#475569]">·</span>
                  <span className="text-[#94A3B8]">{o.detail}</span>
                </div>
              ))}
            </div>

            {/* Certs */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["GDPR", "ESOMAR", "ISO 20252", "CCPA"].map((c) => (
                <span key={c} className="text-[9px] font-bold text-[#334155] border border-white/[0.04] rounded px-2 py-0.5">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-[#475569] hover:text-[#94A3B8] transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#334155]">
          <span>© {new Date().getFullYear()} Research Mink. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>ESOMAR Member</span>
            <span>·</span>
            <span>ISO 20252:2019 Compliant</span>
            <span>·</span>
            <span>Panel ID: RM-ENT-2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
