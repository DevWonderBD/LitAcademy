import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { BookOpen, Lightbulb, MessageSquare } from 'lucide-react';

const About3 = () => {
    return (
        <section className="bg-background py-16 md:py-24 px-6 lg:px-20 border-b border-slate-100">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center flex flex-col items-center mb-16">
                    <SectionBadge>Idea 3: Methodology</SectionBadge>
                    <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 mt-4 mb-6 tracking-tight max-w-3xl">
                        How we help you master <br/> <span className="text-primary">English Literature</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg font-medium">
                        Our study method is built specifically for NU programs to ensure you actually understand the texts, rather than just memorising answers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-slate-100 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/40 mb-6 group-hover:border-primary/20 transition-all duration-300">
                            <BookOpen className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">1. Read</h3>
                        <p className="text-slate-500 font-medium leading-relaxed px-4">
                            Engage with structured, highly readable notes and authentic texts designed to provide clarity on complex plots.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/40 mb-6 group-hover:border-accent/20 transition-all duration-300">
                            <Lightbulb className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">2. Understand</h3>
                        <p className="text-slate-500 font-medium leading-relaxed px-4">
                            Instantly grasp difficult vocabulary and literary devices with our innovative hover-to-learn feature.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/40 mb-6 group-hover:border-primary/20 transition-all duration-300">
                            <MessageSquare className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">3. Analyze</h3>
                        <p className="text-slate-500 font-medium leading-relaxed px-4">
                            Deepen your critical thinking by discussing themes and theories with Pythia, your AI literature guide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;
