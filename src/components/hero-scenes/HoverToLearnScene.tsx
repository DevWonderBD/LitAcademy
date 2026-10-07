import React from 'react';
import { MousePointer2, BookOpen } from 'lucide-react';

export default function HoverToLearnScene() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center animate-in fade-in zoom-in duration-700">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      {/* Main Card */}
      <div className="bg-card/90 backdrop-blur-xl border border-border/50 p-8 rounded-3xl shadow-2xl relative w-full transform transition-transform hover:scale-[1.02] duration-500 group/card">
        <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-foreground">Macbeth, Act 1</h4>
            <p className="text-xs text-muted-foreground font-medium">William Shakespeare</p>
          </div>
        </div>
        
        <p className="font-serif text-lg leading-loose text-foreground/80">
          "If it were done when 'tis done, then 'twere well<br/>
          It were done quickly..." 
        </p>
        <p className="font-serif text-lg leading-loose text-foreground/80 mt-4">
          This famous <span className="relative inline-block cursor-help group/word">
            <span className="text-primary font-bold border-b-2 border-primary border-dashed pb-0.5">soliloquy</span>
            
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-foreground text-background text-sm p-4 rounded-2xl shadow-xl opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-20 pointer-events-none">
              <span className="block font-bold text-primary-foreground mb-1 text-base">Soliloquy (Noun)</span>
              A speech in a play that is meant to be heard by the audience but not by other characters on the stage.
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rotate-45"></span>
            </span>
          </span> reveals Macbeth's inner conflict.
        </p>

        {/* Animated Mouse Pointer */}
        <div className="absolute bottom-16 right-32 group-hover/card:-translate-y-4 group-hover/card:-translate-x-4 transition-all duration-700 ease-out z-30">
          <div className="relative">
            <MousePointer2 className="w-8 h-8 text-accent fill-accent drop-shadow-md -rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
