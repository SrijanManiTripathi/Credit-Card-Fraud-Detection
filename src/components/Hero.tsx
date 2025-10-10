import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          <h1 className="mb-6 text-primary-foreground">
            Secure Your Financial Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Protect yourself from credit card and UPI fraud with RBI & NPCI-guided security measures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg shadow-elevated">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Check Transaction Safety
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Report Fraud
            </Button>
          </div>

          {/* Live Ticker */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-foreground">
                Live: RBI & NPCI Guidelines
              </span>
            </div>
            <div className="overflow-hidden">
              <div className="ticker-scroll flex gap-8 whitespace-nowrap text-sm text-primary-foreground/80">
                <span>✓ Device-based card tokenization mandatory from Oct 2022</span>
                <span>✓ Two-factor authentication required for all online transactions</span>
                <span>✓ Risk-based transaction limits implemented</span>
                <span>✓ Merchant fraud monitoring enhanced</span>
                <span>✓ UPI collect request safety measures active</span>
                {/* Duplicate for seamless scroll */}
                <span>✓ Device-based card tokenization mandatory from Oct 2022</span>
                <span>✓ Two-factor authentication required for all online transactions</span>
                <span>✓ Risk-based transaction limits implemented</span>
                <span>✓ Merchant fraud monitoring enhanced</span>
                <span>✓ UPI collect request safety measures active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
