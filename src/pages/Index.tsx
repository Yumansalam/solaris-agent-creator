import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Questionnaire } from "@/components/Questionnaire";

const Index = () => {
  return (
    <div className="min-h-screen bg-solaris-dark">
      <Hero />
      <Features />
      <Questionnaire />
    </div>
  );
};

export default Index;