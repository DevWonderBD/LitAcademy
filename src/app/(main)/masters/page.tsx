import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import PaperBookCard from '@/components/PaperBookCard';
import { promises as fs } from 'fs';
import path from 'path';

export const metadata = {
  title: 'Masters Papers - LitAcademy',
};

async function getMastersPapers() {
  try {
    const dataPath = path.join(process.cwd(), 'public/data/honours-papers.json');
    const fileContents = await fs.readFile(dataPath, 'utf8');
    const allPapers = JSON.parse(fileContents);
    return allPapers['masters-final'];
  } catch (error) {
    return null;
  }
}

export default async function MastersPage() {
  const papers = await getMastersPapers();
  
  if (!papers) {
    notFound();
  }

  // Update hrefs in papers to point to /masters/ instead of /honours/masters-final/
  const modifiedPapers = papers.map((paper: any) => ({
    ...paper,
    href: paper.href.replace('/honours/masters-final/', '/masters/')
  }));

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-16 pb-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Masters Program
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading">
            Masters Final
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Select a paper to explore the syllabus, detailed reading materials, and essential study guides.
          </p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto max-w-6xl px-6 lg:px-20 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {modifiedPapers.map((paper: any) => (
            <PaperBookCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </div>
  );
}
