"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Map, Sparkles, MonitorSmartphone, ArrowRight, Library, Quote } from 'lucide-react';

export default function AboutContent() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30 pointer-events-none -z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary font-bold uppercase tracking-widest text-[11px] mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Our Story
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 font-heading tracking-tight leading-[1.1]">
            Reimagining the <br className="hidden md:block" />
            <span className="text-primary italic font-reading font-medium">Literature</span> Experience
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            LitAcademy is a dedicated academic platform designed exclusively for National University English Literature students. We transform fragmented reading into a cohesive, structured journey.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Our Philosophy (Bento-style) */}
      <section className="py-12 md:py-24 px-6 lg:px-20 bg-card border-y border-border">
        <motion.div 
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 font-heading tracking-tight">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We believe in moving away from conventional rote memorization towards genuine comprehension and literary appreciation. Literature is not meant to be memorized; it is meant to be felt, understood, and analyzed.
                </p>
                <p>
                  Our goal is to provide a calm, distraction-free environment where students can deeply engage with the writers, texts, and critical theories that shape their academic programs.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div className="bg-secondary rounded-[2rem] p-10 md:p-16 h-full flex flex-col justify-center relative overflow-hidden group">

                <Quote className="w-12 h-12 text-primary/20 mb-8 transform -scale-x-100" />
                <blockquote className="text-2xl md:text-4xl font-reading italic text-foreground leading-snug relative z-10 mb-8">
                  &quot;Read not to contradict and confute; nor to believe and take for granted; but to weigh and consider.&quot;
                </blockquote>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-px bg-primary/30"></div>
                  <p className="text-foreground font-bold tracking-widest uppercase text-xs">
                    Francis Bacon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. The Academic Approach (Bento Grid) */}
      <section className="py-12 md:py-24 px-6 lg:px-20 bg-background">
        <motion.div 
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-foreground mb-4 font-heading tracking-tight">
              The Academic Approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg font-medium">
              Meticulously designed to ensure clarity, depth, and structure.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Approach 1 (Spans 2 cols on lg) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 bg-card rounded-[2rem] p-10 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Map className="w-48 h-48 text-primary transform rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Structured Programs</h3>
                <p className="text-muted-foreground font-medium leading-relaxed max-w-md text-lg">
                  Every year and paper is meticulously organized. You follow a clear path from writer to text, ensuring you never feel lost in your academic journey.
                </p>
              </div>
            </motion.div>

            {/* Approach 2 */}
            <motion.div variants={fadeInUp} className="bg-muted rounded-[2rem] p-10 border border-transparent hover:border-border transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Library className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">In-depth Readings</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Rich, detailed analyses and thematic breakdowns, replacing conventional materials with insightful academic content.
              </p>
            </motion.div>

            {/* Approach 3 */}
            <motion.div variants={fadeInUp} className="bg-muted rounded-[2rem] p-10 border border-transparent hover:border-border transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Contextual Learning</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Literary terms and historical contexts are integrated seamlessly, ensuring you grasp the depth of every era and author.
              </p>
            </motion.div>
            
            {/* Approach 4 (Spans 2 cols on lg) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 bg-primary text-primary-foreground rounded-[2rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                <div className="max-w-md">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                    <MonitorSmartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Always Accessible</h3>
                  <p className="text-primary-foreground/90 font-medium leading-relaxed text-lg">
                    Read seamlessly on any device. Your progress is synced, offering a beautiful typographic experience wherever you go.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-12 md:py-24 px-6 lg:px-20 bg-secondary border-t border-border text-center">
        <motion.div 
          className="container mx-auto max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-foreground mb-6 font-heading tracking-tight">
            Begin Your Journey
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-xl mb-12 font-medium">
            Join thousands of students who have already transformed their approach to English Literature.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href="/programs" 
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 active:scale-95 group"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

