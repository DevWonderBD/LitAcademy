"use client";
import React, { useState, useEffect, useRef } from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { FaBookOpen, FaLightbulb, FaMagic, FaTimes, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

interface TermData {
  text: string;
  titleEn: string;
  descEn: string;
  titleBn: string;
  descBn: string;
}

interface DemoData {
  id: number;
  title: string;
  author: string;
  textLines: string[];
  terms: Record<string, TermData>;
}

const InteractiveStudyMethod = () => {
  const [demos, setDemos] = useState<DemoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTerm, setActiveTerm] = useState<{ id: string; x: number; y: number } | null>(null);
  const [langEn, setLangEn] = useState(true);
  const [savedTerms, setSavedTerms] = useState<Set<string>>(new Set());

  // Fetch data
  useEffect(() => {
    fetch('/data/studyMethodDemos.json')
      .then(res => res.json())
      .then(data => setDemos(data))
      .catch(err => console.error(err));
  }, []);

  // Carousel timer
  useEffect(() => {
    if (demos.length === 0 || activeTerm !== null) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [demos, activeTerm]);

  // Click away listener to close popover
  const handleBgClick = () => {
    if (activeTerm) setActiveTerm(null);
  };

  const currentDemo = demos[currentIndex];

  const handleTermClick = (e: React.MouseEvent, termId: string) => {
    e.stopPropagation();
    // Get position relative to the container
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveTerm({
      id: termId,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setLangEn(true); // reset to english on open
  };

  const toggleSave = (termText: string) => {
    const newSet = new Set(savedTerms);
    if (newSet.has(termText)) {
      newSet.delete(termText);
    } else {
      newSet.add(termText);
    }
    setSavedTerms(newSet);
  };

  if (!currentDemo) return null;

  return (
    <section className="py-20 px-6 lg:px-20 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Explainer */}
          <div className="w-full lg:w-1/2 space-y-6">
            <SectionBadge>Study Method</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 leading-tight">
              Read Smarter with <br/>
              <span className="text-primary">Click-to-Learn</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              No more searching for meanings in heavy guide books or opening multiple tabs. At LitAcademy, critical theories, allusions, and difficult literary terms are explained instantly right where you read them.
            </p>
            
            <ul className="space-y-6 pt-6">
              <li className="flex items-start gap-4">
                <div className="bg-teal-50 p-3.5 rounded-xl text-primary flex-shrink-0 shadow-sm border border-teal-100">
                  <FaMagic size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Instant Context</h4>
                  <p className="text-slate-600 mt-1.5 leading-relaxed">
                    Get historical and biographical context behind the text without ever leaving the page.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-amber-50 p-3.5 rounded-xl text-amber-500 flex-shrink-0 shadow-sm border border-amber-100">
                  <FaLightbulb size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Critical Analysis & Bilingual</h4>
                  <p className="text-slate-600 mt-1.5 leading-relaxed">
                    Understand complex metaphors instantly in both English and Bangla to enrich your exam answers.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Interactive Demo */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-50/50 to-slate-100/50 rounded-full blur-3xl -z-10"></div>

            <div className="bg-[#fcfbf9] border border-slate-200 rounded-2xl p-6 md:p-12 shadow-2xl shadow-slate-200/60 relative z-10 transition-all duration-500 min-h-[420px] flex flex-col justify-center">
              
              {/* Carousel Indicators */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-2">
                {demos.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-300'}`}></div>
                ))}
              </div>

              {/* Decorative top bar */}
              <div className="flex flex-wrap items-center justify-between mb-6 border-b border-slate-200 pb-4 mt-4">
                <div className="flex items-center gap-2">
                  <FaBookOpen className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{currentDemo.title}</span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md mt-2 sm:mt-0">{currentDemo.author}</span>
              </div>

              {/* The Text */}
              <div className="font-serif text-[18px] md:text-[20px] text-slate-800 leading-[2.2] tracking-wide relative">
                {currentDemo.textLines.map((line, lineIdx) => {
                  // Basic parser for {term1} placeholders
                  const parts = line.split(/({term[0-9]+})/g);
                  return (
                    <React.Fragment key={lineIdx}>
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('{term') && part.endsWith('}')) {
                          const termId = part.replace(/[{}]/g, '');
                          const termData = currentDemo.terms[termId];
                          const isActive = activeTerm?.id === termId;
                          if (!termData) return null;
                          return (
                            <span key={partIdx} className="relative inline-block mx-1">
                              <span 
                                onClick={(e) => handleTermClick(e, termId)}
                                className={`cursor-pointer border-b-[2.5px] border-dashed font-bold px-1 rounded-sm transition-colors ${isActive ? 'bg-primary text-white border-primary' : 'text-primary border-primary hover:bg-teal-50'}`}
                              >
                                {termData.text}
                              </span>
                              
                              {/* Popover */}
                              {isActive && (
                                <>
                                  {/* Overlay for clicking outside */}
                                  <div className="fixed inset-0 z-40" onClick={handleBgClick}></div>
                                  
                                  {/* Popover Box */}
                                  <div 
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] bg-white border border-slate-200 text-slate-800 text-[15px] font-sans rounded-xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 flex flex-col"
                                  >
                                    {/* Header */}
                                    <div className="flex items-start justify-between p-4 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                                      <div className="pr-4">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Term</div>
                                        <div className="font-bold text-primary text-base leading-tight">
                                          {langEn ? termData.titleEn : termData.titleBn}
                                        </div>
                                      </div>
                                      <button onClick={() => setActiveTerm(null)} className="text-slate-400 hover:text-slate-600 bg-white p-1.5 rounded-full shadow-sm border border-slate-200 transition-colors">
                                        <FaTimes size={12} />
                                      </button>
                                    </div>
                                    
                                    {/* Body */}
                                    <div className="p-4">
                                      <p className="leading-relaxed text-slate-600">
                                        {langEn ? termData.descEn : termData.descBn}
                                      </p>
                                    </div>

                                    {/* Footer actions */}
                                    <div className="p-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 rounded-b-xl">
                                      <button 
                                        onClick={() => setLangEn(!langEn)}
                                        className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-sm"
                                      >
                                        <MdLanguage size={16} className="text-primary"/> 
                                        {langEn ? 'Read in Bangla' : 'Read in English'}
                                      </button>
                                      
                                      <button 
                                        onClick={() => toggleSave(termData.text)}
                                        className={`flex items-center gap-1.5 text-xs font-bold transition-colors bg-white border px-3 py-1.5 rounded-md shadow-sm ${savedTerms.has(termData.text) ? 'border-amber-200 text-amber-500' : 'border-slate-200 text-slate-500 hover:text-primary'}`}
                                      >
                                        {savedTerms.has(termData.text) ? <FaBookmark size={14}/> : <FaRegBookmark size={14}/>}
                                        {savedTerms.has(termData.text) ? 'Saved' : 'Save'}
                                      </button>
                                    </div>

                                    {/* Triangle pointer */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-white drop-shadow-md"></div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-white -mt-[1px]"></div>
                                  </div>
                                </>
                              )}
                            </span>
                          );
                        }
                        return part;
                      })}
                      <br/>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Instruction Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-slate-700 font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-slate-200/50 flex items-center gap-3 animate-bounce whitespace-nowrap z-0">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                Click the highlighted words
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudyMethod;
