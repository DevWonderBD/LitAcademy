import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, FileText, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Paper Syllabus - LitAcademy',
};

// Dummy Data
const paperData = {
  title: "English Reading Skills",
  code: "211101",
  year: "1st Year Honours",
  description: "Develop critical reading strategies, comprehend complex literary texts, and master the art of contextual analysis.",
  units: [
    {
      id: "unit-1",
      title: "Part A: Reading Comprehension",
      description: "Fundamental techniques for extracting meaning from unseen texts.",
      topics: [
        { id: "topic-1", title: "Understanding Main Ideas", isLocked: false, isCompleted: true },
        { id: "topic-2", title: "Inferring Tone and Style", isLocked: false, isCompleted: false },
        { id: "topic-3", title: "Vocabulary in Context", isLocked: true, isCompleted: false },
      ]
    },
    {
      id: "unit-2",
      title: "Part B: Literary Texts (Prose)",
      description: "In-depth analysis of selected short stories and essays.",
      topics: [
        { id: "topic-4", title: "The Luncheon by W. Somerset Maugham", isLocked: true, isCompleted: false },
        { id: "topic-5", title: "The Gift of the Magi by O. Henry", isLocked: true, isCompleted: false },
        { id: "topic-6", title: "Shooting an Elephant by George Orwell", isLocked: true, isCompleted: false },
      ]
    },
    {
      id: "unit-3",
      title: "Part C: Literary Texts (Poetry)",
      description: "Exploring structure, rhythm, and themes in classic poetry.",
      topics: [
        { id: "topic-7", title: "I Wandered Lonely as a Cloud", isLocked: true, isCompleted: false },
        { id: "topic-8", title: "Stopping by Woods on a Snowy Evening", isLocked: true, isCompleted: false },
      ]
    }
  ]
};

export default async function HonoursPaperPage({ params }: { params: Promise<{ year: string, paper: string }> }) {
  const { year, paper } = await params;
  
  // Here we would normally fetch the paper data from the DB using `paper` slug.
  const data = paperData;

  const formatYearName = (str: string) => {
    return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Minimal Hero */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 lg:px-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-6">
            {formatYearName(year)}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-heading tracking-tight">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-slate-400 font-bold tracking-widest text-sm uppercase mb-6">
            <span>Paper {data.code}</span>
          </div>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {data.description}
          </p>
        </div>
      </div>

      {/* Syllabus Content */}
      <div className="container mx-auto max-w-4xl px-6 lg:px-20 pt-16">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black text-slate-900">Syllabus overview</h2>
          <span className="text-sm font-bold text-slate-500">{data.units.length} Units</span>
        </div>

        <div className="space-y-12">
          {data.units.map((unit, unitIndex) => (
            <div key={unit.id} className="relative">
              
              {/* Unit Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-black">
                    {unitIndex + 1}
                  </span>
                  {unit.title}
                </h3>
                <p className="text-slate-500 font-medium ml-11">{unit.description}</p>
              </div>

              {/* Topics List */}
              <div className="ml-4 pl-7 border-l-2 border-slate-200 space-y-4">
                {unit.topics.map((topic) => {
                  
                  const isLocked = topic.isLocked;
                  const isCompleted = topic.isCompleted;
                  
                  return (
                    <Link 
                      key={topic.id} 
                      href={isLocked ? '#' : `/honours/${year}/${paper}/${topic.id}`}
                      className={cn(
                        "group block relative bg-white p-5 rounded-2xl border transition-all duration-300",
                        isLocked 
                          ? "border-slate-100 opacity-70 cursor-not-allowed bg-slate-50" 
                          : "border-slate-200 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 cursor-pointer"
                      )}
                    >
                      {/* Status Icon */}
                      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-50 rounded-full flex items-center justify-center">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 bg-white" />
                        ) : (
                          <div className="w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                            isLocked ? "bg-slate-200 text-slate-400" : "bg-primary/10 text-primary"
                          )}>
                            {isLocked ? <Lock className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className={cn(
                              "font-bold text-base transition-colors",
                              isLocked ? "text-slate-500" : "text-slate-900 group-hover:text-primary"
                            )}>
                              {topic.title}
                            </h4>
                            <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-1">
                              Reading Material
                            </p>
                          </div>
                        </div>

                        {!isLocked && (
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
