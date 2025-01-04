import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-solaris-dark/80 backdrop-blur-lg border-b border-solaris-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Solaris AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Button variant="outline" className="border-solaris-primary text-white hover:bg-solaris-primary">
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