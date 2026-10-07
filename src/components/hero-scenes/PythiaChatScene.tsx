import React from 'react';
import { Sparkles, User, ArrowRight } from 'lucide-react';

export default function PythiaChatScene() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex flex-col justify-center animate-in fade-in zoom-in duration-700">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-card/90 backdrop-blur-xl border border-border/50 p-6 rounded-3xl shadow-2xl relative w-full flex flex-col gap-6">
        
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
  );
}
