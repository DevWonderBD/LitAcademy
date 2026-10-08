"use client";
import React, { useState, useEffect } from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { FaBookOpen, FaLightbulb, FaMagic } from 'react-icons/fa';
import TermTooltip, { TermTooltipData } from '@/components/TermTooltip';

interface DemoData {
  id: number;
  title: string;
  author: string;
  textLines: string[];
  terms: Record<string, TermTooltipData>;
}

const InteractiveStudyMethod = () => {
  const [demos, setDemos] = useState<DemoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTermId, setActiveTermId] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    fetch('/data/studyMethodDemos.json')
      .then(res => res.json())
      .then(data => setDemos(data))
      .catch(err => console.error(err));
  }, []);

  // Carousel timer: 10 seconds, fades text
  useEffect(() => {
    if (demos.length === 0 || activeTermId) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % demos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [demos, activeTermId]);

  const currentDemo = demos[currentIndex];

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
              <span className="text-primary">Hover-to-Learn</span>
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

            <div className="bg-[#fcfbf9] border border-slate-200 rounded-2xl p-6 md:p-12 shadow-2xl shadow-slate-200/60 relative z-10 transition-all duration-500 min-h-[460px] flex flex-col justify-center animate-in fade-in duration-1000" key={currentDemo.id}>
              
              {/* Decorative top bar */}
              <div className="flex flex-wrap items-center justify-between mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <FaBookOpen className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{currentDemo.title}</span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md mt-2 sm:mt-0">{currentDemo.author}</span>
              </div>

              {/* The Text */}
              <div className="font-serif text-[18px] md:text-[20px] text-slate-800 leading-[2.2] tracking-wide relative">
                {currentDemo.textLines.map((line, lineIdx) => {
                  const parts = line.split(/({term[0-9]+})/g);
                  return (
                    <React.Fragment key={lineIdx}>
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('{term') && part.endsWith('}')) {
                          const termId = part.replace(/[{}]/g, '');
                          const termData = currentDemo.terms[termId];
                          if (!termData) return null;
                          
                          const isActive = activeTermId === termId;

                          return (
                            <TermTooltip 
                              key={partIdx}
                              termData={termData}
                              isActive={isActive}
                              isClicked={isActive}
                              onMouseEnter={() => setActiveTermId(termId)}
                              onMouseLeave={() => {}}
                              onClick={(e) => { e.stopPropagation(); setActiveTermId(termId); }}
                              onCloseClick={(e) => { e.stopPropagation(); setActiveTermId(null); }}
                              onBgClick={() => setActiveTermId(null)}
                            />
                          );
                        }
                        return <span key={partIdx} dangerouslySetInnerHTML={{ __html: part }} />;
                      })}
                      <br/>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Instruction Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-slate-700 font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-slate-200/50 flex items-center gap-3 whitespace-nowrap z-0">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                Hover or click the highlighted words
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudyMethod;
