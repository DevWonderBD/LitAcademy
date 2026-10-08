"use client";

import { Play, ArrowRight, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HowItWorksModal } from '@/components/modals/HowItWorksModal';
import { SectionBadge } from '@/components/ui/section-badge';
import HoverToLearnScene from '@/components/hero-scenes/HoverToLearnScene';
import PythiaChatScene from '@/components/hero-scenes/PythiaChatScene';
import ProgressTrackerScene from '@/components/hero-scenes/ProgressTrackerScene';
import LiteraryTermsScene from '@/components/hero-scenes/LiteraryTermsScene';

import Link from 'next/link';

type HeroVariant = {
  id: number;
  title: string;
  highlight: string;
  description: string;
  sceneId: string;
};

const SceneMap: Record<string, React.ElementType> = {
  HoverToLearnScene,
  PythiaChatScene,
  ProgressTrackerScene,
  LiteraryTermsScene,
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Hero = () => {
  const [variants, setVariants] = useState<HeroVariant[]>([]);
  const [current, setCurrent] = useState<HeroVariant | null>(null);

  useEffect(() => {
    fetch('/data/hero.json')
      .then(res => res.json())
      .then(data => {
        setVariants(data);
        setCurrent(pickRandom(data));
      })
      .catch(console.error);
  }, []);

  // Safe fallback while hydrating or fetching
  const display = current || (variants.length > 0 ? variants[0] : null);
  const SceneComponent = display ? SceneMap[display.sceneId] : null;

  return (
    <section>
      <div className="bg-secondary pt-12 md:pt-8 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[500px]">

          {/* Left Content */}
          <div className="lg:w-[55%] lg:py-10 z-10 flex flex-col justify-center">
            <SectionBadge>Literature Learning Made Easy</SectionBadge>

            <div className="my-5 min-h-[140px]" suppressHydrationWarning>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-foreground leading-[1.15] tracking-tight font-heading" suppressHydrationWarning>
                {display?.title}{" "}
                <span className="text-primary" suppressHydrationWarning>{display?.highlight}</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg max-w-lg lg:max-w-[85%] mt-5 leading-relaxed font-medium" suppressHydrationWarning>
                {display?.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 my-8">
              <div className="text-md font-semibold text-muted-foreground">
                Pick your programme → Read and hover → Think and practise
              </div>
              <div className="flex flex-wrap gap-2 text-lg lg:text-md text-primary">
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Hover-to-learn terms</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Personal reading journal</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Practice quizzes</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Pythia, your AI guide</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 mb-6">
              <Link href="/programs" className="cursor-pointer group relative overflow-hidden flex items-center gap-1.5 md:gap-2 bg-primary text-white px-5 md:px-8 py-3 md:py-3.5 rounded-full font-bold text-[15px] md:text-[15px] hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                <span className="relative z-10">Choose Programme</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </Link>

              <HowItWorksModal>
                <button className="cursor-pointer group flex items-center gap-2 md:gap-2.5 font-bold text-[15px] md:text-[15px] text-foreground hover:text-accent transition-all duration-400 border border-accent/20 hover:border-accent/50 p-1.5 pr-5 md:pr-7 rounded-full bg-white hover:bg-accent/5 hover:shadow-xl hover:shadow-accent/10 whitespace-nowrap hover:-translate-y-0.5">
                  <span className="relative w-10 h-10 md:w-10 md:h-10 flex items-center justify-center bg-accent text-white rounded-full shadow-md group-hover:scale-110 group-hover:bg-accent-hover transition-all duration-500">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 duration-[5000ms]"></span>
                    <Play className="w-5 h-5 md:w-4 md:h-4 ml-0.5 fill-current relative z-10" />
                  </span>
                  <span>How It Works</span>
                </button>
              </HowItWorksModal>
            </div>
          </div>

          {/* Right Content - Dynamic Scenes */}
          <div className="lg:w-[45%] w-full py-10 lg:py-0 flex justify-center relative min-h-[400px]">
             {SceneComponent && <SceneComponent />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;