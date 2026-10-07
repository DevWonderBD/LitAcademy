"use client";

import HeroFigure from '@/assets/HeroFigure.png';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type HeroVariant = {
  title: string;
  highlight: string;
  description: string;
};

const variants: HeroVariant[] = [
  {
    title: "Where great literature",
    highlight: "finally makes sense.",
    description:
      "Structured readings for NU Honours and Masters students. Hover over any literary term to understand it on the spot — no prior background needed.",
  },
  {
    title: "Read deeply.",
    highlight: "Understand fully.",
    description:
      "Explore every text in your programme with clarity. Each passage is broken down so you can follow the argument, grasp the context, and think for yourself.",
  },
  {
    title: "Literature for thinkers,",
    highlight: "not just exam-takers.",
    description:
      "Go beyond memorisation. Build a genuine understanding of the texts, authors, and ideas that define English literature — one topic at a time.",
  },
  {
    title: "Every term explained.",
    highlight: "Every idea unpacked.",
    description:
      "Encounter an unfamiliar word? Hover over it. Confused by a concept? It's explained right there. Your reading experience, finally uninterrupted.",
  },
  {
    title: "Your guide to",
    highlight: "English literature.",
    description:
      "From the Romantics to the Moderns, from close reading to critical theory — everything in your NU programme, made genuinely approachable.",
  },
];

function pickRandom<T>(arr: T[]): { value: T; index: number } {
  const index = Math.floor(Math.random() * arr.length);
  return { value: arr[index], index };
}

const INTERVAL_MS = 5500;

const Hero = () => {
  const [current, setCurrent] = useState<HeroVariant>(variants[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Pick a random variant on mount (client-only to avoid hydration mismatch)
  useEffect(() => {
    const { value, index } = pickRandom(variants);
    setCurrent(value);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => {
          // Pick next variant, skipping current
          let next = Math.floor(Math.random() * (variants.length - 1));
          if (next >= prev) next += 1;
          setCurrent(variants[next]);
          return next;
        });
        // Fade back in
        setVisible(true);
      }, 400);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="bg-secondary pt-12 md:pt-8 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="lg:w-[60%] lg:py-10 z-10">
            <span className="bg-accent/10 border border-accent/20 text-accent-hover px-6 py-1.5 rounded-xl text-[12px] lg:text-[13px] font-black tracking-wider shadow-sm inline-block uppercase font-reading gap-1 italic">
              Literature Learning Made Easy
            </span>

            {/* Rotating title + description */}
            <div
              className="my-6 transition-opacity duration-400"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-foreground leading-[1.15] tracking-tight font-heading">
                {current.title}{" "}
                <span className="text-primary">{current.highlight}</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg max-w-lg mt-5 leading-relaxed font-medium">
                {current.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 my-8">
              <div className="text-sm font-semibold text-muted-foreground">
                Pick your programme → Read and hover → Think and practise
              </div>
              <div className="flex flex-wrap gap-2 text-primary">
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Hover-to-learn terms</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Personal reading journal</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Practice quizzes</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-primary/10">Pythia, your AI guide</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 mb-6">
              <button className="bg-primary text-white px-4 md:px-8 py-2.5 rounded-full font-extrabold text-sm flex items-center gap-2 hover:bg-primary-hover transition-all shadow-lg cursor-pointer group">
                Choose Your Programme <span className="text-xl inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </button>

              <button className="flex items-center gap-2 font-extrabold text-foreground hover:text-accent transition-all group border border-accent p-1 rounded-full">
                <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay className="text-[10px] ml-0.5" />
                </span>
                <span className="mr-2">See How It Works</span>
              </button>
            </div>
          </div>

          <div className="lg:w-[40%] relative flex justify-center">
            <div className="absolute -z-10 w-[120%] h-[120%] -top-10 -right-10 opacity-30 pointer-events-none">
              <div className="absolute top-20 right-10 w-64 h-96 bg-primary rounded-[40px] rotate-[35deg] blur-3xl"></div>
              <div className="absolute bottom-10 right-20 w-64 h-80 bg-accent rounded-[40px] rotate-[15deg] blur-3xl"></div>
            </div>

            <div className="absolute top-20 left-0 bg-white p-3 rounded-2xl shadow-2xl z-20 animate-pulse">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
            </div>
            <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-2xl z-20">
              <Image src="https://www.google.com/favicon.ico" width={24} height={24} alt="google" className="w-6 h-6" unoptimized />
            </div>

            <div className="relative">
              <Image
                src={HeroFigure}
                alt="student studying English literature"
                width={600}
                height={600}
                className="relative z-10 w-full max-w-lg object-contain"
              />
              <div className="absolute bottom-10 -right-10 w-[450px] h-[300px] bg-gradient-to-br from-primary to-accent rounded-[50px] -rotate-12 -z-0 opacity-80 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;