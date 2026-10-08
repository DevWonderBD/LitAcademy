import React from 'react';
import ProgramsClient from '@/components/ProgramsClient';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Programs - LitAcademy',
  description: 'Explore our comprehensive English Literature programs for National University students.',
};

export default function ProgramsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Clean Light Hero Section */}
      <div className="bg-gradient-to-b from-slate-50 to-background pt-16 pb-12 px-6 lg:px-20 border-b border-border/40">
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            National University Syllabus
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-heading tracking-tight max-w-3xl">
            Choose Your Academic <span className="text-primary italic">Year</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Select your current year to access comprehensive reading materials, literary term breakdowns, and interactive study guides.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-20 pt-12">
        <ProgramsClient />
      </div>
    </div>
  );
}
