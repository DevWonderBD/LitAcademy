"use client";
import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';
import { FaBookOpen, FaLightbulb, FaMagic } from 'react-icons/fa';

const InteractiveStudyMethod = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Explainer */}
          <div className="w-full lg:w-1/2 space-y-6">
            <SectionBadge>Study Method</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 leading-tight">
              Read Smarter with <br/>
              <span className="text-primary">Hover-to-Learn</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              No more searching for meanings in heavy guide books or opening multiple tabs. At LitAcademy, critical theories, allusions, and difficult literary terms are explained instantly right where you read them.
            </p>
            
            <ul className="space-y-6 pt-6">
              <li className="flex items-start gap-4">
                <div className="bg-teal-50 p-3.5 rounded-xl text-primary flex-shrink-0 shadow-sm border border-teal-100">
                  <FaMagic size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Instant Context</h4>
                  <p className="text-slate-600 mt-1.5 leading-relaxed">
                    Get historical and biographical context behind the text without ever leaving the page.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-amber-50 p-3.5 rounded-xl text-amber-500 flex-shrink-0 shadow-sm border border-amber-100">
                  <FaLightbulb size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Critical Analysis</h4>
                  <p className="text-slate-600 mt-1.5 leading-relaxed">
                    Understand complex metaphors, allegories, and symbols instantly to enrich your exam answers.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Interactive Demo */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-50/50 to-slate-100/50 rounded-full blur-3xl -z-10"></div>

            <div className="bg-[#fcfbf9] border border-slate-200 rounded-2xl p-8 md:p-12 shadow-2xl shadow-slate-200/60 relative z-10 transition-transform duration-500 hover:-translate-y-1">
              
              {/* Decorative top bar */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <FaBookOpen className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ode to a Nightingale</span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md">John Keats</span>
              </div>

              {/* The Text */}
              <div className="font-serif text-[19px] md:text-[21px] text-slate-800 leading-[2.2] tracking-wide">
                <p>
                  &quot;Thou wast not born for death, immortal Bird!<br/>
                  No hungry generations tread thee down;<br/>
                  The voice I hear this passing night was heard<br/>
                  In ancient days by 
                  
                  {/* Hoverable Term 1 */}
                  <span className="relative group inline-block mx-1.5">
                    <span className="cursor-pointer text-primary border-b-[2.5px] border-primary border-dashed font-bold hover:bg-teal-50 transition-colors px-1 rounded-sm">
                      emperor and clown
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-5 bg-slate-900 text-white text-[15px] font-sans rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 shadow-2xl z-20 pointer-events-none">
                      <div className="font-bold text-accent mb-2 text-base">Social Universality</div>
                      <p className="leading-relaxed text-slate-200">The nightingale&apos;s song is universal and eternal, heard equally by the highest (emperor) and the lowest (clown/peasant) classes of society throughout history.</p>
                      
                      {/* Triangle pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-slate-900"></div>
                    </div>
                  </span>:
                  <br/>
                  Perhaps the self-same song that found a path<br/>
                  Through the sad heart of 
                  
                  {/* Hoverable Term 2 */}
                  <span className="relative group inline-block mx-1.5">
                    <span className="cursor-pointer text-primary border-b-[2.5px] border-primary border-dashed font-bold hover:bg-teal-50 transition-colors px-1 rounded-sm">
                      Ruth
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-5 bg-slate-900 text-white text-[15px] font-sans rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 shadow-2xl z-20 pointer-events-none">
                      <div className="font-bold text-accent mb-2 text-base">Biblical Allusion</div>
                      <p className="leading-relaxed text-slate-200">A reference to the Biblical figure Ruth, who wept in the alien cornfields out of homesickness. Keats connects his personal sorrow with this ancient myth.</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-slate-900"></div>
                    </div>
                  </span>, when, sick for home,<br/>
                  She stood in tears amid the alien corn;&quot;
                </p>
              </div>

              {/* Instruction Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border-4 border-white text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-xl flex items-center gap-3 animate-bounce whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                Hover over the highlighted words
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudyMethod;

