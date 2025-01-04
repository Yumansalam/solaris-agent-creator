import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Questionnaire = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    challenges: "",
    currentProcesses: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission Received",
      description: "We'll analyze your needs and get back to you shortly!",
    });
  };

  return (
    <div
      id="questionnaire"
      className="min-h-screen bg-solaris-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Let's Find Your Perfect AI Solution
        </h2>
        <Card className="p-6 bg-white/10 backdrop-blur-lg border-solaris-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white">What type of business do you run?</Label>
                  <Input
                    placeholder="E.g., E-commerce, SaaS, Consulting..."
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-solaris-primary hover:bg-solaris-accent"
                >
                  Next
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white">
                    What challenges are you looking to solve with AI?
                  </Label>
                  <Textarea
                    placeholder="Describe your current challenges..."
                    value={formData.challenges}
                    onChange={(e) =>
                      setFormData({ ...formData, challenges: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="w-full"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-full bg-solaris-primary hover:bg-solaris-accent"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white">What are your main goals?</Label>
                  <Textarea
                    placeholder="What do you want to achieve with AI?"
                    value={formData.goals}
                    onChange={(e) =>
                      setFormData({ ...formData, goals: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="w-full"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="w-full bg-solaris-primary hover:bg-solaris-accent"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};