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
    <section className="py-16 md:py-20 bg-gradient-trust">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="mb-4">7-Step Security Onboarding</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete these essential steps to protect your financial accounts from fraud
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">Your Progress</span>
              <span className="text-sm font-semibold text-primary">{progress}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {completed.size} of {checklistItems.length} steps completed
            </p>
          </div>

          {/* Checklist Items */}
          <div className="space-y-4 mb-8">
            {checklistItems.map((item) => {
              const isCompleted = completed.has(item.step);
              return (
                <Card
                  key={item.step}
                  className={`p-6 transition-smooth cursor-pointer ${
                    isCompleted
                      ? "border-success bg-success/5"
                      : "border-border hover:border-primary"
                  }`}
                  onClick={() => toggleStep(item.step)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs font-bold text-primary bg-accent px-2 py-1 rounded">
                            STEP {item.step}
                          </span>
                          <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      
                      <ul className="space-y-2 ml-4">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Checklist PDF (English)
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Download Checklist PDF (Hindi)
            </Button>
          </div>

          {completed.size === checklistItems.length && (
            <div className="mt-8 p-6 bg-success/10 border-2 border-success rounded-lg text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-success" />
              <h3 className="text-xl font-bold text-success mb-2">
                Congratulations! Your Account is Secure
              </h3>
              <p className="text-foreground">
                You've completed all essential security steps. Remember to review these settings quarterly and stay updated on new security measures.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityChecklist;
