import React from 'react';
import { notFound } from 'next/navigation';
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

export default async function HonoursPaperPage({ params }: { params: Promise<{ year: string, paper: string }> }) {
  const { year, paper } = await params;
  
  const data = await getPaperData(paper);

  if (!data) {
    notFound();
  }

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

      <div className="container mx-auto max-w-4xl px-6 lg:px-20 pt-16 text-center">
        <div className="flex flex-col items-center justify-center space-y-4 max-w-lg mx-auto bg-white p-12 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <span className="text-4xl animate-bounce mt-2">☕</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 font-heading">
            Coming Soon!
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Oops! Our content team is still fueled by coffee and literary dreams. 
            The study materials for this paper are being crafted and will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
