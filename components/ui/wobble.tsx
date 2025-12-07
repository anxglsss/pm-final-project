"use client";

import { BarChart3, Brain, Zap } from "lucide-react";
import { WobbleCard } from "../ui/wobble-card";

export function SystemArchitectureWobble() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[400px] lg:min-h-[300px]"
        className="relative"
      >
        <div className="max-w-md relative z-10">
          <BarChart3 className="w-12 h-12 mb-4 text-white" />
          <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.015em] text-white mb-4">
            Market Monitor
          </h2>
          <p className="mt-4 text-left text-base lg:text-lg text-neutral-300 leading-relaxed">
            Retrieves the latest stock prices and generates MarketUpdate objects. 
            Continuously monitors market conditions and sends updates to the decision-making agent.
          </p>
          <div className="mt-6 pt-4 border-t border-blue-500/30">
            <span className="text-sm font-medium text-blue-400">Responsibility: Data Collection</span>
          </div>
        </div>
      </WobbleCard>

      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px]"
        className="relative"
      >
        <div className="relative z-10">
          <Brain className="w-12 h-12 mb-4 text-white" />
          <h2 className="max-w-80 text-left text-balance text-2xl md:text-3xl font-bold tracking-[-0.015em] text-white mb-4">
            Decision Maker
          </h2>
          <p className="mt-4 text-left text-base text-neutral-300 leading-relaxed">
            Uses a pre-trained ML model to analyze market updates and choose between 
            BUY, SELL, or HOLD actions. Provides decision confidence and explanations.
          </p>
          <div className="mt-6 pt-4 border-t border-purple-500/30">
            <span className="text-sm font-medium text-purple-400">Responsibility: AI Decision</span>
          </div>
        </div>
      </WobbleCard>

      <WobbleCard 
        containerClassName="col-span-1 lg:col-span-3 bg-purple-900 min-h-[400px] lg:min-h-[350px]"
        className="relative"
      >
        <div className="max-w-2xl relative z-10">
          <Zap className="w-12 h-12 mb-4 text-white" />
          <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.015em] text-white mb-4">
            Execution Agent
          </h2>
          <p className="mt-4 text-left text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Executes trades in the simulated portfolio, updates user balance and holdings, 
            and logs every transaction into the database. Ensures accurate portfolio management 
            and maintains complete transaction history.
          </p>
          <div className="mt-6 pt-4 border-t border-pink-500/30">
            <span className="text-sm font-medium text-pink-400">Responsibility: Trade Execution</span>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
