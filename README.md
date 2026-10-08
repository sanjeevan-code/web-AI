# Web-AI (In-Browser Local AI Assistant Module)

A 100% client-side, zero-API-cost, in-browser AI Assistant module built with **React**, **TypeScript**, **WebGPU**, and **@mlc-ai/web-llm**.

---

## Features

- **100% Local Browser Inference**: Runs directly inside your visitor's browser using WebGPU.
- **Zero API Keys & Zero Server Costs**: Requires $0/month in cloud or API costs (no OpenAI, Gemini, or Claude API keys required).
- **Mobile Optimized**:
  - Automatically selects `SmolLM2-135M-Instruct` (~40MB footprint) on mobile devices to prevent RAM/battery lag.
  - Automatically selects `Qwen2.5-0.5B-Instruct` on desktop devices for high instruction quality.
  - Lazy click initialization on mobile devices to keep initial page loads fast.
- **IndexedDB Caching**: Model weights are cached locally on first load, enabling fast subsequent sessions.
- **Custom Knowledge Context Engine**: Feeds facts from `portfolioKnowledge.ts` to answer questions about projects, skills, education, and services.
- **Concise 3rd-Person Persona**: Built-in rules enforcing short 1–2 sentence responses without hallucination.

---

## Project Structure

```text
src/
├── ai/
│   ├── model.ts                 # Dynamic model configuration (Desktop vs Mobile)
│   ├── portfolioKnowledge.ts    # Structured facts knowledge base
│   ├── systemPrompt.ts          # Persona rules & length constraints
│   ├── context.ts               # Keyword matching & context builder
│   ├── webllm.ts                # WebLLM engine service & streaming generator
│   └── types.ts                 # TypeScript interfaces
├── components/ai/
│   ├── AIAssistant.tsx          # Main root assistant wrapper
│   ├── AIButton.tsx             # Trigger button component
│   ├── AIChatWindow.tsx         # Chat drawer panel
│   ├── AIMessage.tsx            # Chat bubble renderer
│   ├── AIInput.tsx              # Input bar with local privacy tagline
│   ├── AIStatus.tsx             # Inline header status indicator
│   ├── AIWelcome.tsx            # Initial welcome card & quick chips
│   ├── AIError.tsx              # Graceful WebGPU fallback notice
│   └── AIModelLoader.tsx        # Compact progress bar
└── hooks/
    └── useAIAssistant.ts        # Main React state & streaming hook
```

---

## Quick Start / Integration

### 1. Install Dependencies
```bash
npm install @mlc-ai/web-llm lucide-react react react-dom
```

### 2. Import into your React Application
```tsx
import { AIAssistant } from "./components/ai/AIAssistant";

function App() {
  return (
    <div>
      {/* Your website content */}
      <AIAssistant />
    </div>
  );
}
```

### 3. Customize Knowledge Base
Open `src/ai/portfolioKnowledge.ts` and replace the JSON data with your own project details, skills, education, and contact channels.

---

## License

MIT License
