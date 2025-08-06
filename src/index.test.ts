// Import the functions we need from vitest
import { describe, it, expect } from 'vitest';

// Import the function we want to test
import { analyzeSentiment } from './index.js';

// 'describe' creates a test suite, a group of related tests.
describe('analyzeSentiment', () => {
  
  // 'it' defines an individual test case.
  it('should correctly identify a positive sentence', () => {
    const text = "This is a wonderful and amazing experience!";
    const result = analyzeSentiment(text);

    // 'expect' is our assertion. We expect the label to be 'positive'.
    expect(result.label).toBe('positive');
    // We can also check that the score is greater than 0.
    expect(result.score).toBeGreaterThan(0);
  });

  it('should correctly identify a negative sentence', () => {
    const text = "What a terrible and awful product.";
    const result = analyzeSentiment(text);

    expect(result.label).toBe('negative');
    expect(result.score).toBeLessThan(0);
  });

  it('should correctly identify a neutral sentence', () => {
    const text = "The package is on the table.";
    const result = analyzeSentiment(text);

    expect(result.label).toBe('neutral');
    expect(result.score).toBe(0);
  });

  it('should handle empty strings gracefully', () => {
    const text = "";
    const result = analyzeSentiment(text);

    expect(result.label).toBe('neutral');
    expect(result.score).toBe(0);
    // Let's check the tokens array is empty too.
    expect(result.tokens).toEqual([]);
  });

});