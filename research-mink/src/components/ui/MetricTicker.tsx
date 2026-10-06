"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
}

const metrics = [
  { value: 35, suffix: "M+", label: "Verified Global Panelists", color: "#00D2FF" },
  { value: 99.4, suffix: "%", label: "Fraud-Free Completion Rate", decimals: 1, color: "#10B981" },
  { value: 45, suffix: "+", label: "Active Global Markets", color: "#38BDF8" },
  { value: 2, prefix: "< ", suffix: " Hours", label: "Feasibility Turnaround", color: "#0066FF" },
];

export default function MetricTicker() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="glass-card rounded-xl p-5 lg:p-6 text-center group relative overflow-hidden"
        >
          {/* Subtle glow behind number */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${m.color}08 0%, transparent 70%)`,
            }}
          />
          <div
            className="text-2xl lg:text-3xl xl:text-4xl font-bold font-mono tabular-nums mb-1.5"
            style={{ color: m.color }}
          >
            <AnimatedCounter
              end={m.value}
              suffix={m.suffix}
              prefix={m.prefix}
              decimals={m.decimals || 0}
            />
          </div>
          <div className="text-xs text-[#64748B] font-medium leading-snug">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
