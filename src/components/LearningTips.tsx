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
        <div className="text-center mb-10 flex flex-col items-center">
          <SectionBadge className="mx-auto">Learning Optimization</SectionBadge>
          <h2 className="text-[28px] md:text-5xl font-[900] text-slate-900 leading-tight">
            Master Your Skills with <br />
            <span className="text-primary">Expert Techniques</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {tipsData.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-orange-50 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`${section.accentColor} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {IconMap[section.iconType]}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{section.category}</h3>
              </div>

              <div className="space-y-8">
                {section.tips.map((tip, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-2">
                      <div className={`w-2 h-2 rounded-full ${section.bulletColor}`}></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-800 mb-1">{tip.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-primary rounded-[30px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-2xl shadow-teal-100">
           <div className="flex items-center gap-4 text-center md:text-left">
              <div className="bg-white/20 p-3 rounded-full hidden sm:block">
                <Zap className="w-8 h-8 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-black">Ready to Accelerate?</h3>
                <p className="opacity-80 font-medium">Apply these strategies to achieve unparalleled progress in your journey.</p>
              </div>
           </div>
           <Link href={'/programs'} className="bg-white text-primary px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all whitespace-nowrap active:scale-95">
              Explore More Resources
           </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;