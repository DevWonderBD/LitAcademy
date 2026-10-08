import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import PaperBookCard from '@/components/PaperBookCard';

export const metadata = {
  title: 'Honours Papers - LitAcademy',
};

// Dummy data for papers (we can fetch this from DB later)
const honoursPapers = {
  '1st-year': [
    {
      id: 'paper-1',
      title: 'English Reading Skills',
      code: '211101',
      href: '/honours/1st-year/english-reading-skills',
      color: 'bg-[#1e293b]',
      spineColor: 'bg-[#0f172a]',
      textColor: 'text-slate-100',
    },
    {
      id: 'paper-2',
      title: 'English Writing Skills',
      code: '211103',
      href: '/honours/1st-year/english-writing-skills',
      color: 'bg-[#7c2d12]',
      spineColor: 'bg-[#431407]',
      textColor: 'text-orange-50',
    },
    {
      id: 'paper-3',
      title: 'Introduction to Poetry',
      code: '211105',
      href: '/honours/1st-year/introduction-to-poetry',
      color: 'bg-[#064e3b]',
      spineColor: 'bg-[#022c22]',
      textColor: 'text-emerald-50',
    },
    {
      id: 'paper-4',
      title: 'Introduction to Prose',
      code: '211107',
      href: '/honours/1st-year/introduction-to-prose',
      color: 'bg-[#312e81]',
      spineColor: 'bg-[#1e1b4b]',
      textColor: 'text-indigo-50',
    }
  ],
  '2nd-year': [
    {
      id: 'paper-5',
      title: 'Introduction to Drama',
      code: '221101',
      href: '/honours/2nd-year/introduction-to-drama',
      color: 'bg-[#4a044e]',
      spineColor: 'bg-[#2e0231]',
      textColor: 'text-fuchsia-50',
    },
    {
      id: 'paper-6',
      title: 'Romantic Poetry',
      code: '221103',
      href: '/honours/2nd-year/romantic-poetry',
      color: 'bg-[#831843]',
      spineColor: 'bg-[#500f29]',
      textColor: 'text-pink-50',
    },
    {
      id: 'paper-7',
      title: 'Advanced Reading',
      code: '221105',
      href: '/honours/2nd-year/advanced-reading',
      color: 'bg-[#14532d]',
      spineColor: 'bg-[#052e16]',
      textColor: 'text-green-50',
    },
    {
      id: 'paper-8',
      title: 'Advanced Writing',
      code: '221107',
      href: '/honours/2nd-year/advanced-writing',
      color: 'bg-[#1e3a8a]',
      spineColor: 'bg-[#172554]',
      textColor: 'text-blue-50',
    }
  ]
};

export default function HonoursYearPage({ params }: { params: { year: string } }) {
  const papers = honoursPapers[params.year as keyof typeof honoursPapers];
  
  if (!papers) {
    notFound();
  }

  const formatYearName = (year: string) => {
    return year.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-16 pb-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Honours Program
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading">
            {formatYearName(params.year)}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Select a paper to explore the syllabus, detailed reading materials, and essential study guides.
          </p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto max-w-6xl px-6 lg:px-20 -mt-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {papers.map((paper) => (
            <PaperBookCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </div>
  );
}
