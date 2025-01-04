import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Questionnaire } from "@/components/Questionnaire";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-solaris-dark">
      <Navigation />
      <Hero />
      <Features />
      <Questionnaire />
    </div>
  );
};

export default Index;