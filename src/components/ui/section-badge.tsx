import React from 'react';
import { cn } from "@/lib/utils";

import { BookOpen } from 'lucide-react';

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionBadge({ children, className, ...props }: SectionBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 border border-accent/30 bg-transparent px-4 py-1.5 rounded-md text-xs font-bold text-accent uppercase tracking-widest mb-6",
        className
      )}
      {...props}
    >
      <BookOpen className="w-3.5 h-3.5" />
      {children}
    </div>
  );
}

