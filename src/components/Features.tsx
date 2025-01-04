import { Bot, Zap, Target, Clock, Shield, Code } from "lucide-react";
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
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
  },
  {
    icon: Code,
    title: "No-Code Platform",
    description: "Create and customize AI agents without any coding knowledge",
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Solaris AI?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of business automation with our advanced AI platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-solaris-primary/20 hover:border-solaris-primary transition-all duration-300 group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-solaris-primary to-solaris-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative">
                  <feature.icon className="w-12 h-12 text-solaris-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};