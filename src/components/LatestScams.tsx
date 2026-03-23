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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-red-50/30 via-white to-orange-50/20 overflow-hidden" id="latest-scams">
      {/* Enhanced Indian Tricolor Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 flex shadow-sm">
        <div className="flex-1 bg-gradient-to-r from-[hsl(25,100%,55%)] to-[hsl(25,100%,65%)]"></div>
        <div className="flex-1 bg-gradient-to-r from-white to-gray-50"></div>
        <div className="flex-1 bg-gradient-to-r from-[hsl(148,62%,25%)] to-[hsl(148,62%,35%)]"></div>
      </div>

      {/* Warning-themed background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 slide-up">
            <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-red-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-red-50 rounded-full p-5 md:p-6 shadow-lg border-2 border-red-100 group-hover:scale-110 transition-all duration-300">
                <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-600" />
              </div>
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-gray-800 via-red-700 to-gray-800 bg-clip-text text-transparent font-black">
              Latest Fraud Tactics
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              <span className="text-red-600 font-bold">नवीनतम घोटाले</span>
              <br />
              Stay informed about emerging scams targeting Indian financial systems and learn protective measures
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
