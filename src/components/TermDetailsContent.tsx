"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, MessageCircle, Globe, History, Check, Edit3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiteraryTerm {
  id: string;
  term: string;
  shortDescription: string;
  definition: { en: string; bn: string };
  examples: { text: string; source: string }[];
  context: { en: string; bn: string };
  similarTerms?: { id: string; term: string }[];
  oppositeTerms?: { id: string; term: string }[];
}

export default function TermDetailsContent({ term }: { term: LiteraryTerm }) {
  const [isBangla, setIsBangla] = useState(false);
  const [spellingInput, setSpellingInput] = useState('');
  
  const isSpellingCorrect = spellingInput.toLowerCase().trim() === term.term.toLowerCase().trim() && spellingInput.length > 0;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-border pt-8 md:pt-20 pb-8 md:pb-12 px-6">
        <div className="container mx-auto max-w-4xl relative">
          <Link 
            href="/literary-terms" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Literary Terms
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-[11px] font-bold uppercase tracking-widest mb-4">
                Literary Term
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tight">
                {term.term}
              </h1>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl w-fit">
              <button 
                onClick={() => setIsBangla(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${!isBangla ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Globe className="w-4 h-4" />
                English
              </button>
              <button 
                onClick={() => setIsBangla(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isBangla ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 pt-12">
        <div className="space-y-10">
          
          {/* Definition */}
          <section className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold text-foreground mb-6 font-heading">
              <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              Definition
            </h2>
            <div className={`text-lg leading-relaxed ${isBangla ? 'font-bangla-reading' : 'font-reading'} text-slate-700`}>
              {isBangla ? term.definition.bn : term.definition.en}
            </div>
          </section>

          {/* Examples */}
          <section className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <h2 className="flex items-center gap-3 text-xl font-bold text-foreground mb-6 font-heading">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              Examples in Literature
            </h2>
            <div className="space-y-6">
              {term.examples.map((example, idx) => (
                <div key={idx} className="pl-6 border-l-4 border-primary/20">
                  <p className="text-lg font-reading italic text-slate-800 mb-3">&quot;{example.text}&quot;</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">— {example.source}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Context / Etymology */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6 font-heading">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center border border-slate-700">
                <History className="w-5 h-5" />
              </div>
              Historical Context
            </h2>
            <div className={`text-lg leading-relaxed ${isBangla ? 'font-bangla-reading' : 'font-reading'} text-slate-300`}>
              {isBangla ? term.context.bn : term.context.en}
            </div>
          </section>

          {/* Related Terms */}
          {(term.similarTerms?.length || term.oppositeTerms?.length) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
              {term.similarTerms && term.similarTerms.length > 0 && (
                <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                    Similar Terms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {term.similarTerms.map(similar => (
                      <Link 
                        key={similar.id} 
                        href={`/literary-terms/${similar.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-700 font-bold text-sm shadow-sm hover:shadow-md hover:text-primary transition-all group"
                      >
                        {similar.term}
                        <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {term.oppositeTerms && term.oppositeTerms.length > 0 && (
                <section className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10">
                  <h3 className="text-sm font-bold text-destructive uppercase tracking-widest mb-4">
                    Opposite Terms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {term.oppositeTerms.map(opposite => (
                      <Link 
                        key={opposite.id} 
                        href={`/literary-terms/${opposite.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-700 font-bold text-sm shadow-sm hover:shadow-md hover:text-destructive transition-all group"
                      >
                        {opposite.term}
                        <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : null}

          {/* Spelling Challenge */}
          <section className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm text-center">
            <div className="max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <Edit3 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">
                {isBangla ? 'বানান চ্যালেঞ্জ' : 'Spelling Challenge'}
              </h2>
              <p className={`text-muted-foreground font-medium mb-8 ${isBangla ? 'font-bangla-reading' : ''}`}>
                {isBangla 
                  ? 'লিটারারি টার্মগুলোর বানান মনে রাখা বেশ কঠিন। স্মৃতি থেকে টার্মটি টাইপ করে নিজেকে যাচাই করুন! (আমরা জানি আপনি চাইলেই স্ক্রল করে উপরে গিয়ে বানানটি দেখে নিতে পারেন, কিন্তু একজন খাঁটি সাহিত্যানুরাগী তো আর নিজের সাথে চিট করবে না, তাই না?)' 
                  : 'Literary terms can be tricky to spell. Type the term from memory to test yourself! (We know you could just scroll up and peek, but true scholars don\'t cheat their own brains!)'}
              </p>
              
              <div className="relative max-w-sm mx-auto">
                <input 
                  type="text" 
                  value={spellingInput}
                  onChange={(e) => setSpellingInput(e.target.value)}
                  placeholder={isBangla ? "এখানে টার্মটি টাইপ করুন..." : "Type the term here..."}
                  className={`w-full px-6 py-4 rounded-2xl border-2 outline-none font-bold text-center text-lg transition-all ${
                    isSpellingCorrect 
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                      : 'border-border focus:border-primary/50 bg-slate-50 focus:bg-white text-slate-800'
                  }`}
                  autoComplete="off"
                  spellCheck="false"
                />
                
                <AnimatePresence>
                  {isSpellingCorrect && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {isSpellingCorrect && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`text-emerald-600 font-bold mt-4 ${isBangla ? 'font-bangla-reading' : ''}`}
                  >
                    {isBangla ? 'দুর্দান্ত! আপনি বানানটি পুরোপুরি আয়ত্ত করে ফেলেছেন।' : 'Excellent! You\'ve mastered the spelling.'}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

