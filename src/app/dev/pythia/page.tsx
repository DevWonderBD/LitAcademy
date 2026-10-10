import React from 'react';
import { PythiaMoodPlayground } from '@/components/pythia/PythiaLogo';

export default function PythiaDevPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-[#0F766E] mb-8">Pythia Logo & Mood Playground</h1>
        <PythiaMoodPlayground />
      </div>
    </div>
  );
}

