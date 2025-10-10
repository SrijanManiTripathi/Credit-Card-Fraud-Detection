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
      <RegulatoryTimeline />
      <LatestScams />
      <SecurityChecklist />
      <FraudCheckTool />
      <RegionalSupport />
      <Footer />
    </div>
  );
};

export default Index;
