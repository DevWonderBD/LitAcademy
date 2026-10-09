import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, FileText, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { promises as fs } from 'fs';
import path from 'path';

export const metadata = {
  title: 'Paper Syllabus - LitAcademy',
};

async function getPaperData(paperSlug: string) {
  try {
    const dataPath = path.join(process.cwd(), `public/data/papers/${paperSlug}.json`);
    const fileContents = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export default async function MastersPaperPage({ params }: { params: Promise<{ paper: string }> }) {
  const { paper } = await params;
  
  const data = await getPaperData(paper);

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Minimal Hero */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 lg:px-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-6">
            Masters Final
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

      <div className="container mx-auto max-w-4xl px-6 lg:px-20 pt-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black text-slate-900">Syllabus overview</h2>
          <span className="text-sm font-bold text-slate-500">{data.units.length} Writers</span>
        </div>

        <div className="space-y-12">
          {data.units.map((unit: any, unitIndex: number) => (
            <div key={unit.id} className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-black">
                    {unitIndex + 1}
                  </span>
                  {unit.title}
                </h3>
                <p className="text-slate-500 font-medium ml-11">{unit.description}</p>
              </div>

              <div className="ml-4 pl-7 border-l-2 border-slate-200 space-y-4">
                {unit.topics.map((topic: any) => {
                  const isLocked = topic.isLocked;
                  const isCompleted = topic.isCompleted;
                  
                  return (
                    <Link 
                      key={topic.id} 
                      href={isLocked ? '#' : `/masters/${paper}/${topic.id}`}
                      className={cn(
                        "group block relative bg-white p-5 rounded-2xl border transition-all duration-300",
                        isLocked 
                          ? "border-slate-100 opacity-70 cursor-not-allowed bg-slate-50" 
                          : "border-slate-200 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 cursor-pointer"
                      )}
                    >
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
