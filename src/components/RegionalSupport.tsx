import { Globe, Phone, FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" }
];

const stateHelplines = [
  { state: "Maharashtra", phone: "1800-22-4477", ombudsman: "Mumbai" },
  { state: "Delhi", phone: "011-26851111", ombudsman: "New Delhi" },
  { state: "Karnataka", phone: "1800-425-1212", ombudsman: "Bengaluru" },
  { state: "Tamil Nadu", phone: "044-25393768", ombudsman: "Chennai" },
  { state: "West Bengal", phone: "1800-345-3344", ombudsman: "Kolkata" },
  { state: "Gujarat", phone: "1800-233-5500", ombudsman: "Ahmedabad" }
];

const RegionalSupport = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-trust">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="mb-4">Regional Resources & Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access localized help in your preferred language and connect with regional authorities
            </p>
          </div>

          {/* Language Selector */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Globe className="w-6 h-6 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Select Your Preferred Language</h3>
                <p className="text-sm text-muted-foreground">
                  All security guides and resources available in multiple Indian languages
                </p>
              </div>
              <Select defaultValue="en">
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.native} ({lang.name})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* State Helplines */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              State-Level Consumer Helplines
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {stateHelplines.map((state, index) => (
                <Card key={index} className="p-5 hover:shadow-card-hover transition-smooth">
                  <h4 className="font-bold text-lg mb-2">{state.state}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{state.phone}</span>
                    </div>
                    <div className="text-muted-foreground">
                      RBI Ombudsman: {state.ombudsman}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* National Resources */}
          <Card className="p-6 mb-8 border-l-4 border-l-primary">
            <h3 className="text-xl font-bold mb-4">National Fraud Reporting Channels</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">RBI Banking Ombudsman</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For banking disputes and fraud complaints
                </p>
                <a
                  href="https://www.rbi.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Visit RBI Portal →
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">NPCI Grievance Cell</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For UPI and digital payment issues
                </p>
                <a
                  href="https://www.npci.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Visit NPCI Portal →
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Cybercrime Portal</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Report financial cybercrimes
                </p>
                <a
                  href="https://cybercrime.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  File Online Complaint →
                </a>
              </div>
            </div>
          </Card>

          {/* Downloadable Resources */}
          <Card className="p-6 bg-accent border-primary">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Downloadable Guides</h3>
                <p className="text-muted-foreground">
                  Step-by-step fraud response guides and complaint templates
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" className="gap-2 justify-start">
                <Download className="w-4 h-4" />
                "What to Do if Defrauded" (English)
              </Button>
              <Button variant="outline" className="gap-2 justify-start">
                <Download className="w-4 h-4" />
                "धोखाधड़ी होने पर क्या करें" (Hindi)
              </Button>
              <Button variant="outline" className="gap-2 justify-start">
                <Download className="w-4 h-4" />
                Bank Complaint Template
              </Button>
              <Button variant="outline" className="gap-2 justify-start">
                <Download className="w-4 h-4" />
                FIR Filing Checklist
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegionalSupport;
