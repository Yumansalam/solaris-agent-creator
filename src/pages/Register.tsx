import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Bot, Shield, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const plan = searchParams.get('plan');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration in Progress",
      description: "We're setting up your account. Please wait...",
    });
    // Registration logic would go here
  };

  const getPlanDetails = () => {
    switch (plan) {
      case 'starter':
        return {
          name: 'Starter',
          price: '$99',
          icon: <Zap className="w-8 h-8 text-blue-500" />,
          features: ['1 AI Agent', 'Basic Customization', 'Email Support']
        };
      case 'professional':
        return {
          name: 'Professional',
          price: '$199',
          icon: <Bot className="w-8 h-8 text-purple-500" />,
          features: ['3 AI Agents', 'Advanced Customization', 'Priority Support', 'Analytics Dashboard']
        };
      case 'enterprise':
        return {
          name: 'Enterprise',
          price: 'Custom',
          icon: <Shield className="w-8 h-8 text-green-500" />,
          features: ['Unlimited AI Agents', 'Full Customization', '24/7 Dedicated Support', 'Custom Integration']
        };
      default:
        return {
          name: 'Custom',
          price: 'Contact Sales',
          icon: <Bot className="w-8 h-8 text-gray-500" />,
          features: ['Custom Features']
        };
    }
  };

  const planDetails = getPlanDetails();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Details Card */}
          <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
            <div className="flex items-center gap-4 mb-6">
              {planDetails.icon}
              <div>
                <h2 className="text-2xl font-bold">{planDetails.name} Plan</h2>
                <p className="text-gray-400">{planDetails.price}/month</p>
              </div>
            </div>
            <div className="space-y-3">
              {planDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Registration Form Card */}
          <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <Input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <Input 
                  type="password" 
                  placeholder="••••••••"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <Input 
                  type="text" 
                  placeholder="Cubix Intelligence Inc."
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Complete Registration
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;