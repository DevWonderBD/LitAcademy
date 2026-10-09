import React from 'react';
import { BookMarked, Library, Feather } from 'lucide-react';

export default function LiteraryTermsScene() {
  const terms = [
    { text: "Catharsis", top: "15%", left: "20%", size: "text-xl", opacity: "opacity-40" },
    { text: "Irony", top: "30%", left: "70%", size: "text-lg", opacity: "opacity-60" },
    { text: "Metaphor", top: "70%", left: "15%", size: "text-2xl", opacity: "opacity-50" },
    { text: "Soliloquy", top: "80%", left: "60%", size: "text-xl", opacity: "opacity-40" },
    { text: "Hamartia", top: "45%", left: "10%", size: "text-lg", opacity: "opacity-30" },
    { text: "Alliteration", top: "10%", left: "60%", size: "text-sm", opacity: "opacity-50" },
    { text: "Hubris", top: "60%", left: "80%", size: "text-xl", opacity: "opacity-30" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700 min-h-[450px]">
      
      {/* Floating Elements */}
      <div className="absolute -top-2 md:-top-3 -right-2 md:-right-4 bg-card border border-border/60 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full animate-float z-10 flex items-center justify-center">
        <Feather className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
      </div>

      <div className="absolute top-1/4 -right-2 md:-right-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400/80 rounded-full animate-float-fast z-10 block"></div>

      <div className="absolute -bottom-3 md:-bottom-5 -left-2 md:-left-4 bg-card border border-border/60 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full animate-float-delayed z-10 flex items-center justify-center">
        <Library className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Mac OS Window */}
      <div className="w-full h-full min-h-[400px] bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 relative">
        
        {/* Top Bar */}
        <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex items-center gap-2 relative rounded-t-2xl z-20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground tracking-widest uppercase flex items-center gap-2">
            <BookMarked className="w-3 h-3" />
            Literary Terms
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {terms.map((term, idx) => (
            <div 
              key={idx} 
              className={`absolute font-serif font-bold text-foreground transition-all duration-1000 ${term.size} ${term.opacity}`}
              style={{ top: term.top, left: term.left }}
            >
              {term.text}
            </div>
          ))}
          
          {/* Centered highlighted term */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 flex justify-center">
            <div className="bg-card/90 backdrop-blur-xl border border-primary/30 p-6 rounded-3xl shadow-2xl relative transform transition-transform hover:scale-105 duration-300 group cursor-pointer text-center max-w-[280px]">
              <h3 className="font-serif text-3xl font-black text-primary mb-2">Paradox</h3>
              <p className="text-sm text-foreground font-medium leading-relaxed">
                A statement that appears contradictory but reveals a hidden truth.
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

