import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import AudienceCapabilities from "@/components/sections/AudienceCapabilities";
import FeasibilityEngine from "@/components/feasibility/FeasibilityEngine";
import QualityCompliance from "@/components/sections/QualityCompliance";
import SocialProof from "@/components/sections/SocialProof";
import GlobalCoverageMap from "@/components/sections/GlobalCoverageMap";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <HeroSection />
      <CapabilitiesSection />
      <AudienceCapabilities />
      <FeasibilityEngine />
      <GlobalCoverageMap />
      <QualityCompliance />
      <SocialProof />
      <Footer />
    </main>
  );
}
