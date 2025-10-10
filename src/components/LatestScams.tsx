import { AlertTriangle, Phone, Smartphone, CreditCard, ShoppingBag, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const scams = [
  {
    title: "Social Engineering & Vishing",
    icon: Phone,
    description: "Fraudsters impersonate bank officials or government agencies to extract sensitive information over phone calls.",
    redFlags: [
      "Unsolicited calls asking for OTP, PIN, or CVV",
      "Urgency tactics: 'Your account will be blocked'",
      "Requests to download remote access apps"
    ],
    actions: "Never share OTP/PIN. Banks never ask for these. Hang up and call official helpline.",
    severity: "high"
  },
  {
    title: "SIM Swap + UPI Fraud",
    icon: Smartphone,
    description: "Attackers port your phone number to gain control of UPI and banking apps linked to your mobile.",
    redFlags: [
      "Sudden loss of network signal",
      "Unexpected OTPs for SIM replacement",
      "Unauthorized transactions after network loss"
    ],
    actions: "Immediately call your telecom provider. Lock all UPI apps. Report to bank and NPCI.",
    severity: "critical"
  },
  {
    title: "Fake UPI Collect Requests",
    icon: Radio,
    description: "Scammers send fake UPI collect requests disguised as refunds or payments you're expecting.",
    redFlags: [
      "Collect request when you expect a payment",
      "Unusual merchant names or IDs",
      "High-value requests from unknown sources"
    ],
    actions: "Always verify UPI collect requests. Check sender VPA. Never approve without confirmation.",
    severity: "high"
  },
  {
    title: "Card Cloning & Skimming",
    icon: CreditCard,
    description: "Physical devices at ATMs or POS terminals capture your card details for unauthorized duplication.",
    redFlags: [
      "Loose or unusual card reader attachments",
      "Hidden cameras near PIN pads",
      "Transactions from unfamiliar merchants"
    ],
    actions: "Use chip+PIN cards. Enable device tokenization. Monitor transaction alerts immediately.",
    severity: "high"
  },
  {
    title: "Fake E-commerce Chargebacks",
    icon: ShoppingBag,
    description: "Fraudsters exploit marketplace refund policies to receive products without payment.",
    redFlags: [
      "Chargeback claims for 'non-delivery' of delivered items",
      "Multiple disputes from same buyer",
      "High-value orders with urgent delivery requests"
    ],
    actions: "Merchants: Use proof-of-delivery. Report suspicious patterns to payment aggregator.",
    severity: "medium"
  }
];

const LatestScams = () => {
  return (
    <section className="relative py-12 md:py-20 bg-background overflow-hidden">
      {/* Indian Tricolor Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[hsl(25,100%,58%)]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[hsl(148,62%,28%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12 slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-destructive/10 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
            </div>
            <h2 className="mb-4">Latest Fraud Tactics</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              नवीनतम घोटाले | Stay informed about emerging scams and learn how to protect yourself
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scams.map((scam, index) => {
              const Icon = scam.icon;
              return (
                <Card
                  key={index}
                  className="p-5 md:p-6 shadow-card hover:shadow-card-hover transition-spring hover:scale-[1.02] border-t-4 border-t-destructive slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-smooth">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                    </div>
                    <Badge
                      variant={scam.severity === "critical" ? "destructive" : "secondary"}
                      className="font-semibold"
                    >
                      {scam.severity === "critical" ? "CRITICAL" : 
                       scam.severity === "high" ? "HIGH RISK" : "MEDIUM"}
                    </Badge>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight">{scam.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                    {scam.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-destructive mb-2">🚩 Red Flags:</h4>
                    <ul className="space-y-1">
                      {scam.redFlags.map((flag, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-1">•</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <h4 className="text-sm font-bold text-success mb-1">✓ Immediate Actions:</h4>
                    <p className="text-sm text-foreground">{scam.actions}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 md:mt-10 p-5 md:p-6 bg-gradient-saffron-white rounded-xl border-2 border-[hsl(25,100%,58%)]/20 slide-up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <AlertTriangle className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-lg md:text-xl mb-1 text-white">Spot a New Scam?</h3>
                <p className="text-white/90 text-sm md:text-base">
                  Report emerging fraud patterns to help protect the community. Your report helps regulatory authorities take action.
                </p>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-white text-[hsl(25,100%,58%)] rounded-lg font-bold hover:shadow-lg transition-spring hover:scale-105 whitespace-nowrap">
                Report Scam
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestScams;
