"use client";

export const TelegramBot = () => {
  return (
    <a
      href="https://t.me/ai_trading_pm_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="max-w-md mx-auto bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              AI Trading PM Bot
            </h3>
            <p className="text-sm text-neutral-400">@ai_trading_pm_bot</p>
            <p className="text-xs text-blue-400 mt-1">Click to open in Telegram →</p>
          </div>
        </div>

        {/* Mock Telegram Chat Interface */}
        <div className="bg-neutral-900/50 rounded-xl p-4 space-y-3 border border-neutral-800/50">
          {/* Bot Message */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm">
              🤖
            </div>
            <div className="flex-1">
              <div className="bg-neutral-800/70 rounded-lg rounded-tl-none px-4 py-2 text-sm text-neutral-300">
                Welcome! Use /run TICKER to start a trading cycle.
              </div>
              <div className="text-xs text-neutral-500 mt-1 ml-1">12:34</div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-2 justify-end">
            <div className="flex-1 flex justify-end">
              <div>
                <div className="bg-blue-600 rounded-lg rounded-tr-none px-4 py-2 text-sm text-white max-w-[80%] ml-auto">
                  /run AAPL
                </div>
                <div className="text-xs text-neutral-500 mt-1 mr-1 text-right">12:35</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center text-sm">
              👤
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm">
              🤖
            </div>
            <div className="flex-1">
              <div className="bg-neutral-800/70 rounded-lg rounded-tl-none px-4 py-2 text-sm text-neutral-300 space-y-2">
                <div className="font-semibold text-blue-400">Trading Cycle Started</div>
                <div className="text-xs">📊 Market Monitor: Price retrieved ($150.25)</div>
                <div className="text-xs">🤖 Decision: BUY (confidence: 0.87)</div>
                <div className="text-xs">⚡ Execution: Trade completed</div>
                <div className="text-xs text-green-400">Portfolio updated successfully!</div>
              </div>
              <div className="text-xs text-neutral-500 mt-1 ml-1">12:35</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

