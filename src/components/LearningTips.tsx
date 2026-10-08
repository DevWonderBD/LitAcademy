"use client";
import React from 'react';
import { Lightbulb, Clock, BookOpen, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { SectionBadge } from '@/components/ui/section-badge';

const LearningTips = () => {
 
  const [tipsData, setTipsData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('/data/learningTips.json')
      .then(res => res.json())
      .then(data => setTipsData(data))
      .catch(console.error);
  }, []);

  const IconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="text-white w-6 h-6" />,
    Clock: <Clock className="text-white w-6 h-6" />
  };

  return (
    <section id='technics' className="bg-slate-50/50 py-20 px-6 lg:px-20 relative border-t border-slate-100">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Minimal Academic Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <SectionBadge>Study Methodology</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-5 leading-snug">
            Expert Techniques for <br />
            Literature Students
          </h2>
          <p className="text-slate-600 font-serif text-lg mt-5 leading-relaxed">
            Elevate your reading comprehension and exam preparation with proven strategies specifically designed for the National University syllabus.
          </p>
        </div>

        {/* Clean, Thin-bordered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {tipsData.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="text-primary">
                  {IconMap[section.iconType]}
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 tracking-tight">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent hidden-before-line">
                {section.tips.map((tip: any, i: number) => (
                  <div key={i} className="relative flex items-start gap-4">
                    {/* Minimal indicator */}
                    <div className="mt-1.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-slate-200 bg-slate-50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-1.5">{tip.title}</h4>
                      <p className="text-slate-600 leading-relaxed font-serif text-[14px]">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Text Link CTA instead of heavy banner */}
        <div className="mt-16 flex justify-center">
           <Link href={'/programs'} className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors">
              <span className="border-b border-primary/30 pb-0.5">Explore Study Resources</span>
              <span className="text-lg">→</span>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;