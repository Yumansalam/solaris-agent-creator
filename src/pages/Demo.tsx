import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-solaris-dark to-solaris-secondary/30">
      <Clock className="w-16 h-16 text-solaris-primary mb-6 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Coming Soon</h1>
      <p className="text-gray-400 text-lg mb-8 text-center max-w-md">
        Our demo is currently under development. Check back soon to experience the power of Solaris AI.
      </p>
      <Button 
        onClick={() => navigate('/')}
        className="bg-solaris-primary hover:bg-solaris-primary/90"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Demo;