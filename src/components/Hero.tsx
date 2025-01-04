import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export const Hero = () => {
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

      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Bot className="w-8 h-8 text-solaris-primary animate-pulse" />
          <span className="text-white/80 font-medium">Powered by Advanced AI</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-solaris-primary to-solaris-light">
            Intelligent AI Agents
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Create custom AI solutions tailored to your business needs using our
          cutting-edge no-code platform
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToQuestionnaire}
            className="bg-solaris-primary hover:bg-solaris-accent text-white px-8 py-6 rounded-full text-lg group transition-all duration-300 ease-in-out"
          >
            Get Started Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            className="border-solaris-primary text-white hover:bg-solaris-primary/20"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};