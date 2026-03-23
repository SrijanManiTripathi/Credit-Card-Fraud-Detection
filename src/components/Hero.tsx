import { Shield, AlertTriangle, CheckCircle2, Flag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-16 md:py-24 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Indian Tricolor Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-3 z-30">
        <div className="h-full flex shadow-lg">
          <div className="flex-1 bg-gradient-to-r from-[hsl(25,100%,55%)] to-[hsl(25,100%,65%)]"></div>
          <div className="flex-1 bg-gradient-to-r from-white to-gray-50"></div>
          <div className="flex-1 bg-gradient-to-r from-[hsl(148,62%,25%)] to-[hsl(148,62%,35%)]"></div>
        </div>
      </div>

      {/* Decorative Mandala Pattern */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,91%,35%)] via-[hsl(230,85%,45%)] to-[hsl(217,91%,25%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[hsl(25,100%,58%)]/5 to-transparent"></div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(25,100%,58%)]/15 to-[hsl(25,100%,70%)]/5 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[hsl(148,62%,28%)]/15 to-[hsl(148,62%,40%)]/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 left-1/4 w-32 h-32 bg-gradient-to-br from-white/10 to-white/2 rounded-full blur-2xl float-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-br from-[hsl(25,100%,58%)]/8 to-transparent rounded-full blur-2xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Flag Icon with Modern Design */}
          <div className="flex justify-center mb-8 slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-india-shine opacity-30 blur-2xl rounded-full group-hover:opacity-50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,100%,58%)]/20 via-white/10 to-[hsl(148,62%,28%)]/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/15 backdrop-blur-md p-8 rounded-3xl border-2 border-white/30 pulse-glow flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-2xl" />
                <img src="/india-flag-simple.svg" alt="Indian Flag" className="absolute -top-3 -right-3 w-10 h-7 md:w-12 md:h-8 flag-wave shadow-lg rounded-sm" />
                {/* Decorative dots */}
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[hsl(25,100%,58%)] rounded-full animate-pulse"></div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-[hsl(148,62%,28%)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mb-8 slide-up shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-5 h-5 text-[hsl(25,100%,58%)] animate-pulse" />
            <span className="text-sm md:text-base font-bold text-white tracking-wide">भारत सरकार | Government of India Initiative</span>
            <div className="w-2 h-2 bg-[hsl(148,62%,28%)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h1 className="mb-8 text-primary-foreground slide-up leading-tight font-black tracking-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Secure Your Financial Future
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-12 text-primary-foreground/95 max-w-4xl mx-auto leading-relaxed slide-up font-medium" style={{ animationDelay: '0.3s' }}>
            <span className="text-[hsl(25,100%,70%)] font-bold">भारत में वित्तीय सुरक्षा</span>
            <br className="hidden md:block" />
            <span className="text-white/90">Protect yourself from credit card and UPI fraud with</span>
            <br className="hidden md:block" />
            <span className="text-[hsl(148,62%,40%)] font-semibold">RBI & NPCI-guided security measures</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg md:text-xl shadow-2xl bg-gradient-to-r from-[hsl(25,100%,58%)] to-[hsl(25,100%,70%)] hover:from-[hsl(25,100%,65%)] hover:to-[hsl(25,100%,75%)] text-white font-bold px-10 py-7 transition-all duration-300 hover:scale-110 hover:shadow-3xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <CheckCircle2 className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Check Transaction Safety</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg md:text-xl border-3 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary font-bold px-10 py-7 transition-all duration-300 hover:scale-110 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <AlertTriangle className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Report Fraud Now</span>
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
