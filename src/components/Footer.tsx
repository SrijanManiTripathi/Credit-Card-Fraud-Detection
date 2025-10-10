import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8" />
                <span className="font-bold text-xl">FraudGuard India</span>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Protecting Indian citizens from financial fraud with RBI & NPCI-guided security measures.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#timeline" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Regulatory Timeline
                  </a>
                </li>
                <li>
                  <a href="#scams" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Latest Scams
                  </a>
                </li>
                <li>
                  <a href="#checklist" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Security Checklist
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Fraud Check Tool
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Resources */}
            <div>
              <h4 className="font-bold mb-4">Official Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth flex items-center gap-1"
                  >
                    RBI Official Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npci.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth flex items-center gap-1"
                  >
                    NPCI Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth flex items-center gap-1"
                  >
                    Cybercrime Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Emergency Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">National Helpline</div>
                    <div className="text-primary-foreground/80">1800-XXXX-XXX</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Report Fraud</div>
                    <div className="text-primary-foreground/80">report@fraudguard.gov.in</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-primary-foreground/20 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5" />
                <span>RBI Guidelines Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5" />
                <span>NPCI Certified Information</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5" />
                <span>WCAG AA Accessible</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
              <div>
                © 2024 FraudGuard India. A public awareness initiative.
              </div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-primary-foreground transition-smooth">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-primary-foreground transition-smooth">
                  Terms of Use
                </a>
                <a href="#compliance" className="hover:text-primary-foreground transition-smooth">
                  Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
