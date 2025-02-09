import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-solaris-dark to-solaris-secondary/30 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h1>
        <p className="text-gray-300 mb-8 text-center">
          Sign in functionality coming soon. We're working hard to bring you the best experience.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="w-full bg-solaris-primary hover:bg-solaris-primary/90"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default SignIn;