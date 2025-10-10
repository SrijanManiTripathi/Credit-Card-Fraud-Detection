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
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-destructive" />
            <h2 className="mb-4">Latest Fraud Tactics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about emerging scams and learn how to protect yourself
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scams.map((scam, index) => {
              const Icon = scam.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-card-hover transition-smooth border-t-4 border-t-destructive"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-destructive/10">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <Badge
                      variant={scam.severity === "critical" ? "destructive" : "secondary"}
                      className="font-semibold"
                    >
                      {scam.severity === "critical" ? "CRITICAL" : 
                       scam.severity === "high" ? "HIGH RISK" : "MEDIUM"}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{scam.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
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

          <div className="mt-10 p-6 bg-muted rounded-lg border border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-secondary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Spot a New Scam?</h3>
                <p className="text-muted-foreground text-sm">
                  Report emerging fraud patterns to help protect the community. Your report helps regulatory authorities take action.
                </p>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-smooth whitespace-nowrap">
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
