"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function OverviewInfinity() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={overviewItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const overviewItems = [
  {
    quote: "Traditional trading systems are often centralized 'black boxes' that hide decision-making processes. Our system provides transparency, allowing users to observe how autonomous agents divide responsibilities and communicate in a trading workflow.",
    name: "Problem Statement",
    title: "Transparency in Trading Systems",
  },
  {
    quote: "Three intelligent agents work in harmony: Market Monitor retrieves real-time prices, Decision Maker uses ML models to choose actions, and Execution Agent handles trade execution. All agents communicate seamlessly through structured data objects.",
    name: "Multi-Agent Architecture",
    title: "Distributed Intelligence",
  },
  {
    quote: "ML-driven decision-making provides BUY, SELL, or HOLD actions with confidence scores and explanations. The pre-trained classifier analyzes market features to make informed trading decisions in real-time.",
    name: "AI Decision Making",
    title: "Machine Learning Integration",
  },
  {
    quote: "Real-time Telegram bot interface allows users to initiate trading cycles with simple commands. Users can inspect portfolios, view decision logs, and monitor trade executions through an intuitive chat interface.",
    name: "User Interface",
    title: "Telegram Bot Integration",
  },
  {
    quote: "Complete transaction history is logged to SQLite/PostgreSQL databases. Every trade includes timestamp, action type, price, quantity, and reasoning. Portfolio balances and holdings are automatically updated after each execution.",
    name: "Data Management",
    title: "Persistent Storage",
  },
  {
    quote: "Python serves as the core language for all agents and trading logic. The system uses a custom simulation engine for generating market data and integrates with Telegram Bot API for user interactions.",
    name: "Technology Stack",
    title: "Python & APIs",
  },
  {
    quote: "Autonomous trade execution happens in seconds. Agents communicate efficiently while preserving modularity. Error handling ensures robust operation with insufficient funds detection and unknown ticker validation.",
    name: "Execution Flow",
    title: "Automated Trading Cycle",
  },
  {
    quote: "Portfolio tracking provides real-time updates on user balance and holdings. Each agent's responsibility is clearly defined: data collection, AI decision, and trade execution. The system demonstrates practical multi-agent communication.",
    name: "Portfolio Management",
    title: "Real-time Updates",
  },
  {
    quote: "Testing showed that all agents communicated correctly, portfolio updates were accurate, and ML decisions reflected market changes. The Telegram interface proved intuitive for end-users with clear command responses.",
    name: "System Validation",
    title: "Testing & Results",
  },
  {
    quote: "The modular architecture made debugging easy. Logging provided transparency and improved explainability. Agents operated synchronously and reliably, demonstrating the power of distributed agent-based systems in financial applications.",
    name: "System Design",
    title: "Modular & Transparent",
  },
];

