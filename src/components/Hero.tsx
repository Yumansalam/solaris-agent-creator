import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToQuestionnaire = () => {
    const element = document.getElementById("questionnaire");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-solaris-dark via-solaris-secondary to-solaris-primary p-4">
      <div className="text-center space-y-8 max-w-4xl animate-float">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business with{" "}
          <span className="text-solaris-primary">AI Agents</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Custom AI solutions built specifically for your business needs using
          cutting-edge no-code tools
        </p>
        <Button
          onClick={scrollToQuestionnaire}
          className="bg-solaris-primary hover:bg-solaris-accent text-white px-8 py-6 rounded-full text-lg group transition-all duration-300 ease-in-out"
        >
          Start Your AI Journey
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};