import React from 'react';
import ProgramsClient from '@/components/ProgramsClient';
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Programs - LitAcademy',
  description: 'Explore our comprehensive English Literature programs for National University students.',
};

export default function ProgramsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 pt-20 pb-24 px-6 lg:px-20 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            National University Syllabus
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-white mb-6 leading-tight font-heading tracking-tight">
            Explore Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Comprehensive study materials, context breakdowns, and interactive guides designed specifically for your academic year.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-20 -mt-12 relative z-20">
        <ProgramsClient />
      </div>
    </div>
  );
}
