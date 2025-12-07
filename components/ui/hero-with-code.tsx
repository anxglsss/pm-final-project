"use client";

import { Code, CodeBlock, CodeHeader } from "@/components/animate-ui/components/animate/code";

export const HeroWithCode = () => {
  const codeContent = `from agents.types import MarketUpdate, TradeDecision
from ml.ml_agent import predict_decision
class DecisionAgent:
    def decide(self, market_update: MarketUpdate) -> TradeDecision:
        ml_result = predict_decision(market_update.features)
        return TradeDecision(

            symbol=market_update.symbol,

            timestamp=market_update.timestamp,

            action=ml_result["action"],

            confidence_up=ml_result["confidence_up"],

            confidence_down=ml_result["confidence_down"],

            reason=ml_result["reason"],

        )`;

  return (
    <section className="min-h-screen flex items-center px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Title and Content */}
          <div className="space-y-6 flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Automated Stock Trading
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Multi-Agent System
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              An autonomous trading simulation built with distributed AI agents that monitor markets, make decisions, and execute trades in real-time.
            </p>
         
          </div>

          {/* Right Side - Code Block */}
          <div className="relative flex items-center justify-center">
            <Code
              code={codeContent}
              className="border-neutral-800 bg-neutral-900/50 backdrop-blur-sm w-full"
            >
              <CodeHeader copyButton>DecisionAgent.py</CodeHeader>
              <CodeBlock 
                cursor 
                lang="python" 
                writing={true}
                duration={8000}
                delay={500}
                themes={{
                  light: 'github-light',
                  dark: 'one-dark-pro'
                }}
              />
            </Code>
          </div>
        </div>
      </div>
    </section>
  );
};

