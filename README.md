# js-cognition

A simple, zero-config package for common AI tasks like sentiment analysis in JavaScript and TypeScript.

## Installation

```bash
npm install js-cognition
```

## Usage

```javascript
import { analyzeSentiment } from 'js-cognition';

const result = analyzeSentiment("I love this product!");
console.log(result);
// Output: { score: 3, label: 'positive', tokens: [...] }
```

## API

### `analyzeSentiment(text: string): CognitionSentimentResult`

Analyzes the sentiment of the given text.

**Parameters:**
- `text` - The input text to analyze

**Returns:**
- `CognitionSentimentResult` - Object containing:
  - `score` - Numerical sentiment score
  - `label` - 'positive', 'negative', or 'neutral'
  - `tokens` - Array of analyzed tokens with their scores

## Testing

```bash
npm test
```

## License

ISC