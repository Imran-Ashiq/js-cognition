// Import our function from the compiled output in the 'dist' folder
import { analyzeSentiment } from './dist/index.js';

console.log("--- Starting Test ---");

// Test Case 1: A clearly positive sentence
const positiveText = "I absolutely love this amazing product! It's fantastic.";
const positiveResult = analyzeSentiment(positiveText);
console.log("\nTesting Positive Text:", positiveText);
console.log("Result:", positiveResult);

// Test Case 2: A clearly negative sentence
const negativeText = "This is a terrible experience. I am very disappointed.";
const negativeResult = analyzeSentiment(negativeText);
console.log("\nTesting Negative Text:", negativeText);
console.log("Result:", negativeResult);

// Test Case 3: A neutral sentence
const neutralText = "The package was delivered today.";
const neutralResult = analyzeSentiment(neutralText);
console.log("\nTesting Neutral Text:", neutralText);
console.log("Result:", neutralResult);

console.log("\n--- Test Complete ---");