import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Questionnaire } from "@/components/Questionnaire";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-solaris-dark">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Questionnaire />
      <Footer />
    </div>
  );
};

export default Index;