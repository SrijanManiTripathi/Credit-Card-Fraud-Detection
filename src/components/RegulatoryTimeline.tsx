import { ExternalLink, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    date: "Oct 2022",
    title: "Card Tokenization Mandate",
    description: "Device-based tokenization mandatory for all card transactions",
    status: "enforced",
    link: "https://www.rbi.org.in/"
  },
  {
    date: "Jan 2023",
    title: "Enhanced Two-Factor Auth",
    description: "Additional authentication layer for high-value transactions",
    status: "enforced",
    link: "https://www.rbi.org.in/"
  },
  {
    date: "Jun 2023",
    title: "UPI Collect Safety",
    description: "New restrictions on bulk and suspicious collect requests",
    status: "enforced",
    link: "https://www.npci.org.in/"
  },
  {
    date: "Sep 2023",
    title: "Fraud Risk Framework",
    description: "Comprehensive fraud reporting and monitoring requirements",
    status: "enforced",
    link: "https://www.rbi.org.in/"
  },
  {
    date: "Dec 2023",
    title: "Merchant Verification",
    description: "Stricter KYC norms for payment aggregators",
    status: "enforced",
    link: "https://www.rbi.org.in/"
  },
  {
    date: "Mar 2024",
    title: "Real-time Alerts",
    description: "Mandatory transaction alerts for all digital payments",
    status: "enforced",
    link: "https://www.rbi.org.in/"
  },
  {
    date: "Jun 2024",
    title: "AI-Based Monitoring",
    description: "Banks required to implement AI fraud detection systems",
    status: "upcoming",
    link: "https://www.rbi.org.in/"
  }
];

const RegulatoryTimeline = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-trust">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="mb-4 text-foreground">RBI & NPCI Regulatory Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key compliance milestones and upcoming regulations to protect digital payment users
            </p>
          </div>

          <div className="timeline-scroll pb-6">
            <div className="flex gap-6 min-w-max px-4">
              {timelineData.map((item, index) => (
                <Card
                  key={index}
                  className={`w-80 flex-shrink-0 p-6 shadow-card hover:shadow-card-hover transition-smooth border-l-4 ${
                    item.status === "enforced"
                      ? "border-l-success bg-card"
                      : "border-l-secondary bg-accent"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-bold text-primary bg-accent px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.status === "enforced"
                          ? "bg-success/10 text-success"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {item.status === "enforced" ? "Active" : "Upcoming"}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth text-sm font-medium"
                  >
                    Read Official Guideline
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Scroll horizontally to explore all regulatory updates →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryTimeline;
