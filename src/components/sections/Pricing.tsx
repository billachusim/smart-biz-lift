import { PricingCard } from "@/components/ui/PricingCard";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out our AI tools",
    features: [
      "Daily AI social post ideas",
      "1 connected social account",
      "Basic review alerts",
      "Monthly business summary",
      "AI assistant chat support"
    ]
  },
  {
    name: "Basic",
    price: "$19",
    period: "month",
    description: "Essential automation for growing businesses",
    features: [
      "Social scheduler (3 accounts)",
      "Mini CRM for contacts",
      "Appointment automation",
      "Blog writer (2 posts/month)",
      "3-platform reputation tracking",
      "Email support"
    ]
  },
  {
    name: "Premium",
    price: "$49",
    period: "month",
    description: "Complete business automation suite",
    highlighted: true,
    features: [
      "Everything in Basic, plus:",
      "Staff payroll & shift management",
      "Compliance & deadline tracker",
      "Legal document generator",
      "Unlimited social accounts",
      "SEO dashboard & analytics",
      "Ad campaign manager",
      "5 team user seats",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and multi-location businesses",
    features: [
      "Everything in Premium, plus:",
      "Multi-business dashboard",
      "White-label branding",
      "Custom AI agent development",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics & reporting",
      "SLA guarantee"
    ]
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include core AI features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
