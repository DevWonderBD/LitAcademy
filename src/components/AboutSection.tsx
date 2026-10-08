import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { CheckCircle2, BookOpen, Lightbulb, MessageSquare, Sparkles, MousePointer2 } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="bg-slate-50 py-16 overflow-hidden border-b border-slate-100">
            <div className="container mx-auto max-w-7xl px-6 lg:px-20">
                
                {/* Part 1: Split Layout (Mission & Vision) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-16 md:mb-24">
                    {/* Left Text */}
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
                        <SectionBadge>Why LitAcademy?</SectionBadge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 mt-4 mb-6 leading-tight font-heading">
                            Don&apos;t just memorise. <br className="hidden md:block"/>
                            <span className="text-primary">Understand deeply.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium max-w-xl">
                            We are redefining how English Literature is taught. Focused exclusively on National University programs, our platform replaces rote memorisation with genuine critical thinking and interactive guidance.
                        </p>

                        <div className="flex flex-col gap-4 text-left w-full max-w-md mx-auto lg:mx-0">
                            {[
                                "Complete, structured study materials",
                                "Contextual literary analysis",
                                "AI-powered personalized mentoring"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="bg-accent/10 p-1 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-slate-700 font-bold">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual composition */}
                    <div className="lg:w-1/2 relative w-full h-[350px] md:h-[450px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="absolute -top-10 -right-6 w-full h-full bg-white rounded-3xl shadow-xl border border-slate-100 rotate-6 p-6 flex flex-col opacity-60"></div>
                                <div className="relative z-10 w-full bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-slate-100 p-8 transform transition-transform hover:-translate-y-2 duration-500">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <span className="text-primary font-black text-xl font-heading">L</span>
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-3 font-heading">Premium Literature Platform</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                        Designed elegantly to make your literature studies distraction-free, focused, and deeply engaging.
                                    </p>
                                    <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
                                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                                    </div>
                                    <div className="h-2 w-3/4 bg-slate-100 rounded-full mb-3"></div>
                                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                                </div>
                                {/* Fixed badge position for mobile */}
                                <div className="absolute -bottom-6 left-4 md:-left-8 z-20 bg-accent text-white px-6 py-4 rounded-2xl shadow-lg shadow-accent/20 font-black text-sm flex items-center gap-3 animate-bounce">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                    </span>
                                    NU Focused
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Methodology Steps */}
                <div className="mb-16 md:mb-24">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-[900] text-slate-900 font-heading">
                            Our Proven <span className="text-primary">Methodology</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative max-w-5xl mx-auto pl-4 md:pl-0">
                        
                        {/* Interactive Connecting Line - Desktop */}
                        <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-slate-200 z-0 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-slide rounded-full"></div>
                        </div>

                        {/* Interactive Connecting Line - Mobile (Timeline) */}
                        <div className="md:hidden absolute top-[32px] bottom-[80px] left-[48px] w-px bg-slate-200 z-0 overflow-hidden">
                            <div className="absolute top-0 left-0 h-[40%] w-full bg-gradient-to-b from-transparent via-primary to-transparent animate-slide-vertical"></div>
                        </div>

                        <div className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/40 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110 z-10">
                                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <div className="ml-6 md:ml-0 md:mt-5 pt-1 md:pt-0">
                                <h4 className="text-xl font-black text-slate-900 mb-1 md:mb-2 font-heading">1. Read</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed px-0 md:px-4">
                                    Engage with highly readable notes and authentic texts designed for clarity.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/40 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-110 z-10">
                                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                            </div>
                            <div className="ml-6 md:ml-0 md:mt-5 pt-1 md:pt-0">
                                <h4 className="text-xl font-black text-slate-900 mb-1 md:mb-2 font-heading">2. Understand</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed px-0 md:px-4">
                                    Grasp difficult vocabulary instantly with our innovative hover-to-learn feature.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg shadow-slate-200/40 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110 z-10">
                                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <div className="ml-6 md:ml-0 md:mt-5 pt-1 md:pt-0">
                                <h4 className="text-xl font-black text-slate-900 mb-1 md:mb-2 font-heading">3. Analyze</h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed px-0 md:px-4">
                                    Deepen your critical thinking by discussing theories with Pythia, your AI guide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 3: Bento Box (Core Features) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
                    {/* Large Box */}
                    <div className="md:col-span-2 bg-white border border-slate-200 rounded-[24px] p-6 md:p-8 flex flex-col justify-center overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-500 min-h-[220px]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/10"></div>
                        <div className="relative z-10">
                            <div className="bg-slate-50 p-2.5 rounded-2xl w-max shadow-sm border border-slate-100 mb-5 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 font-heading">Dedicated to NU Students</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                                A premium space built exclusively for National University English Literature students. Access authentic texts, structured guides, and everything you need to master your reading without the clutter.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5">
                        {/* Top Right Box */}
                        <div className="bg-primary border border-primary/20 rounded-[24px] p-5 md:p-6 flex flex-col justify-center relative overflow-hidden group shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform h-full">
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="relative z-10 text-white">
                                <Sparkles className="w-6 h-6 mb-3 opacity-80" />
                                <h3 className="text-lg font-black mb-1.5 font-heading">Pythia AI</h3>
                                <p className="text-primary-foreground/80 font-medium text-xs md:text-sm leading-relaxed">
                                    Your 24/7 intelligent study guide to discuss complex theories.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Box */}
                        <div className="bg-white border border-slate-200 rounded-[24px] p-5 md:p-6 flex flex-col justify-center shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 h-full">
                            <MousePointer2 className="w-6 h-6 mb-3 text-accent" />
                            <h3 className="text-lg font-black text-slate-900 mb-1.5 font-heading">Interactive Reading</h3>
                            <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">
                                Hover over any difficult literary term to see instant, clear explanations.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
