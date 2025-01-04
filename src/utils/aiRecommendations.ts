interface QuestionnaireData {
  businessType: string;
  challenges: string;
  goals: string;
}

export const getAIRecommendations = async (data: QuestionnaireData) => {
  const prompt = `Based on the following business information, recommend relevant AI tools and solutions:
    Business Type: ${data.businessType}
    Challenges: ${data.challenges}
    Goals: ${data.goals}
    
    Please provide specific AI tool recommendations that would help this business.`;

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('DEEPSEEK_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are an AI solutions expert. Provide specific, actionable recommendations for AI tools and solutions based on business requirements. Focus on practical, implementable solutions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 402) {
        throw new Error('Your Deepseek API key has insufficient balance. Please ensure your account is properly funded.');
      }
      throw new Error(errorData.error?.message || 'Failed to get AI recommendations');
    }

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    throw error; // Re-throw to handle in the component
  }
};