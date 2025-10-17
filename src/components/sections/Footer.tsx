import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PR Faculty</h3>
            <p className="text-primary-foreground/80">
              AI-powered public relations for small business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Integrations</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">API</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 PR Faculty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
