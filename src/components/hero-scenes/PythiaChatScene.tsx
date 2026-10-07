import React from 'react';
import { Sparkles, User, ArrowRight, Brain } from 'lucide-react';

export default function PythiaChatScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700 min-h-[450px]">
      
      {/* Floating Elements */}
      <div className="absolute -top-5 -right-6 bg-card/80 backdrop-blur-md border border-border/50 shadow-xl px-4 py-2.5 rounded-full animate-float z-10 hidden md:flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Pythia AI</span>
      </div>

      <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md border border-border/50 shadow-xl p-3.5 rounded-2xl animate-float-delayed z-10 hidden md:flex items-center gap-3">
        <div className="bg-accent/10 p-2 rounded-full">
          <Brain className="w-4 h-4 text-accent" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      {/* Mac OS Window */}
      <div className="w-full bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-visible transform transition-transform hover:scale-[1.02] duration-500 relative">
        
        {/* Top Bar */}
        <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex items-center gap-2 relative rounded-t-2xl">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            AI Study Guide
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          
          {/* User Message */}
          <div className="flex gap-4 items-start group">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-sm mt-1">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="bg-secondary/50 text-foreground p-4 rounded-2xl rounded-tl-sm text-sm font-medium leading-relaxed shadow-sm">
              What is the central theme of Waiting for Godot?
            </div>
          </div>

          {/* Pythia Reply */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-sm mt-1 relative">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-card"></span>
              </span>
            </div>
            <div className="bg-primary/5 border border-primary/10 text-foreground p-5 rounded-2xl rounded-tl-sm text-sm leading-relaxed shadow-sm relative overflow-hidden group">
              <p className="font-medium text-foreground/90">
                The play explores existentialism and the absurdity of human existence. Vladimir and Estragon wait endlessly for meaning (Godot) that never arrives, highlighting the futility of seeking external salvation.
              </p>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs cursor-pointer hover:text-primary-hover">
                Read detailed topic notes <ArrowRight className="w-3 h-3" />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] animate-[shimmer_3s_infinite] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

