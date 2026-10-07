import React from 'react';
import { CheckCircle2, CircleDashed, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function ProgressTrackerScene() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex flex-col justify-center animate-in fade-in zoom-in duration-700">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="bg-card/90 backdrop-blur-xl border border-border/50 p-6 rounded-3xl shadow-2xl relative w-full">
        
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
  );
}
