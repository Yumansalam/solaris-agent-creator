import { Bot, Zap, Target, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Tailored AI solutions designed specifically for your business needs",
  },
  {
    icon: Zap,
    title: "Quick Implementation",
    description: "Get up and running with your AI agent in days, not months",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focus on achieving your business objectives with precision",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Your AI agent works round the clock, ensuring constant productivity",
  },
];

export const Features = () => {
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-solaris-dark to-solaris-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why Choose Solaris AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 bg-white/10 backdrop-blur-lg border-solaris-primary/20 hover:border-solaris-primary transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-solaris-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};