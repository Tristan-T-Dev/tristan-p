'use client';

import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What projects have you built?",
  "Tell me about your education and scholarships",
  "What's your tech stack and skills?",
  "Show me your hackathon achievements",
];

export default function ChatbotToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm Tristan's AI assistant. Ask me about his education, projects (web apps, AI tools, blockchain dApps), technical skills, or achievements!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Hide suggestions after first user message
  useEffect(() => {
    const hasUserMessage = messages.some(m => m.role === 'user');
    setShowSuggestions(!hasUserMessage);
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call your API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.slice(-5), // Send last 5 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || 'No response received',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Window */}
          <div className="fixed bottom-0 right-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full h-[100dvh] md:w-[520px] lg:w-[720px] xl:w-[900px] md:h-[750px] bg-white dark:bg-gray-950 md:rounded-2xl shadow-2xl flex flex-col z-50 border-0 md:border border-gray-200 dark:border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 dark:border-gray-800 bg-black dark:bg-gray-900 md:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                  <span className="text-black dark:text-white font-bold text-sm">TT</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base md:text-lg">Tristan's AI Assistant</h3>
                  <p className="text-xs text-gray-400">Full-Stack Developer | Blockchain & AI Enthusiast</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 md:p-5 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
              <div className="space-y-4 max-w-3xl mx-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 md:gap-3 ${
                      message.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-black dark:bg-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-xs">TT</span>
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-3 md:p-4 shadow-sm max-w-[85%] md:max-w-[80%] ${
                        message.role === 'user'
                          ? 'bg-black dark:bg-gray-800 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <div className="text-sm md:text-base prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              // Style headings
                              h1: ({ node, ...props }) => <h1 className="text-lg font-bold mt-2 mb-1" {...props} />,
                              h2: ({ node, ...props }) => <h2 className="text-base font-bold mt-2 mb-1" {...props} />,
                              h3: ({ node, ...props }) => <h3 className="text-sm font-bold mt-2 mb-1" {...props} />,
                              // Style lists
                              ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2 space-y-1" {...props} />,
                              ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2 space-y-1" {...props} />,
                              li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                              // Style code blocks
                              code: ({ node, inline, ...props }: any) => 
                                inline ? (
                                  <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                                ) : (
                                  <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded-lg my-2 overflow-x-auto text-sm font-mono" {...props} />
                                ),
                              // Style links
                              a: ({ node, ...props }) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
                              // Style paragraphs
                              p: ({ node, ...props }) => <p className="my-2 leading-relaxed" {...props} />,
                              // Style blockquotes
                              blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-2 italic" {...props} />
                              ),
                              // Style strong/bold
                              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                              // Style emphasis/italic
                              em: ({ node, ...props }) => <em className="italic" {...props} />,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      )}
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-black dark:bg-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-xs">TT</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 md:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Suggested Questions */}
            {showSuggestions && (
              <div className="px-4 md:px-5 pb-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 pt-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>
                  Quick Questions About Tristan
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question)}
                      disabled={isLoading}
                      className="text-xs md:text-sm px-3.5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 dark:border-gray-700 font-medium"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 md:p-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="flex gap-2 md:gap-3 items-end">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Tristan's experience..."
                    disabled={isLoading}
                    className="w-full px-4 md:px-5 py-3 md:py-3.5 border-2 border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm md:text-base disabled:opacity-50 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-500"
                  />
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !input.trim()}
                  className="px-4 md:px-5 py-3 md:py-3.5 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-2xl transition-all font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center min-w-[44px] hover:scale-105 active:scale-95"
                  aria-label="Send message"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 h-12 md:h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center z-50 group px-4 md:px-6 gap-2 hover:scale-105 active:scale-95 ${
          isOpen ? 'hidden md:flex' : ''
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X size={20} className="md:w-6 md:h-6 transition-transform group-hover:rotate-90" />
        ) : (
          <>
            <MessageCircle size={20} className="md:w-6 md:h-6 transition-transform group-hover:scale-110" />
            <span className="font-medium text-sm md:text-base hidden sm:inline">Chat with Tristan</span>
          </>
        )}
      </button>
    </>
  );
}