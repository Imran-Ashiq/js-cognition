// Correctly import the Sentiment class
import Sentiment from 'sentiment';

// Define a more user-friendly result structure for our package
export interface CognitionSentimentResult {
  score: number;
  label: 'positive' | 'negative' | 'neutral';
  tokens: { token: string; score: number }[];
}

// Create a reusable instance of the sentiment analyzer
const sentiment = new Sentiment();

/**
 * Analyzes the sentiment of a given text string.
 * @param text The input text to analyze.
 * @returns An object containing the sentiment analysis results.
 */
export function analyzeSentiment(text: string): CognitionSentimentResult {
  // Ensure the input is a non-empty string
  if (!text || typeof text !== 'string') {
    return {
      score: 0,
      label: 'neutral',
      tokens: [],
    };
  }

  // Use the underlying library to perform the analysis
  const result: Sentiment.AnalysisResult = sentiment.analyze(text);

  // Determine the label based on the score
  let label: 'positive' | 'negative' | 'neutral' = 'neutral';
  if (result.score > 0) {
    label = 'positive';
  } else if (result.score < 0) {
    label = 'negative';
  }
  
  // Transform the result into our custom, user-friendly format
  const formattedResult: CognitionSentimentResult = {
    score: result.score,
    label: label,
    // THE BUG FIX IS HERE: We now process 'result.calculation' correctly.
    tokens: result.calculation.flatMap(term => 
      Object.entries(term).map(([token, score]) => ({ token, score }))
    )
  };

  return formattedResult;
}