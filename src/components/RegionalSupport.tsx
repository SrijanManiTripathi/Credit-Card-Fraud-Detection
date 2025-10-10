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
    <section className="relative py-12 md:py-20 bg-gradient-trust overflow-hidden">
      {/* Decorative Tricolor */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[hsl(25,100%,58%)]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[hsl(148,62%,28%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12 slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4">
              <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="mb-4">Regional Resources & Support</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              क्षेत्रीय सहायता | Access localized help in your preferred language and connect with regional authorities
            </p>
          </div>

          {/* Language Selector */}
          <Card className="p-5 md:p-6 mb-6 md:mb-8 border-2 border-border slide-up" style={{ animationDelay: '0.1s' }}>
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
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 slide-up" style={{ animationDelay: '0.2s' }}>
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              State-Level Consumer Helplines
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {stateHelplines.map((state, index) => (
                <Card key={index} className="p-4 md:p-5 hover:shadow-card-hover transition-spring hover:scale-[1.02] border-l-4 border-l-primary slide-up" style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                  <h4 className="font-bold text-base md:text-lg mb-2">{state.state}</h4>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                      <span className="font-bold text-primary">{state.phone}</span>
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">
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
          <Card className="p-5 md:p-6 bg-gradient-green-navy text-white border-2 border-[hsl(148,62%,28%)] slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6">
              <FileText className="w-7 h-7 md:w-8 md:h-8 text-white flex-shrink-0 drop-shadow-lg" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Downloadable Guides</h3>
                <p className="text-white/90 text-sm md:text-base">
                  Step-by-step fraud response guides and complaint templates
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              <Button variant="outline" className="gap-2 justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-sm md:text-base transition-spring hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="truncate">"What to Do if Defrauded"</span>
              </Button>
              <Button variant="outline" className="gap-2 justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-sm md:text-base transition-spring hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="truncate">"धोखाधड़ी होने पर क्या करें"</span>
              </Button>
              <Button variant="outline" className="gap-2 justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-sm md:text-base transition-spring hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="truncate">Bank Complaint Template</span>
              </Button>
              <Button variant="outline" className="gap-2 justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-sm md:text-base transition-spring hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="truncate">FIR Filing Checklist</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegionalSupport;
