import { AuthorsReveal } from "@/components/ui/authors-reveal";
import { HeroWithCode } from "@/components/ui/hero-with-code";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Navbar } from "@/components/ui/navbar";
import { OverviewInfinity } from "@/components/ui/overview-infinity";
import { StockChart } from "@/components/ui/stock-chart";
import { TelegramBot } from "@/components/ui/telegram-bot";
import { SystemArchitectureWobble } from "@/components/ui/wobble";
import { CircuitBoard, Database, Network, Play, TrendingUp, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <HeroWithCode />

      {/* Stock Chart Section */}
      <section className="py-20 px-2 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <StockChart />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-2 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
       
          <OverviewInfinity />
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-0 sm:px-2 lg:px-4">
        <div className="container mx-auto max-w-[95vw] lg:max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              System Architecture
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
              Three specialized agents work sequentially to monitor, decide, and execute trades.
            </p>
          </div>

          <SystemArchitectureWobble />

          <div className="mt-12 bg-neutral-900/40 backdrop-blur-sm rounded-xl p-8 border border-neutral-800/50">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">Data Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-300">
              <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-lg">
                <User className="w-4 h-4" />
                <span>User (Telegram)</span>
              </div>
              <span className="text-blue-400">→</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg">
                <Network className="w-4 h-4" />
                <span>TradingCoordinator</span>
              </div>
              <span className="text-purple-400">→</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg">
                <TrendingUp className="w-4 h-4" />
                <span>Market Monitor</span>
              </div>
              <span className="text-pink-400">→</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-lg">
                <CircuitBoard className="w-4 h-4" />
                <span>Decision Agent</span>
              </div>
              <span className="text-green-400">→</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg">
                <Play className="w-4 h-4" />
                <span>Execution Agent</span>
              </div>
              <span className="text-yellow-400">→</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-lg">
                <Database className="w-4 h-4" />
                <span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-20 px-2 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Implementation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-800/50">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Technologies</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>• Python — Core agents and trading logic</li>
                <li>• ML Model — Pre-trained classifier</li>
                <li>• SQLite/PostgreSQL — Data storage</li>
                <li>• Telegram Bot API — User interface</li>
                <li>• Custom simulation engine</li>
              </ul>
            </div>

            <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-800/50">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Results</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>✓ Autonomous trade execution</li>
                <li>✓ Agent-to-agent communication</li>
                <li>✓ ML-driven decision-making</li>
                <li>✓ Real-time logging</li>
                <li>✓ Persistent storage</li>
                <li>✓ Error handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section id="authors" className="py-20 px-2 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Our Team
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Meet the talented developers behind this project
            </p>
          </div>
          <AuthorsReveal />
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-2 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Try Our Telegram Bot
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
              Interact with our AI trading system through Telegram. Start trading cycles, view your portfolio, and see real-time decision logs.
            </p>
          </div>
          
          <div className="mb-16">
            <TelegramBot />
          </div>
        </div>
        <MacbookScroll src="/image.png" showGradient />
      </section>
    </div>
  );
}
