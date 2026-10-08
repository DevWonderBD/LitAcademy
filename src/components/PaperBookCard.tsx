import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';

interface PaperBookCardProps {
  paper: {
    id: string;
    title: string;
    code: string;
    href: string;
    color: string;
    textColor: string;
    spineColor: string;
  };
}

export default function PaperBookCard({ paper }: PaperBookCardProps) {
  return (
    <Link href={paper.href} className="group block w-full max-w-[280px] mx-auto outline-none [perspective:1200px]">
      <div className={cn(
        "relative w-full aspect-[2/3] rounded-r-2xl rounded-l-md transition-all duration-500 [transform-style:preserve-3d]",
        "group-hover:-translate-y-4 group-hover:[transform:rotateY(-10deg)] shadow-[15px_20px_35px_rgba(0,0,0,0.15)] group-hover:shadow-[25px_35px_50px_rgba(0,0,0,0.25)]",
        paper.color
      )}>
        
        {/* Book Spine (Left side) */}
        <div className={cn(
          "absolute top-0 left-0 h-full w-8 rounded-l-md border-r border-black/10 z-10 opacity-90",
          paper.spineColor,
          "shadow-[inset_-2px_0_6px_rgba(0,0,0,0.15)]"
        )}>
           <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
             <div className="h-4 w-[1px] bg-white/20"></div>
             <div className="h-10 w-[1px] bg-white/20"></div>
           </div>
        </div>

        {/* Book Texture / Details */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 rounded-r-2xl rounded-l-md mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-white/40 to-transparent rounded-r-2xl pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/30 to-transparent rounded-br-2xl pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/30 to-transparent rounded-tr-2xl pointer-events-none"></div>

        {/* Book Cover Content */}
        <div className="absolute inset-0 pl-12 pr-6 py-10 flex flex-col z-20">
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Ornaments */}
            <div className="w-16 h-[1px] bg-current opacity-30 mb-8"></div>
            
            <h3 className={cn(
              "text-2xl md:text-3xl font-black font-heading leading-snug tracking-tight drop-shadow-md",
              paper.textColor
            )}>
              {paper.title}
            </h3>
            
            <div className="w-16 h-[1px] bg-current opacity-30 mt-8 mb-8"></div>
            
            <p className={cn("text-xs font-bold uppercase tracking-[0.2em] opacity-80", paper.textColor)}>
              PAPER {paper.code}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-auto">
            <span className={cn(
              "text-[10px] uppercase font-bold tracking-[0.15em] px-5 py-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/10 backdrop-blur-sm",
              paper.textColor,
              "border-current"
            )}>
              Open Book
            </span>
          </div>

        </div>

        {/* Page edges (Right side depth illusion) */}
        <div className="absolute top-2 bottom-2 right-[-6px] w-[6px] bg-[#fdfdfd] rounded-r-sm z-0 [transform:translateZ(-1px)] border-y border-r border-[#e0e0e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="w-full h-full repeating-linear-gradient-pages opacity-30"></div>
        </div>
      </div>
    </Link>
  );
}
