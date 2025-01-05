import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-solaris-dark/90 backdrop-blur-lg border-b border-solaris-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-white cursor-pointer"
            >
              Solaris AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-white hover:text-solaris-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-solaris-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-white hover:text-solaris-primary transition-colors"
            >
              Pricing
            </button>
            <Button 
              onClick={() => navigate('/demo')}
              variant="outline" 
              className="border-solaris-primary text-white hover:bg-solaris-primary"
            >
              View Demo
            </Button>
            <Button 
              className="bg-solaris-primary text-white hover:bg-solaris-primary/90"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};