import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard = ({ name, price, period, description, features, highlighted }: PricingCardProps) => {
  return (
    <Card className={`gradient-card shadow-medium transition-smooth hover:shadow-large hover:scale-105 ${
      highlighted ? "border-secondary border-2" : "border-border/50"
    }`}>
      <CardHeader>
        {highlighted && (
          <div className="bg-secondary text-secondary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full w-fit mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={highlighted ? "default" : "outline"}
        >
          {price === "Custom" ? "Contact Sales" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
};
