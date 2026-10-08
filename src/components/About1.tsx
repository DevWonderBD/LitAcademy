import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { BookOpen, Sparkles, MousePointer2 } from 'lucide-react';

const About1 = () => {
    return (
        <section className="bg-background py-16 md:py-24 px-6 lg:px-20 border-b border-slate-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center flex flex-col items-center mb-12">
                    <SectionBadge>Idea 1: Bento Box</SectionBadge>
                    <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 mt-4 mb-4 tracking-tight">
                        A modern approach to <span className="text-primary">Literature</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        We focus on deep critical understanding of English literature, specially tailored to support students in National University programmes.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Large Main Box */}
                    <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/10"></div>
                        <div className="relative z-10">
                            <div className="bg-white p-3 rounded-2xl w-max shadow-sm border border-slate-100 mb-6">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Dedicated to NU Students</h3>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-medium">
                                We designed this platform from the ground up for National University English Literature students. No more relying on poorly translated guide books. Experience authentic texts, structured programme guides, and comprehensive study materials.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Top Right Box */}
                        <div className="bg-primary border border-primary/20 rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="relative z-10 text-white">
                                <Sparkles className="w-8 h-8 mb-4 opacity-80" />
                                <h3 className="text-xl font-black mb-2">Pythia AI</h3>
                                <p className="text-primary-foreground/80 font-medium text-sm leading-relaxed">
                                    Your 24/7 intelligent study guide to discuss complex critical theories and plot analyses.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Box */}
                        <div className="bg-white border border-slate-200 rounded-[32px] p-8 flex flex-col justify-center shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                            <MousePointer2 className="w-8 h-8 mb-4 text-accent" />
                            <h3 className="text-xl font-black text-slate-900 mb-2">Interactive Reading</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                Hover over any difficult literary term or archaic word to see instant, clear explanations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
