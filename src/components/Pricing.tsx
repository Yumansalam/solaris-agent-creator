import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div id="pricing" className="py-20 px-4 md:px-8 bg-gradient-to-b from-solaris-dark/90 to-solaris-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-solaris-primary/20 hover:border-solaris-primary transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                1 AI Agent
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Basic Customization
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Email Support
              </li>
            </ul>
            <Button 
              onClick={() => navigate('/register?plan=starter')}
              className="w-full bg-solaris-primary hover:bg-solaris-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="p-8 bg-white/5 rounded-lg backdrop-blur-sm border-2 border-solaris-primary relative hover:border-solaris-accent transition-colors">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-solaris-primary text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$199</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                3 AI Agents
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Advanced Customization
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Priority Support
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Analytics Dashboard
              </li>
            </ul>
            <Button 
              onClick={() => navigate('/register?plan=professional')}
              className="w-full bg-solaris-primary hover:bg-solaris-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-solaris-primary/20 hover:border-solaris-primary transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Unlimited AI Agents
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Full Customization
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                24/7 Dedicated Support
              </li>
              <li className="flex items-center text-gray-400">
                <Check className="w-5 h-5 text-solaris-primary mr-2" />
                Custom Integration
              </li>
            </ul>
            <Button 
              onClick={() => navigate('/register?plan=enterprise')}
              className="w-full bg-solaris-primary hover:bg-solaris-primary/90"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};