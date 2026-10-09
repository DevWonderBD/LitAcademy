"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Repeat, Sparkles, Clock, Search, ArrowRight, Languages } from 'lucide-react';
import Link from 'next/link';

const methods = [
  {
    id: "active-recall",
    title: "Active Recall",
    subtitle: "Retrieval Practice",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "bg-teal-50 text-teal-600 border-teal-100",
    descriptionEn: "Instead of passively re-reading texts or simply highlighting, force your brain to actively retrieve information from memory. This strengthens neural pathways and ensures long-term retention. After reading a chapter or a critical essay, close the book and ask yourself: What were the key events? What motivated the characters? Which literary devices were prominent? The harder your brain works to retrieve the answer, the stronger the memory becomes.",
    descriptionBn: "বই দেখে বারবার রিডিং পড়া বা শুধু হাইলাইট করার চেয়ে, না দেখে মনে করার চেষ্টা করাটা ব্রেইনের জন্য অনেক বেশি কার্যকরী। পড়ার পর বই বন্ধ করে নিজেকে প্রশ্ন করুন— কী পড়লাম, মূল থিম কী ছিল, চরিত্রগুলো কেমন ছিল, বা কোন ধরনের ফিগারস অফ স্পিচ ব্যবহার করা হয়েছে? আপনার ব্রেইন উত্তর মনে করার জন্য যত বেশি চেষ্টা করবে, পড়া তত বেশিদিন মনে থাকবে।",
    exampleEn: "For instance, after reading 'Macbeth', close the text and try to map out Macbeth's character arc or recall key quotes from memory rather than just looking at a summary.",
    exampleBn: "যেমন: 'Macbeth' পড়ার পর শুধু সামারি না পড়ে, বই বন্ধ করে ম্যাকবেথের ক্যারেক্টার আর্ক বা মোটিভেশন নিজে নিজে রিকল করার চেষ্টা করুন।",
    feature: {
      text: "Our Quizzes are designed perfectly for practicing active recall.",
      linkText: "Take a Quiz",
      href: "/dashboard"
    }
  },
  {
    id: "spaced-repetition",
    title: "Spaced Repetition",
    subtitle: "Distributed Practice",
    icon: <Repeat className="w-8 h-8" />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    descriptionEn: "The 'forgetting curve' shows that we forget information rapidly if we don't review it. Spaced repetition involves reviewing material at gradually increasing intervals (e.g., 1 day, 3 days, 1 week, 1 month) to lock it into your long-term memory. It shifts your study sessions from inefficient last-minute cramming to sustainable, deeply ingrained learning.",
    descriptionBn: "জার্মান সাইকোলজিস্ট হারম্যান এবিংহাউস-এর 'ফরগেটিং কার্ভ' অনুযায়ী, আমরা কোনো কিছু পড়ার পর খুব দ্রুত তা ভুলে যেতে শুরু করি। এই ভুলে যাওয়া ঠেকাতে নির্দিষ্ট সময় পরপর (যেমন: ১ দিন, ৩ দিন, ৭ দিন, ১ মাস) রিভিশন দেওয়াকে স্পেসড রিপিটেশন বলে। এই পদ্ধতিতে পড়লে পরীক্ষার আগে আর রাত জাগতে হবে না এবং পড়াগুলো দীর্ঘস্থায়ী স্মৃতিতে পরিণত হবে।",
    exampleEn: "Instead of cramming 20 Literary Terms the night before an exam, review 5 terms every few days. This is highly effective for memorizing quotes and definitions.",
    exampleBn: "যেমন: Literary Terms বা গুরুত্বপূর্ণ Quotations গুলো একদিনে মুখস্ত না করে, এই পদ্ধতিতে বারবার রিভাইজ দিলে অনেকদিন মনে থাকবে।",
    feature: {
      text: "Learn new terms daily from our Literary Terms collection.",
      linkText: "View Terms",
      href: "/literary-terms"
    }
  },
  {
    id: "feynman-technique",
    title: "Feynman Technique",
    subtitle: "Learning by Teaching",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    descriptionEn: "Named after the Nobel Prize-winning physicist Richard Feynman, this technique involves explaining a complex concept in plain, simple language as if teaching someone with no background in the subject. If you stumble, use academic jargon, or fail to simplify it, you know exactly where the gaps in your understanding are and where you need to study more.",
    descriptionBn: "নোবেলজয়ী পদার্থবিদ রিচার্ড ফাইনম্যানের নামানুসারে তৈরি এই টেকনিকে যেকোনো জটিল বিষয়কে এমন সহজ ভাষায় ব্যাখ্যা করতে হয়, যেন একজন সাধারণ মানুষ বা বাচ্চাও তা বুঝতে পারে। যদি বোঝাতে গিয়ে আপনি আটকে যান বা অপ্রয়োজনীয় কঠিন শব্দ ব্যবহার করেন, তার মানে ওই নির্দিষ্ট জায়গায় আপনার নিজেরও গ্যাপ রয়েছে এবং সেখানে আরও পড়া দরকার।",
    exampleEn: "Try explaining the complex imagery in T.S. Eliot's 'The Waste Land' using everyday words to a friend. If you can't simplify it, review the text.",
    exampleBn: "যেমন: T.S. Eliot এর 'The Waste Land' এর মতো একটি জটিল কবিতাকে নিজের মতো করে একদম সহজ ভাষায় লিখে বা বলে প্র্যাকটিস করা।",
    feature: {
      text: "Discuss complex topics with our AI Guide, Pythia, to test your understanding.",
      linkText: "Talk to Pythia",
      href: "/dashboard"
    }
  },
  {
    id: "time-blocking",
    title: "Time Blocking",
    subtitle: "Focused Study Sessions",
    icon: <Clock className="w-8 h-8" />,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    descriptionEn: "Reading long novels and critical essays can easily lead to burnout. Time blocking breaks your study schedule into distinct blocks of time dedicated exclusively to specific tasks. Combining this with the Pomodoro technique (e.g., 45 minutes of deep, uninterrupted focus followed by a 15-minute break) maintains high concentration levels and allows your brain to consolidate information during the rests.",
    descriptionBn: "বিশাল পড়ার চাপ শেষ করার জন্য নিজের সময়কে ছোট ছোট ব্লকে ভাগ করে নেওয়া। এক টানা ৩-৪ ঘণ্টা পড়ার চেয়ে, ৪৫ মিনিট গভীর মনোযোগ দিয়ে পড়ে ১৫ মিনিট ব্রেক নেওয়া ব্রেইনের জন্য অনেক বেশি কার্যকর। এই ব্রেকগুলোতে ব্রেইন তথ্যগুলো গুছিয়ে নেওয়ার সুযোগ পায়, আর আপনি দীর্ঘক্ষণ পড়লেও একঘেয়েমি বা ক্লান্তি বোধ করেন না।",
    exampleEn: "Allocate the first 45-minute block to reading the primary text of a novel, and the next block strictly for critical analysis or reviewing themes.",
    exampleBn: "যেমন: প্রথম ৪৫ মিনিট শুধু মূল টেক্সট পড়া, ব্রেকের পর পরের ৪৫ মিনিট ক্রিটিক্যাল অ্যানালাইসিস বা এক্সপ্লানেশন পড়া।",
    feature: {
      text: "Organize your study blocks using our structured Program modules.",
      linkText: "Explore Programs",
      href: "/programs"
    }
  },
  {
    id: "how-to-analyse",
    title: "How to Analyse a Literary Text",
    subtitle: "Critical Reading",
    icon: <Search className="w-8 h-8" />,
    color: "bg-slate-100 text-slate-700 border-slate-200",
    descriptionEn: "Don't just read for the plot. A strong, university-level literary analysis requires you to look beneath the surface. When approaching any text, actively interrogate it by focusing on five key areas: Plot (what is happening), Setting (where and when it takes place), Characters (who they are and what drives them), Theme (the deeper central message), and Style (the author's tone, diction, and use of literary devices).",
    descriptionBn: "যেকোনো সাহিত্য পড়ার সময় শুধু কাহিনীর দিকে ফোকাস না করে এর গভীরে যেতে হবে। একটি শক্তিশালী অ্যানালাইসিসের জন্য ৫টি মূল বিষয় ইন্টারোগেট করুন: Plot (কী ঘটছে?), Setting (কোথায় ও কোন সময়ের প্রেক্ষাপটে?), Characters (কারা এবং তাদের মোটিভ কী?), Theme (লেখকের মূল মেসেজ কী?), এবং Style (লেখকের টোন ও ফিগারস অফ স্পিচ)।",
    exampleEn: "When reading a poem, move beyond its literal meaning. Identify the Figures of Speech, the Tone of the speaker, and the Imagery used to convey emotions.",
    exampleBn: "যেমন: কোনো কবিতা পড়ার সময় শুধু শাব্দিক অর্থ না খুঁজে, এর Figures of Speech, Tone এবং Imagery অ্যানালাইজ করা শিখুন।",
    feature: {
      text: "Use our Hover-to-Learn feature to instantly understand difficult terms and contexts while reading.",
      linkText: "Start Reading",
      href: "/programs"
    }
  }
];

export default function StudyMethodContent() {
  const [isBangla, setIsBangla] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="pt-10 pb-10 md:pt-24 md:pb-16 px-6 lg:px-20 bg-white border-b border-slate-200 text-center">
        <div className="container mx-auto max-w-3xl relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-heading tracking-tight"
          >
            Study Methods for <span className="text-primary">Literature</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-serif"
          >
            Mastering English Literature requires more than just memorization. Use these 5 scientifically proven methods to study smarter, analyze deeper, and retain information longer.
          </motion.p>
        </div>
      </section>

      {/* Methods List */}
      <section className="pt-16 px-6 lg:px-20">
        <div className="container mx-auto max-w-4xl">
          
          {/* Section Header & Subtle Global Language Toggle */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">5 Proven Methods</h2>
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200/60 shrink-0 ml-4">
                <button
                  onClick={() => setIsBangla(false)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${!isBangla ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setIsBangla(true)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold font-bangla-ui transition-all ${isBangla ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  বাংলা
                </button>
              </div>
            </div>
            <p className="text-slate-500 text-sm md:text-base">Techniques to master your literature readings</p>
          </div>

          <div className="space-y-12">
            {methods.map((method, index) => (
              <motion.div 
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200/60 relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border ${method.color}`}>
                    {method.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{method.title}</h3>
                      <p className="text-slate-500 font-medium text-sm">{method.subtitle}</p>
                    </div>
                    
                    <div className="min-h-[140px]">
                      <AnimatePresence mode="wait">
                        {isBangla ? (
                          <motion.div
                            key="bn"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                          >
                            <p className="text-slate-700 leading-relaxed text-[17px] font-bangla-ui">
                              {method.descriptionBn}
                            </p>
                            <div className="bg-accent/5 rounded-xl p-5 border border-accent/10 text-slate-700 font-bangla-ui text-[16px] leading-relaxed">
                              <span className="font-bold text-accent mr-2 font-sans uppercase text-sm tracking-wider">Example:</span>
                              {method.exampleBn}
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="en"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                          >
                            <p className="text-slate-700 leading-relaxed text-[17px]">
                              {method.descriptionEn}
                            </p>
                            <div className="bg-accent/5 rounded-xl p-5 border border-accent/10 text-slate-700 font-serif text-[16px] leading-relaxed">
                              <span className="font-bold text-accent mr-2 font-sans uppercase text-sm tracking-wider">Example:</span>
                              {method.exampleEn}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-6 mt-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between border-t border-slate-100">
                      <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed text-center sm:text-left">
                        {method.feature.text}
                      </p>
                      <Link 
                        href={method.feature.href}
                        className="w-full sm:w-auto inline-flex flex-shrink-0 items-center justify-center gap-2 text-sm font-bold text-accent hover:text-white transition-all bg-accent/10 hover:bg-accent px-6 py-3.5 sm:py-2.5 rounded-xl"
                      >
                        {method.feature.linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 px-6 lg:px-20">
        <div className="container mx-auto max-w-4xl bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to study smarter?</h2>
          <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
            Join LitAcademy today and experience literature in a whole new way with our comprehensive study tools and AI-guided learning.
          </p>
          <Link 
            href="/programs" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-lg shadow-white/10"
          >
            Start Learning Now
          </Link>
        </div>
      </section>
    </div>
  );
}
