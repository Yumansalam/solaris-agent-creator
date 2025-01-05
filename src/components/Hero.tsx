import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToQuestionnaire = () => {
    const element = document.getElementById("questionnaire");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-solaris-dark via-solaris-secondary to-solaris-primary opacity-90" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-solaris-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-solaris-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-solaris-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Bot className="w-8 h-8 text-solaris-primary animate-pulse" />
            <span className="text-white/80 font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solaris-primary to-solaris-light">
              Cubix Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create custom AI solutions tailored to your business needs using our
            cutting-edge no-code platform. Experience the future of automation with
            our advanced AI agents designed to transform your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => navigate('/demo')}
              className="bg-solaris-primary hover:bg-solaris-accent text-white px-8 py-6 rounded-full text-lg group transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
              View Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => navigate('/register')}
              variant="outline"
              className="border-solaris-primary text-white hover:bg-solaris-primary/20 px-8 py-6 rounded-full text-lg w-full sm:w-auto"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};