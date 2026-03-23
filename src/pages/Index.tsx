import Hero from "@/components/Hero";
import RegulatoryTimeline from "@/components/RegulatoryTimeline";
import LatestScams from "@/components/LatestScams";
import SecurityChecklist from "@/components/SecurityChecklist";
import FraudCheckTool from "@/components/FraudCheckTool";
import RegionalSupport from "@/components/RegionalSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="relative bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-[hsl(25,100%,58%)]/20 to-transparent"></div>
        <div className="absolute top-64 right-1/4 w-px h-32 bg-gradient-to-b from-[hsl(148,62%,28%)]/20 to-transparent"></div>
        
        <RegulatoryTimeline />
        <LatestScams />
        <SecurityChecklist />
        <FraudCheckTool />
        <RegionalSupport />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
