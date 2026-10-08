"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, ArrowRight, ChevronRight, Layers } from 'lucide-react';
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
    papersCount: 6,
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
    papersCount: 6,
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
    href: '/masters',
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
    <div className="w-full">
      {/* Filters */}
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {(['All', 'Honours', 'Masters'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border cursor-pointer",
              activeTab === tab
                ? "bg-slate-900 text-white border-slate-900 shadow-md"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            {tab} Programs
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((prog) => (
          <Link href={prog.href} key={prog.id} className="group outline-none">
            <div className={cn(
              "relative bg-white rounded-3xl p-6 border transition-all duration-300 h-full flex flex-col",
              "hover:shadow-xl hover:-translate-y-1 shadow-sm",
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
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  {prog.papersCount} Papers
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPrograms.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-700">No programs found</h3>
          <p className="text-slate-500 mt-2">Check back later for updates.</p>
        </div>
      )}
    </div>
  );
}
