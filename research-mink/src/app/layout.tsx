import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Mink — Global Sample Exchange & Audience Feasibility Engine",
  description:
    "Research Mink powers global market research with 35M+ verified respondents, real-time feasibility, enterprise fraud defense, and high-velocity B2B & B2C panels across 45+ markets.",
  keywords: [
    "market research panel",
    "survey sample provider",
    "B2B recruitment",
    "audience feasibility",
    "fraud defense",
    "global panelists",
    "enterprise research",
    "survey router",
    "sample exchange",
  ],
  openGraph: {
    title: "Research Mink — Global Sample Exchange",
    description:
      "35M+ verified global panelists. Real-time feasibility. Zero compromise on data integrity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
