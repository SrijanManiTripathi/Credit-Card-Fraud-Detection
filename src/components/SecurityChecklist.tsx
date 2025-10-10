import { useState } from "react";
import { CheckCircle2, Circle, Shield, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const checklistItems = [
  {
    step: 1,
    title: "Secure Your Device",
    description: "Install antivirus software, enable device lock with strong PIN/biometric, and keep OS updated.",
    details: [
      "Use screen lock with 6+ digit PIN or biometric",
      "Install reputable antivirus/anti-malware",
      "Enable automatic security updates",
      "Avoid installing apps from unknown sources"
    ]
  },
  {
    step: 2,
    title: "Enable Card Tokenization",
    description: "Activate device-based card tokenization on all your saved cards for online merchants.",
    details: [
      "Remove saved card details from websites",
      "Use tokenized cards for recurring payments",
      "Enable 'lock card' feature when not in use",
      "Check with your bank for tokenization status"
    ]
  },
  {
    step: 3,
    title: "Strengthen UPI Security",
    description: "Set a strong UPI PIN, enable app lock, and review UPI collect request settings.",
    details: [
      "Use 6-digit UPI PIN (not birthdate or 1234)",
      "Enable biometric lock on UPI apps",
      "Review and limit auto-approve settings",
      "Link only necessary bank accounts"
    ]
  },
  {
    step: 4,
    title: "Never Share Sensitive Info",
    description: "Banks never ask for OTP, PIN, CVV, or card details. Never share these under any circumstance.",
    details: [
      "OTP is valid only for 10 minutes - never share",
      "CVV should only be entered on secure payment pages",
      "UPI PIN should never be shared with anyone",
      "Banks won't call asking to 'verify' these details"
    ]
  },
  {
    step: 5,
    title: "Enable Transaction Alerts",
    description: "Activate SMS, email, and app notifications for all transaction types immediately.",
    details: [
      "Enable alerts for transactions above ₹1",
      "Register your current mobile number with bank",
      "Subscribe to email transaction statements",
      "Turn on push notifications in banking apps"
    ]
  },
  {
    step: 6,
    title: "Monitor Account Activity",
    description: "Review your bank statements weekly and report unauthorized transactions within 3 days.",
    details: [
      "Check statements every 3-7 days",
      "Set up low-balance alerts",
      "Report suspicious activity immediately",
      "Keep records of all transactions"
    ]
  },
  {
    step: 7,
    title: "Know How to Report Fraud",
    description: "Save helpline numbers and understand the escalation process for fraud reporting.",
    details: [
      "Bank helpline (within 3 days of fraud)",
      "Cybercrime portal: cybercrime.gov.in",
      "RBI Ombudsman for disputes",
      "Local police station for FIR"
    ]
  }
];

const SecurityChecklist = () => {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleStep = (step: number) => {
    setCompleted(prev => {
      const newSet = new Set(prev);
      if (newSet.has(step)) {
        newSet.delete(step);
      } else {
        newSet.add(step);
      }
      return newSet;
    });
  };

  const progress = Math.round((completed.size / checklistItems.length) * 100);

  return (
    <section className="relative py-12 md:py-20 bg-gradient-trust overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-[hsl(25,100%,58%)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-[hsl(148,62%,28%)]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12 slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4 pulse-glow">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="mb-4">7-Step Security Onboarding</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              सुरक्षा चेकलिस्ट | Complete these essential steps to protect your financial accounts from fraud
            </p>
          </div>

          {/* Enhanced Progress Bar with Tricolor */}
          <div className="mb-8 md:mb-10 slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm md:text-base font-bold text-foreground">Your Progress</span>
              <span className="text-sm md:text-base font-bold text-primary">{progress}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden border-2 border-border shadow-inner">
              <div
                className="h-full transition-all duration-700 ease-out relative"
                style={{ 
                  width: `${progress}%`,
                  background: progress === 100 
                    ? 'linear-gradient(90deg, hsl(25 100% 58%), hsl(148 62% 28%))' 
                    : 'hsl(217 91% 35%)'
                }}
              >
                {progress > 0 && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              ✓ {completed.size} of {checklistItems.length} steps completed
            </p>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3 md:space-y-4 mb-8">
            {checklistItems.map((item) => {
              const isCompleted = completed.has(item.step);
              return (
                <Card
                  key={item.step}
                  className={`p-4 md:p-6 transition-spring cursor-pointer hover:scale-[1.01] slide-up ${
                    isCompleted
                      ? "border-2 border-success bg-success/5 shadow-card"
                      : "border-2 border-border hover:border-primary hover:shadow-card"
                  }`}
                  style={{ animationDelay: `${0.2 + item.step * 0.05}s` }}
                  onClick={() => toggleStep(item.step)}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-success" />
                      ) : (
                        <Circle className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <span className="inline-block text-xs font-bold text-white bg-primary px-3 py-1 rounded-full">
                            STEP {item.step}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold mt-2 leading-tight">{item.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-sm md:text-base text-muted-foreground mb-3">{item.description}</p>
                      
                      <ul className="space-y-1.5 md:space-y-2 ml-2 md:ml-4">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-xs md:text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Download Section */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="lg" className="gap-2 text-sm md:text-base font-semibold hover:scale-105 transition-spring">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Download Checklist PDF </span>(English)
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-sm md:text-base font-semibold hover:scale-105 transition-spring">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">चेकलिस्ट डाउनलोड करें </span>(हिन्दी)
            </Button>
          </div>

          {completed.size === checklistItems.length && (
            <div className="mt-8 p-5 md:p-6 bg-gradient-india-shine rounded-xl border-2 border-[hsl(148,62%,28%)] text-center slide-up shadow-elevated">
              <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 text-[hsl(148,62%,28%)] drop-shadow-lg" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                🎉 Congratulations! Your Account is Secure
              </h3>
              <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto">
                बधाई हो! You've completed all essential security steps. Remember to review these settings quarterly and stay updated on new security measures.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityChecklist;
