import { ServiceCard } from "@/components/ui/ServiceCard";
import { 
  Star, 
  Calendar, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Clock, 
  FileCheck, 
  FileText, 
  GraduationCap, 
  TrendingUp,
  Globe
} from "lucide-react";

const services = [
  {
    icon: Star,
    title: "AI Reputation Assistant",
    problem: "Managing reviews across Google, Yelp, and Facebook is time-consuming and overwhelming.",
    solution: "AI monitors and replies to reviews automatically, sends alerts for negative feedback, and generates monthly reputation reports."
  },
  {
    icon: MessageSquare,
    title: "AI Social Media Scheduler",
    problem: "Creating engaging social media content and staying consistent is a daily struggle.",
    solution: "Upload your content and AI writes captions, hashtags, schedules posts, and even responds to comments and DMs."
  },
  {
    icon: Calendar,
    title: "AI Appointment Reminder & Follow-up",
    problem: "No-shows and forgotten appointments hurt your revenue and waste your time.",
    solution: "Syncs with your calendar, sends automated SMS reminders, thank-you messages, and requests feedback after appointments."
  },
  {
    icon: Users,
    title: "Mini CRM",
    problem: "Keeping track of contacts and deals in spreadsheets is messy and inefficient.",
    solution: "Simple contact and deal management for solopreneurs with AI-powered follow-ups and pre-written message templates."
  },
  {
    icon: BookOpen,
    title: "AI Blog & SEO Booster",
    problem: "Writing SEO-optimized content takes hours and you're not ranking on Google.",
    solution: "Auto-generates SEO-rich blog posts tailored to your city and niche, posts to WordPress/Wix, and tracks your ranking progress."
  },
  {
    icon: Clock,
    title: "Staff Shift & Payroll Tracker",
    problem: "Managing employee shifts and calculating payroll manually leads to errors and frustration.",
    solution: "Manage shifts, track clock-ins, and automatically calculate payroll from one simple dashboard."
  },
  {
    icon: FileCheck,
    title: "Compliance Tracker",
    problem: "Missing business license renewals, tax deadlines, or insurance dates can cost you money and legal trouble.",
    solution: "Tracks all important dates and sends automatic reminders so you never miss a deadline."
  },
  {
    icon: FileText,
    title: "AI Legal Document Assistant",
    problem: "Hiring lawyers for basic contracts and agreements is expensive and time-consuming.",
    solution: "Generate contracts, privacy policies, and service agreements instantly with built-in e-signature functionality."
  },
  {
    icon: GraduationCap,
    title: "Employee Training Portal",
    problem: "Training new staff takes time away from running your business.",
    solution: "Upload short training videos, create quizzes, and issue completion certificates automatically."
  },
  {
    icon: TrendingUp,
    title: "AI Ad & Marketing Assistant",
    problem: "Creating effective ads and managing budgets across platforms is complex and costly.",
    solution: "Generate ad copies and creatives for Meta, Google, and TikTok, set budgets, and monitor performance in real-time."
  },
  {
    icon: Globe,
    title: "Digital Presence Builder",
    problem: "Many small businesses have no online presence and don't know where to start.",
    solution: "AI-driven setup creates your first website, social pages, and Google Business profile. Auto-generates content and runs local ads to bring in customers."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Your Complete AI Business Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From marketing to operations, our AI agents handle everything so you can focus on what you do best
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
