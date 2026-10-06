"use client";

const regions = [
  {
    name: "North America",
    markets: ["United States", "Canada", "Mexico"],
    panelists: "12.4M+",
    b2b: true,
    consumer: true,
    healthcare: true,
    color: "#0066FF",
    gridPos: "col-start-1 col-span-2 row-start-1 row-span-2",
  },
  {
    name: "UK & Western Europe",
    markets: ["United Kingdom", "Germany", "France", "Netherlands", "Spain", "Italy", "Nordics"],
    panelists: "8.6M+",
    b2b: true,
    consumer: true,
    healthcare: true,
    color: "#00D2FF",
    gridPos: "col-start-3 col-span-2 row-start-1 row-span-1",
  },
  {
    name: "APAC",
    markets: ["Australia", "Japan", "South Korea", "Singapore", "Hong Kong"],
    panelists: "6.2M+",
    b2b: true,
    consumer: true,
    healthcare: false,
    color: "#38BDF8",
    gridPos: "col-start-5 col-span-2 row-start-1 row-span-2",
  },
  {
    name: "India & South Asia",
    markets: ["India", "Bangladesh", "Sri Lanka", "Pakistan"],
    panelists: "4.1M+",
    b2b: false,
    consumer: true,
    healthcare: false,
    color: "#A78BFA",
    gridPos: "col-start-3 col-span-2 row-start-2 row-span-1",
  },
  {
    name: "LATAM",
    markets: ["Brazil", "Mexico", "Colombia", "Argentina", "Chile"],
    panelists: "2.8M+",
    b2b: false,
    consumer: true,
    healthcare: false,
    color: "#F59E0B",
    gridPos: "col-start-1 col-span-2 row-start-3 row-span-1",
  },
  {
    name: "Middle East & Africa",
    markets: ["UAE", "Saudi Arabia", "South Africa", "Egypt"],
    panelists: "1.2M+",
    b2b: false,
    consumer: true,
    healthcare: false,
    color: "#10B981",
    gridPos: "col-start-3 col-span-4 row-start-3 row-span-1",
  },
];

const capabilities = [
  { label: "B2B / Professional", dot: "#0066FF" },
  { label: "Consumer Panel", dot: "#00D2FF" },
  { label: "Healthcare Verified", dot: "#10B981" },
];

export default function GlobalCoverageMap() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0F172A]">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0066FF]/06 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-eyebrow mb-3">🌍 Global Coverage</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3">
              45+ Markets,{" "}
              <span className="gradient-text">One Platform</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl">
              From North America to APAC and emerging markets — Research Mink delivers verified supply across every major research geography.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            {capabilities.map((c) => (
              <div key={c.label} className="flex items-center gap-2 text-sm text-[#64748B]">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.dot }} />
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {/* Region grid */}
        <div className="grid grid-cols-6 grid-rows-3 gap-3 mb-10">
          {regions.map((region) => (
            <div
              key={region.name}
              className={`${region.gridPos} glass-card rounded-2xl p-5 group relative overflow-hidden`}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                style={{ background: `linear-gradient(90deg, ${region.color}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-bold text-white leading-snug">{region.name}</h3>
                <span
                  className="text-xs font-bold tabular-nums shrink-0 ml-2"
                  style={{ color: region.color }}
                >
                  {region.panelists}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {region.markets.slice(0, 4).map((m) => (
                  <span key={m} className="text-[9px] text-[#475569] px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">
                    {m}
                  </span>
                ))}
                {region.markets.length > 4 && (
                  <span className="text-[9px] text-[#334155] px-1.5 py-0.5 rounded bg-white/[0.03]">
                    +{region.markets.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex gap-1.5 flex-wrap">
                {region.b2b && <span className="badge-blue text-[8px] py-0.5 px-2">B2B</span>}
                {region.consumer && (
                  <span className="text-[8px] py-0.5 px-2 rounded-full border border-[#00D2FF]/25 text-[#00D2FF] bg-[#00D2FF]/08">
                    Consumer
                  </span>
                )}
                {region.healthcare && (
                  <span className="badge-verified text-[8px] py-0.5 px-2">Healthcare</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="glass-card rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "45+", label: "Active Markets" },
            { value: "35M+", label: "Total Panelists" },
            { value: "18", label: "Languages Supported" },
            { value: "24/7", label: "Project Operations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold gradient-text-blue tabular-nums">{s.value}</div>
              <div className="text-xs text-[#475569] font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
