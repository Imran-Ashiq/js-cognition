<div align="center">
  <h1>🧠 js-cognition</h1>
  <p><strong>Effortless AI for Everyday JavaScript.</strong></p>
  <p>A zero-configuration, lightweight, and tree-shakable package for common AI tasks, written in TypeScript with no external dependencies.</p>
  
  <p>
    <a href="https://www.npmjs.com/package/@imranashiq/js-cognition"><img src="https://img.shields.io/npm/v/@imranashiq/js-cognition.svg" alt="NPM Version"></a>
    <a href="https://www.npmjs.com/package/@imranashiq/js-cognition"><img src="https://img.shields.io/npm/dm/@imranashiq/js-cognition.svg" alt="NPM Downloads"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@imranashiq/js-cognition.svg" alt="License"></a>
  </p>
</div>

---

**js-cognition** was born from a simple idea: adding powerful AI features to your web projects shouldn't require a data science degree. This package removes the complexity, providing simple, intuitive functions for powerful text analysis tasks.

## ✨ Features

*   **Sentiment Analysis:** Instantly determine if text is positive, negative, or neutral.
*   **Zero Configuration:** Just install and import. No API keys, no setup.
*   **Lightweight & Fast:** Built for performance with minimal footprint.
*   **TypeScript Native:** First-class TypeScript support provides excellent developer experience with autocompletion and static typing.
*   **ESM First:** A modern package for modern projects.

## 🚀 Getting Started

It only takes a minute to get up and running.

### 1. Installation

Install the package from npm using your favorite package manager:

```bash
npm install @imranashiq/js-cognition
```

### 2. Usage

Import the `analyzeSentiment` function and pass it any string of text. That's it!

```javascript
import { analyzeSentiment } from '@imranashiq/js-cognition';

const text = "I'm so excited to use this package! It's incredibly simple and powerful.";
const result = analyzeSentiment(text);

console.log(result);
```

**Output:**

```json
{
  "score": 5,
  "label": "positive",
  "tokens": [
    { "token": "excited", "score": 2 },
    { "token": "incredibly", "score": 2 },
    { "token": "powerful", "score": 2 },
    { "token": "simple", "score": -1 }
  ]
}
```

### 3. More Examples

Here are some additional examples to showcase the power of **js-cognition**:

```javascript
// Negative sentiment
const negativeText = "This product is terrible and I hate it.";
console.log(analyzeSentiment(negativeText));
// Output: { score: -4, label: "negative", tokens: [...] }

// Neutral sentiment  
const neutralText = "The weather today is okay.";
console.log(analyzeSentiment(neutralText));
// Output: { score: 0, label: "neutral", tokens: [...] }

// Mixed sentiment
const mixedText = "The hotel room was great but the service was disappointing.";
console.log(analyzeSentiment(mixedText));
// Output: { score: 1, label: "positive", tokens: [...] }
```

## 📚 API Reference

### `analyzeSentiment(text: string): CognitionSentimentResult`

Analyzes the sentiment of a given text string and returns detailed sentiment information.

**Parameters:**
- `text` *(string)*: The input string you want to analyze.

**Returns:** `CognitionSentimentResult`
- `score` *(number)*: The final numerical sentiment score. Positive values indicate positive sentiment, negative values indicate negative sentiment, and values near zero indicate neutral sentiment.
- `label` *('positive' | 'negative' | 'neutral')*: A human-readable label for the overall sentiment.
- `tokens` *(Array<{token: string, score: number}>)*: An array of individual words (tokens) that contributed to the sentiment score, along with their individual sentiment values.

**Example:**
```typescript
interface CognitionSentimentResult {
  score: number;
  label: 'positive' | 'negative' | 'neutral';
  tokens: Array<{
    token: string;
    score: number;
  }>;
}
```

## 🎯 Use Cases

**js-cognition** is perfect for a variety of applications:

- **Social Media Monitoring**: Analyze customer feedback and social media mentions
- **Product Reviews**: Automatically categorize customer reviews by sentiment
- **Customer Support**: Prioritize support tickets based on sentiment analysis
- **Content Moderation**: Identify potentially negative or harmful content
- **Market Research**: Analyze survey responses and feedback at scale
- **Chatbots & AI**: Enhance conversational AI with sentiment awareness

## 🔧 Advanced Usage

### TypeScript Support

**js-cognition** is built with TypeScript and provides full type safety out of the box:

```typescript
import { analyzeSentiment, CognitionSentimentResult } from '@imranashiq/js-cognition';

const analyzeUserFeedback = (feedback: string): CognitionSentimentResult => {
  return analyzeSentiment(feedback);
};

const result = analyzeUserFeedback("Amazing product!");
// TypeScript will provide full autocompletion for result.score, result.label, etc.
```

### Performance Considerations

- **Lightweight**: The entire package is less than 50KB
- **No External Dependencies**: Zero runtime dependencies for maximum compatibility
- **Fast Processing**: Optimized algorithms for real-time sentiment analysis
- **Memory Efficient**: Minimal memory footprint, perfect for browser and server environments

## 🗺️ Roadmap

We're just getting started! Here's what's coming next:

- ✅ **Sentiment Analysis** *(Current)*
- 🔄 **Keyword and Topic Extraction** *(In Progress)*
- 📋 **Text Summarization** *(Planned)*
- 🌍 **Language Detection** *(Planned)*
- 🏷️ **Named Entity Recognition** *(Future)*
- 📊 **Text Classification** *(Future)*

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

### Ways to Contribute
- 🐛 **Report Bugs**: Found an issue? Let us know!
- 💡 **Feature Requests**: Have an idea? We'd love to hear it!
- 📝 **Documentation**: Help improve our docs
- 🧪 **Testing**: Add test cases or improve existing ones
- 💻 **Code**: Submit pull requests for bug fixes or new features

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Development Setup
```bash
# Clone your fork
git clone https://github.com/Imran-Ashiq/js-cognition.git
cd js-cognition

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build
```

## 📋 Requirements

- **Node.js**: 14.0.0 or higher
- **TypeScript**: 4.0.0 or higher (for TypeScript projects)
- **Browser**: All modern browsers (ES2020+ support)

## 📜 License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Imran-Ashiq">Muhammad Imran</a></p>
  <p>⭐ If you find this project helpful, please consider giving it a star on <a href="https://github.com/Imran-Ashiq/js-cognition">GitHub</a>!</p>
</div>