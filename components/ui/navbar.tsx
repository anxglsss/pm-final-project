"use client";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MAS Trading System
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#overview"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Overview
            </a>
            <a
              href="#agents"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Agents
            </a>
            <a
              href="#demo"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

