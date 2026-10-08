import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const About2 = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-24 px-6 lg:px-20 border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Text */}
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <SectionBadge>Idea 2: Split Layout</SectionBadge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 mt-4 mb-6 leading-tight">
                            Move beyond memorisation. <br className="hidden lg:block"/>
                            <span className="text-primary">Understand the text.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium max-w-xl">
                            We are redefining how English Literature is taught. Focused exclusively on NU programmes, our platform replaces rote memorisation with genuine critical thinking, authentic text readings, and interactive guidance.
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
                    <div className="lg:w-1/2 relative w-full h-[400px] md:h-[500px]">
                        {/* Decorative background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

                        {/* Floating Cards Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Back card */}
                                <div className="absolute -top-10 -right-6 w-full h-full bg-white rounded-3xl shadow-xl border border-slate-100 rotate-6 p-6 flex flex-col opacity-60"></div>
                                {/* Front card */}
                                <div className="relative z-10 w-full bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-slate-100 p-8 transform transition-transform hover:-translate-y-2 duration-500">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                        <span className="text-primary font-black text-xl">L</span>
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-3">Premium Literature Platform</h4>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                        Designed elegantly to make your literature studies distraction-free, focused, and deeply engaging.
                                    </p>
                                    <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
                                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                                    </div>
                                    <div className="h-2 w-3/4 bg-slate-100 rounded-full mb-3"></div>
                                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                                </div>

                                {/* Small floating badge */}
                                <div className="absolute -bottom-6 -left-8 z-20 bg-accent text-white px-6 py-4 rounded-2xl shadow-lg shadow-accent/20 font-black text-sm flex items-center gap-3 animate-bounce">
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
            </div>
        </section>
    );
};

export default About2;
