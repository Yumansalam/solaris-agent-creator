import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getAIRecommendations } from "@/utils/aiRecommendations";

export const Questionnaire = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState("");
  const [formData, setFormData] = useState({
    businessType: "",
    challenges: "",
    goals: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Store API key in localStorage
      if (apiKey) {
        localStorage.setItem('DEEPSEEK_API_KEY', apiKey);
      }

      // Get AI recommendations
      const aiRecommendations = await getAIRecommendations(formData);
      setRecommendations(aiRecommendations);
      setStep(4);

      toast({
        title: "Analysis Complete",
        description: "We've analyzed your needs and generated AI recommendations!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error generating recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
                <div>
                  <Label className="text-white">Deepseek API Key</Label>
                  <Input
                    type="password"
                    placeholder="Enter your Deepseek API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Required for AI recommendations. Your key will be stored locally.
                  </p>
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
                    disabled={loading || !apiKey}
                  >
                    {loading ? "Analyzing..." : "Get Recommendations"}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && recommendations && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Your AI Solution Recommendations
                  </h3>
                  <div className="bg-white/5 p-4 rounded-lg text-white whitespace-pre-line">
                    {recommendations}
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      businessType: "",
                      challenges: "",
                      goals: "",
                    });
                    setRecommendations("");
                  }}
                  className="w-full bg-solaris-primary hover:bg-solaris-accent"
                >
                  Start New Analysis
                </Button>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};