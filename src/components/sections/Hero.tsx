import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-hero opacity-90 z-10"></div>
        <img 
          src={heroImage} 
          alt="AI Business Automation" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 text-background">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-powered public relations for small business</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-background leading-tight">
            Run your business.
            <br />
            <span className="text-secondary">We'll handle the rest.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
            AI tools that manage your marketing, reviews, customers, and operations — all in one dashboard.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-large group">
              Start Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 backdrop-blur-sm">
              View Plans
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-background/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                ))}
              </div>
              <span>5,000+ businesses trust PR Faculty</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-background/40"></div>
            <span>⭐ 4.9/5 average rating</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};
