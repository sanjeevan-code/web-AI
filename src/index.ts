// Export components
export { AIAssistant } from "./components/ai/AIAssistant";
export { AIButton } from "./components/ai/AIButton";
export { AIChatWindow } from "./components/ai/AIChatWindow";
export { AIMessage } from "./components/ai/AIMessage";
export { AIInput } from "./components/ai/AIInput";
export { AIStatus } from "./components/ai/AIStatus";
export { AIWelcome } from "./components/ai/AIWelcome";
export { AIError } from "./components/ai/AIError";
export { AIModelLoader } from "./components/ai/AIModelLoader";

// Export hook
export { useAIAssistant } from "./hooks/useAIAssistant";

// Export AI service & configuration
export { AI_CONFIG, isMobileDevice } from "./ai/model";
export { supportsWebGPU, getOrInitWebLLMEngine, streamChatResponse, resetEngineState } from "./ai/webllm";
export { portfolioKnowledge } from "./ai/portfolioKnowledge";
export { SYSTEM_PROMPT } from "./ai/systemPrompt";
export { buildRelevantContext } from "./ai/context";
export * from "./ai/types";
