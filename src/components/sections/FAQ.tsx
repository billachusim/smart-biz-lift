import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI actually work?",
    answer: "Our AI agents are trained on millions of business interactions. They learn your brand voice, monitor your online presence, and automate repetitive tasks like responding to reviews, scheduling social posts, and managing appointments - all while you maintain full control and oversight."
  },
  {
    question: "Can I use PR Faculty if I have no online presence?",
    answer: "Absolutely! Our Digital Presence Builder is specifically designed for businesses with no website or social media. We'll create your first website, set up your social profiles, optimize your Google Business listing, and even generate your first marketing content - all guided by AI."
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are up and running in under 15 minutes. Connect your accounts (or let us create them), answer a few questions about your business, and our AI takes care of the rest. You'll see your first automated post, review response, or appointment reminder within hours."
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "You're always in control. You can review AI-generated content before it goes live, set approval workflows, and customize AI responses. Plus, our AI improves over time by learning from your edits and preferences."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts. Cancel your subscription anytime from your dashboard. You'll keep access until the end of your billing period, and you can export all your data before leaving."
  },
  {
    question: "Do you integrate with my existing tools?",
    answer: "PR Faculty integrates with 100+ platforms including Google, Facebook, Instagram, WordPress, QuickBooks, Stripe, and most major business tools. If you use it for your business, chances are we connect with it."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about PR Faculty
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="gradient-card shadow-soft rounded-lg px-6 border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-secondary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
