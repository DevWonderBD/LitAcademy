import React from 'react';
import { CheckCircle2, CircleDashed, GraduationCap, ArrowUpRight, Target, BookOpen } from 'lucide-react';

export default function ProgressTrackerScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700 min-h-[450px]">
      
      {/* Floating Elements */}
      <div className="absolute -top-3 md:-top-4 -left-2 md:-left-6 bg-card border border-border/60 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full animate-float z-10 flex items-center justify-center">
        <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
      </div>

      <div className="absolute top-1/2 -right-1 md:-right-4 w-2 h-2 md:w-2.5 md:h-2.5 bg-primary/60 rounded-full animate-float-fast z-10 block"></div>
      <div className="absolute top-1/4 -left-2 md:-left-8 w-1 h-1 md:w-1.5 md:h-1.5 bg-accent/60 rounded-full animate-float z-10 block"></div>

      <div className="absolute -bottom-3 md:-bottom-6 -right-2 md:-right-4 bg-card border border-border/60 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full animate-float-delayed z-10 flex items-center justify-center">
        <span className="font-serif font-black text-lg md:text-xl text-primary leading-none">A</span>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply"></div>
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
            <GraduationCap className="w-3 h-3" />
            Program Tracker
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Honours 3rd Year</h3>
                <p className="text-xs text-muted-foreground font-medium">Victorian Poetry</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary border-r-primary rotate-45 shadow-sm">
              <span className="text-xs font-bold text-primary -rotate-45">75%</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-secondary/50 border border-transparent hover:border-border transition-colors group cursor-pointer">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-foreground">Alfred Lord Tennyson</h4>
                <p className="text-xs text-muted-foreground">Ulysses, The Lotos-Eaters</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm relative group cursor-pointer">
              <CircleDashed className="w-5 h-5 text-primary shrink-0 animate-[spin_4s_linear_infinite]" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-foreground text-primary">Robert Browning</h4>
                <p className="text-xs text-primary/70 font-medium">My Last Duchess (Reading...)</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-transparent border border-transparent opacity-60">
              <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 shrink-0" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-muted-foreground">Matthew Arnold</h4>
                <p className="text-xs text-muted-foreground/70">Dover Beach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

