import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero"></div>
            <span className="text-2xl font-bold text-primary">PR Faculty</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Services
            </a>
            <a href="#pricing" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground hover:text-secondary transition-smooth font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-foreground hover:text-secondary transition-smooth font-medium">
              FAQ
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="shadow-medium">
              Get Started Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <a href="#services" className="block text-foreground hover:text-secondary transition-smooth font-medium">
              Services
            </a>
            <a href="#pricing" className="block text-foreground hover:text-secondary transition-smooth font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-secondary transition-smooth font-medium">
              Testimonials
            </a>
            <a href="#faq" className="block text-foreground hover:text-secondary transition-smooth font-medium">
              FAQ
            </a>
            <Button className="w-full">
              Get Started Free
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
