import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Bloom Salon",
    text: "PR Faculty saved me 20+ hours a week. The AI handles my social media, reviews, and appointments while I focus on my clients.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    business: "Rodriguez Plumbing",
    text: "I had zero online presence. Now I have a website, active social media, and customers finding me on Google. Game changer!",
    rating: 5
  },
  {
    name: "Emily Thompson",
    business: "Sweet Treats Bakery",
    text: "The review management alone is worth it. AI responds professionally to every review and alerts me to any issues instantly.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Loved by Small Business Owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses that trust PR Faculty to automate their operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card shadow-medium animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
