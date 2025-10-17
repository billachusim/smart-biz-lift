import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
}

export const ServiceCard = ({ icon: Icon, title, problem, solution }: ServiceCardProps) => {
  return (
    <Card className="gradient-card shadow-soft hover:shadow-large transition-smooth group hover:scale-105 border-border/50">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-smooth">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-destructive mb-1">The Problem:</p>
          <CardDescription>{problem}</CardDescription>
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary mb-1">AI Solution:</p>
          <CardDescription>{solution}</CardDescription>
        </div>
        <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};
