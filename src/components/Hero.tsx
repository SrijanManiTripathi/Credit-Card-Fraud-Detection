import { Shield, AlertTriangle, CheckCircle2, Flag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-12 md:py-20 overflow-hidden">
      {/* Indian Tricolor Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 z-20">
        <div className="h-full flex">
          <div className="flex-1 bg-[hsl(25,100%,58%)]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[hsl(148,62%,28%)]"></div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[hsl(25,100%,58%)]/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[hsl(148,62%,28%)]/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Flag Icon with Animation */}
          <div className="flex justify-center mb-6 slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-india-shine opacity-20 blur-xl rounded-full"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 pulse-glow">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg" />
                <Flag className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 text-[hsl(25,100%,58%)] flag-wave" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6 slide-up" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-[hsl(25,100%,58%)]" />
            <span className="text-sm font-semibold text-white">भारत सरकार | Government of India Initiative</span>
          </div>
          
          <h1 className="mb-6 text-primary-foreground slide-up leading-tight" style={{ animationDelay: '0.2s' }}>
            Secure Your Financial Future
          </h1>
          
          <p className="text-lg md:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.3s' }}>
            भारत में वित्तीय सुरक्षा | Protect yourself from credit card and UPI fraud with RBI & NPCI-guided security measures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-base md:text-lg shadow-elevated bg-[hsl(25,100%,58%)] hover:bg-[hsl(25,100%,65%)] text-white font-semibold px-8 py-6 transition-spring hover:scale-105">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Check Transaction Safety
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg border-2 border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 transition-spring hover:scale-105">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Report Fraud Now
            </Button>
          </div>

          {/* Live Ticker with Indian Accent */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border-2 border-white/20 shadow-elevated slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[hsl(25,100%,58%)] rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-[hsl(148,62%,28%)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                <span className="hidden sm:inline">🇮🇳</span> Live: RBI & NPCI Guidelines
              </span>
            </div>
            <div className="overflow-hidden">
              <div className="ticker-scroll flex gap-6 md:gap-8 whitespace-nowrap text-xs md:text-sm text-white/90 font-medium">
                <span>🛡️ Device-based card tokenization mandatory from Oct 2022</span>
                <span>🔐 Two-factor authentication required for all online transactions</span>
                <span>📊 Risk-based transaction limits implemented</span>
                <span>👁️ Merchant fraud monitoring enhanced</span>
                <span>✅ UPI collect request safety measures active</span>
                <span>🇮🇳 Digital India secure payments initiative</span>
                {/* Duplicate for seamless scroll */}
                <span>🛡️ Device-based card tokenization mandatory from Oct 2022</span>
                <span>🔐 Two-factor authentication required for all online transactions</span>
                <span>📊 Risk-based transaction limits implemented</span>
                <span>👁️ Merchant fraud monitoring enhanced</span>
                <span>✅ UPI collect request safety measures active</span>
                <span>🇮🇳 Digital India secure payments initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Tricolor Pattern */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-10">
        <div className="w-full h-1/3 bg-[hsl(25,100%,58%)] rounded-full blur-3xl"></div>
        <div className="w-full h-1/3 bg-white rounded-full blur-3xl"></div>
        <div className="w-full h-1/3 bg-[hsl(148,62%,28%)] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute -top-10 -right-10 w-64 h-64 opacity-10">
        <div className="w-full h-1/3 bg-[hsl(148,62%,28%)] rounded-full blur-3xl"></div>
        <div className="w-full h-1/3 bg-white rounded-full blur-3xl"></div>
        <div className="w-full h-1/3 bg-[hsl(25,100%,58%)] rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
