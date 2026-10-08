import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen, MousePointer2, CheckCircle, Info } from "lucide-react";
import React from "react";

interface HowItWorksModalProps {
  children: React.ReactNode;
}

export function HowItWorksModal({ children }: HowItWorksModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={React.isValidElement(children) ? children : undefined}>{!React.isValidElement(children) ? children : null}</DialogTrigger>
      <DialogContent className="w-[90vw] md:max-w-[850px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl bg-card">
        {/* Header Section with elegant styling */}
        <DialogHeader className="bg-secondary/50 p-5 sm:p-8 pb-5 sm:pb-6 border-b border-border/50 text-left">
          <DialogTitle className="font-heading text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
            How LitAcademy Works
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground mt-2 font-medium">
            Your structured path to understanding English literature, step by step.
          </DialogDescription>
        </DialogHeader>

        {/* Steps Section */}
        <div className="p-5 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex md:flex-col gap-3 sm:gap-4 items-start flex-1">
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full text-primary shrink-0">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">1. Pick Your Program</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Start by selecting your exact academic year from the NU Honours or Masters syllabus. No searching needed — everything is perfectly organised by paper.
                </p>
              </div>
            </div>

            <div className="flex md:flex-col gap-3 sm:gap-4 items-start flex-1">
              <div className="bg-accent/10 p-2 sm:p-2.5 rounded-full text-accent shrink-0">
                <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">2. Hover to Understand</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  As you read a text, just hover your mouse (or tap on mobile) over any highlighted literary term to see a simple, instant explanation right there.
                </p>
              </div>
            </div>

            <div className="flex md:flex-col gap-3 sm:gap-4 items-start flex-1">
              <div className="bg-green-100 p-2 sm:p-2.5 rounded-full text-green-600 shrink-0">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1 text-sm sm:text-base">3. Think & Practise</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Save your own personal notes directly beside the text and use our short practice quizzes to test your understanding before the real exams.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing / Access Info */}
          <div className="mt-2 bg-blue-50/50 dark:bg-blue-900/10 p-3 sm:p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 flex items-start gap-2.5 sm:gap-3">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
              <strong className="block text-sm mb-0.5">Is it free?</strong>
              Yes. All structured texts, hover-explanations, and basic reading features are currently completely <span className="font-bold">free to access</span> for all students.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

