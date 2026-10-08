"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, ArrowRight, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const programsData = [
  {
    id: 'honours-1',
    type: 'Honours',
    title: '1st Year',
    description: 'Foundation of English Literature, Prose, and Poetry.',
    papersCount: 4,
    href: '/honours/1st-year',
    icon: <Layers className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    id: 'honours-2',
    type: 'Honours',
    title: '2nd Year',
    description: 'Advanced History of English Literature and Romantic Poetry.',
    papersCount: 4,
    href: '/honours/2nd-year',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    hoverBorder: 'hover:border-indigo-300',
  },
  {
    id: 'honours-3',
    type: 'Honours',
    title: '3rd Year',
    description: 'Elizabethan & Jacobean Drama, and Victorian Poetry.',
    papersCount: 8,
    href: '/honours/3rd-year',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    hoverBorder: 'hover:border-purple-300',
  },
  {
    id: 'honours-4',
    type: 'Honours',
    title: '4th Year',
    description: 'Modern Poetry, 20th Century Drama, and Continental Literature.',
    papersCount: 10,
    href: '/honours/4th-year',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    hoverBorder: 'hover:border-emerald-300',
  },
  {
    id: 'masters',
    type: 'Masters',
    title: 'Masters Final',
    description: 'Specialised Advanced Studies, Shakespeare, and Modern Theories.',
    papersCount: 7,
    href: '/honours/masters-final',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    hoverBorder: 'hover:border-amber-300',
  },
];

export default function ProgramsClient() {
  const [activeTab, setActiveTab] = useState<'All' | 'Honours' | 'Masters'>('All');

  const filteredPrograms = programsData.filter((prog) => {
    if (activeTab === 'All') return true;
    return prog.type === activeTab;
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* Sleek Underline Tabs */}
      <div className="inline-flex items-center gap-8 mb-12 border-b border-slate-200 w-full max-w-lg justify-center overflow-x-auto scrollbar-hide">
        {(['All', 'Honours', 'Masters'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative pb-4 text-sm font-bold transition-colors cursor-pointer whitespace-nowrap",
              activeTab === tab
                ? "text-primary"
                : "text-slate-400 hover:text-slate-700"
            )}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredPrograms.map((prog) => (
          <Link href={prog.href} key={prog.id} className="group outline-none">
            <div className={cn(
              "relative bg-white rounded-[24px] p-6 border transition-all duration-300 h-full flex flex-col",
              "hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 shadow-sm",
              prog.hoverBorder,
              "border-slate-100"
            )}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={cn("p-3 rounded-2xl", prog.color)}>
                  {prog.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {prog.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  {prog.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-slate-300" />
                  {prog.papersCount} Papers
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
