import React from 'react';

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
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center animate-in fade-in zoom-in duration-700">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative w-full h-full">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-card/90 backdrop-blur-xl border border-primary/30 p-6 rounded-3xl shadow-2xl relative transform transition-transform hover:scale-105 duration-300 group cursor-pointer text-center">
            <h3 className="font-serif text-3xl font-black text-primary mb-2">Paradox</h3>
            <p className="text-sm text-foreground font-medium max-w-[200px] leading-relaxed">
              A statement that appears contradictory but reveals a hidden truth.
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
