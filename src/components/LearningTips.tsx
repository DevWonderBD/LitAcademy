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
    <section id='technics' className="bg-secondary py-14 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionBadge className="mx-auto">Study Methodology</SectionBadge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-slate-900 leading-tight mt-4 font-heading">
            Master Literature with <br />
            <span className="text-primary italic">Expert Techniques</span>
          </h2>
          <p className="text-slate-500 font-medium mt-6 max-w-2xl text-lg leading-relaxed">
            Elevate your reading comprehension and exam preparation with proven strategies specifically designed for National University students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {tipsData.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative faint background icon */}
              <div className="absolute -right-8 -top-8 text-slate-50 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                {section.iconType === 'BookOpen' ? <BookOpen size={180} /> : <Clock size={180} />}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className={`${section.accentColor} p-4 rounded-2xl shadow-lg shadow-${section.accentColor}/20 group-hover:scale-110 transition-transform duration-500`}>
                    {IconMap[section.iconType]}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">{section.category}</h3>
                </div>

                <div className="space-y-8">
                  {section.tips.map((tip: any, i: number) => (
                    <div key={i} className="flex gap-5 group/tip">
                      <div className="mt-1.5 flex-shrink-0">
                        <div className={`w-2.5 h-2.5 rounded-full ${section.bulletColor} group-hover/tip:scale-150 transition-transform duration-300 ring-4 ring-${section.bulletColor}/20`}></div>
                      </div>
                      <div>
                        <h4 className="text-[17px] font-bold text-slate-900 mb-2 group-hover/tip:text-primary transition-colors">{tip.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-medium text-[15px]">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl relative overflow-hidden">
           {/* Abstract shapes for CTA */}
           <div className="absolute right-0 top-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
           <div className="absolute left-0 bottom-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
           
           <div className="flex items-center gap-6 text-center md:text-left relative z-10">
              <div className="bg-white/10 p-4 rounded-full hidden md:flex border border-white/10">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-heading mb-2">Ready to apply these techniques?</h3>
                <p className="text-slate-300 font-medium text-[15px] max-w-md leading-relaxed">Join LitAcademy and access complete notes designed with these methodologies in mind.</p>
              </div>
           </div>
           <Link href={'/programs'} className="relative z-10 bg-primary text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all whitespace-nowrap active:scale-95 flex items-center gap-2">
              Start Reading Now
           </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;