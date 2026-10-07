import React from 'react';
import { MousePointer2, BookOpen, PenTool } from 'lucide-react';

export default function HoverToLearnScene() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700 min-h-[450px]">
      
      {/* Floating Elements */}
      <div className="absolute -top-6 -left-8 bg-card border border-border/60 shadow-lg w-10 h-10 rounded-full animate-float z-10 hidden md:flex items-center justify-center">
        <PenTool className="w-4 h-4 text-primary" />
      </div>

      <div className="absolute top-1/3 -right-6 w-2.5 h-2.5 bg-accent/80 rounded-full animate-float-fast z-10 hidden md:block"></div>

      <div className="absolute -bottom-4 -right-6 bg-card border border-border/60 shadow-lg w-10 h-10 rounded-full animate-float-delayed z-10 hidden md:flex items-center justify-center">
        <span className="font-serif font-black text-xl text-primary leading-none">&amp;</span>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-primary/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      {/* Mac OS Window */}
      <div className="w-full bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-visible transform transition-transform hover:scale-[1.02] duration-500 group/card relative">
        
        {/* Top Bar */}
        <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex items-center gap-2 relative rounded-t-2xl">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground tracking-widest uppercase flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            Interactive Reading
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
            <div>
              <h4 className="font-serif font-bold text-foreground text-lg">Macbeth, Act 1</h4>
              <p className="text-sm text-muted-foreground font-medium">William Shakespeare</p>
            </div>
          </div>
          
          <div className="relative">
            <p className="font-serif text-lg leading-loose text-foreground/80">
              &quot;If it were done when &apos;tis done, then &apos;twere well<br/>
              It were done quickly...&quot; 
            </p>
            <p className="font-serif text-lg leading-loose text-foreground/80 mt-4">
              This famous <span className="relative inline-block cursor-help group/word">
                <span className="text-primary font-bold border-b-2 border-primary border-dashed pb-0.5">soliloquy</span>
                
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-foreground text-background text-sm p-4 rounded-2xl shadow-xl opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-50 pointer-events-none">
                  <span className="block font-bold text-primary-foreground mb-1 text-base">Soliloquy (Noun)</span>
                  A speech in a play that is meant to be heard by the audience but not by other characters on the stage.
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rotate-45"></span>
                </span>
              </span> reveals Macbeth&apos;s inner conflict.
            </p>

            {/* Animated Mouse Pointer */}
            <div className="absolute bottom-4 right-16 group-hover/card:-translate-y-4 group-hover/card:-translate-x-4 transition-all duration-700 ease-out z-50">
              <div className="relative">
                <MousePointer2 className="w-8 h-8 text-accent fill-accent drop-shadow-md -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

