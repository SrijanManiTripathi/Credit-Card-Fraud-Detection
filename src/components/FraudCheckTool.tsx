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
  const [progress, setProgress] = useState(0);

  const handleCheck = () => {
    setIsChecking(true);
    setProgress(0);
    
    // Simulate progressive loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Random demo result with weighted probability for demo
      const results: RiskLevel[] = ["safe", "suspicious", "fraud"];
      const weights = [0.6, 0.3, 0.1]; // More likely to be safe for demo
      const random = Math.random();
      let result: RiskLevel = "safe";
      
      if (random < weights[2]) result = "fraud";
      else if (random < weights[1] + weights[2]) result = "suspicious";
      
      setTimeout(() => {
        setRiskLevel(result);
        setIsChecking(false);
        setProgress(0);
      }, 500);
    }, 2500);
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
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden" id="fraud-check">
      {/* Enhanced Indian Flag Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex shadow-lg">
        <div className="flex-1 bg-gradient-to-r from-[hsl(25,100%,55%)] to-[hsl(25,100%,65%)]"></div>
        <div className="flex-1 bg-gradient-to-r from-white to-gray-50"></div>
        <div className="flex-1 bg-gradient-to-r from-[hsl(148,62%,25%)] to-[hsl(148,62%,35%)]"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(25,100%,58%)]/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(148,62%,28%)]/5 to-transparent rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-14 slide-up">
            <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,100%,58%)]/20 via-[hsl(148,62%,28%)]/10 to-[hsl(217,91%,35%)]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-full p-5 md:p-6 shadow-lg border border-gray-200 group-hover:scale-110 transition-all duration-300">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-black">
              Check Transaction Safety
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4 max-w-2xl mx-auto leading-relaxed">
              <span className="text-[hsl(25,100%,58%)] font-bold">लेनदेन सुरक्षा जांच</span>
              <br />
              Verify UPI, card, and netbanking transactions for fraud indicators with AI-powered analysis
            </p>
          </div>

          <Card className="p-8 md:p-10 shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl slide-up relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(25,100%,58%)] via-white to-[hsl(148,62%,28%)]"></div>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCheck();
              }}
              className="space-y-8"
            >
              <div className="group">
                <Label htmlFor="txn-type" className="text-base font-semibold text-gray-700 mb-3 block">
                  Transaction Type
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="txn-type" className="h-14 text-lg border-2 border-gray-200 focus:border-[hsl(25,100%,58%)] rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200">
                    <SelectValue placeholder="Select transaction type (UPI/Card/Netbanking)" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2 shadow-lg">
                    <SelectItem value="upi" className="text-lg py-3 hover:bg-gradient-to-r hover:from-[hsl(25,100%,58%)]/10 hover:to-transparent">
                      🔄 UPI Payment
                    </SelectItem>
                    <SelectItem value="card" className="text-lg py-3 hover:bg-gradient-to-r hover:from-[hsl(25,100%,58%)]/10 hover:to-transparent">
                      💳 Credit/Debit Card
                    </SelectItem>
                    <SelectItem value="netbanking" className="text-lg py-3 hover:bg-gradient-to-r hover:from-[hsl(25,100%,58%)]/10 hover:to-transparent">
                      🏦 Net Banking
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="group">
                <Label htmlFor="amount" className="text-base font-semibold text-gray-700 mb-3 block">
                  Transaction Amount (₹)
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount in INR, e.g., 1500"
                    className="h-14 text-lg pl-12 border-2 border-gray-200 focus:border-[hsl(25,100%,58%)] rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-semibold">
                    ₹
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="merchant">Merchant/Beneficiary (VPA / Account / Merchant ID)</Label>
                <Input
                  id="merchant"
                  placeholder="e.g., merchant@paytm or account number / UPI ID"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="device">Device ID (Optional)</Label>
                  <Input
                    id="device"
                    placeholder="Device IMEI or token (optional)"
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
                className="w-full h-16 bg-gradient-to-r from-[hsl(25,100%,58%)] to-[hsl(25,100%,68%)] hover:from-[hsl(25,100%,65%)] hover:to-[hsl(25,100%,75%)] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                disabled={isChecking}
              >
                {isChecking ? (
                  <div className="flex items-center justify-center">
                    <div className="flex space-x-1 mr-3">
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span>Analyzing Transaction...</span>
                    {progress > 0 && (
                      <div className="absolute bottom-0 left-0 h-1 bg-white/50 transition-all duration-200" style={{ width: `${progress}%` }}></div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Search className="mr-3 h-6 w-6 relative z-10" />
                    <span className="relative z-10">Check Transaction Safety</span>
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
