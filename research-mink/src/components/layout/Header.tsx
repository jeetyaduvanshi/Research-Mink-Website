"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Global Audiences", href: "#audiences" },
  { label: "Feasibility Engine", href: "#feasibility" },
  { label: "Quality & Compliance", href: "#quality" },
  { label: "About Us", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-[0_1px_0_rgba(255,255,255,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/15 shadow-[0_0_24px_rgba(0,102,255,0.25)] group-hover:ring-[#00D2FF]/60 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.45)] transition-all duration-300 shrink-0">
              <Image src="/logo.jpg" alt="Research Mink" fill sizes="48px" priority className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold text-[17px] tracking-[0.06em] drop-shadow-sm">RESEARCH</span>
              <span className="gradient-text-blue font-black text-[13.5px] tracking-[0.22em] mt-0.5">MINK</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-[14px] font-semibold text-slate-300 hover:text-white transition-all duration-200 rounded-full hover:bg-white/[0.08] hover:shadow-[0_2px_10px_rgba(0,0,0,0.3)] tracking-tight cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 py-2.5 text-[13.5px] font-semibold text-slate-200 hover:text-white rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer">
              Client Portal
            </button>
            <button
              onClick={() => scrollToSection("#feasibility")}
              className="btn-primary text-[13.5px] font-semibold py-2.5 px-5 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_28px_rgba(0,210,255,0.55)] cursor-pointer"
            >
              Check Feasibility →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="nav-blur border-t border-white/[0.04] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="w-full text-left px-4 py-3 text-[15px] font-semibold text-slate-200 hover:text-white hover:bg-white/[0.07] rounded-xl transition-all tracking-tight cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button className="btn-secondary text-sm w-full">Client Portal</button>
            <button
              onClick={() => scrollToSection("#feasibility")}
              className="btn-primary text-sm w-full text-center"
            >
              Check Feasibility →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
