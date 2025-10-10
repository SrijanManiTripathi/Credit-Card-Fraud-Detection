import { useState } from "react";
import { Search, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type RiskLevel = "safe" | "suspicious" | "fraud" | null;

const FraudCheckTool = () => {
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = () => {
    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      // Random demo result
      const results: RiskLevel[] = ["safe", "suspicious", "fraud"];
      setRiskLevel(results[Math.floor(Math.random() * results.length)]);
      setIsChecking(false);
    }, 2000);
  };

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case "safe":
        return "text-success";
      case "suspicious":
        return "text-secondary";
      case "fraud":
        return "text-destructive";
      default:
        return "";
    }
  };

  const getRiskIcon = (level: RiskLevel) => {
    switch (level) {
      case "safe":
        return <CheckCircle className="w-16 h-16 text-success" />;
      case "suspicious":
        return <AlertCircle className="w-16 h-16 text-secondary" />;
      case "fraud":
        return <XCircle className="w-16 h-16 text-destructive" />;
      default:
        return null;
    }
  };

  const getRiskMessage = (level: RiskLevel) => {
    switch (level) {
      case "safe":
        return {
          title: "Transaction Appears Safe",
          description: "No suspicious patterns detected. This transaction follows normal behavior patterns.",
          action: "You can proceed with this transaction."
        };
      case "suspicious":
        return {
          title: "Transaction Requires Verification",
          description: "Unusual pattern detected: High-value P2P collect from new beneficiary.",
          action: "Verify with the beneficiary before proceeding. Contact your bank if unsure."
        };
      case "fraud":
        return {
          title: "High Fraud Risk Detected",
          description: "Multiple red flags: Unknown merchant, suspicious location, unusual amount pattern.",
          action: "DO NOT PROCEED. Block this transaction and report to your bank immediately."
        };
      default:
        return null;
    }
  };

  return (
    <section className="relative py-12 md:py-20 bg-background overflow-hidden">
      {/* Indian Flag Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[hsl(25,100%,58%)]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[hsl(148,62%,28%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12 slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4 pulse-glow">
              <Search className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="mb-4">Check Transaction Safety</h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              लेनदेन सुरक्षा जांच | Use our AI-powered fraud detection to verify transaction safety (Demo)
            </p>
          </div>

          <Card className="p-5 md:p-8 shadow-elevated border-2 border-border slide-up" style={{ animationDelay: '0.1s' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCheck();
              }}
              className="space-y-6"
            >
              <div>
                <Label htmlFor="txn-type">Transaction Type</Label>
                <Select>
                  <SelectTrigger id="txn-type">
                    <SelectValue placeholder="Select transaction type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upi">UPI Payment</SelectItem>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="netbanking">Net Banking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Transaction Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  className="text-lg"
                />
              </div>

              <div>
                <Label htmlFor="merchant">Merchant/Beneficiary VPA</Label>
                <Input
                  id="merchant"
                  placeholder="e.g., merchant@paytm or 9876543210@ybl"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="device">Device ID (Optional)</Label>
                  <Input
                    id="device"
                    placeholder="Your device identifier"
                  />
                </div>
                <div>
                  <Label htmlFor="location">State/Region</Label>
                  <Select>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mh">Maharashtra</SelectItem>
                      <SelectItem value="dl">Delhi</SelectItem>
                      <SelectItem value="ka">Karnataka</SelectItem>
                      <SelectItem value="tn">Tamil Nadu</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[hsl(25,100%,58%)] hover:bg-[hsl(25,100%,65%)] text-white font-bold transition-spring hover:scale-105"
                size="lg"
                disabled={isChecking}
              >
                {isChecking ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Analyzing Transaction...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Check Transaction Safety
                  </>
                )}
              </Button>
            </form>

            {riskLevel && (
              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center mb-6">
                  {getRiskIcon(riskLevel)}
                  <h3 className={`text-2xl font-bold mt-4 mb-2 ${getRiskColor(riskLevel)}`}>
                    {getRiskMessage(riskLevel)?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {getRiskMessage(riskLevel)?.description}
                  </p>
                </div>

                <div className={`p-4 rounded-lg border-2 ${
                  riskLevel === "safe" ? "bg-success/10 border-success" :
                  riskLevel === "suspicious" ? "bg-secondary/10 border-secondary" :
                  "bg-destructive/10 border-destructive"
                }`}>
                  <h4 className="font-bold mb-2">Recommended Action:</h4>
                  <p className="text-sm">{getRiskMessage(riskLevel)?.action}</p>
                </div>

                {riskLevel === "fraud" && (
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button variant="destructive" className="flex-1">
                      Block & Report to Bank
                    </Button>
                    <Button variant="outline" className="flex-1">
                      File Cybercrime Report
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
            <p className="font-semibold mb-1">Privacy Notice:</p>
            <p>
              This tool does not store UPI PINs, CVVs, or OTPs. All data is encrypted and processed
              according to RBI guidelines. Transaction data is retained for 90 days unless you consent
              to longer storage for model improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudCheckTool;
