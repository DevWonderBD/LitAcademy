"use client";

import React, { useState } from "react";
import { MessageSquare, Users, Bell, FileText, Briefcase, Coffee, Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageSquare,
    title: "Student Forum",
    desc: "A safe space to debate whether Hamlet was actually mad or just dramatic.",
  },
  {
    icon: Users,
    title: "Study Groups",
    desc: "Find your tribe. Cry over Victorian poetry together. It's bonding!",
  },
  {
    icon: Bell,
    title: "NU Notice Board",
    desc: "Form fill-up dates and exam routines before the panic sets in.",
  },
  {
    icon: FileText,
    title: "Exam Corner",
    desc: "Previous board questions and suggestions to save your grades at 2 AM.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "What to do with an English degree besides correcting people's grammar.",
  },
];

export default function CommunityContent() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 1500);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20"
        >
          <Coffee className="w-4 h-4" />
          Brewing in Progress...
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          LitAcademy <span className="text-primary">Community</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          We are currently building the ultimate hangout spot for Literature nerds. Pythia is already saving up some witty remarks for the forums! Hang tight, it&apos;s going to be epic.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Newsletter / Notification CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to know when we launch?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Drop your email below and we&apos;ll send you an owl (or an email) as soon as the doors open.
          </p>
          
          <div className="min-h-[76px] flex flex-col items-center justify-start">
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl border border-white/20"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-lg flex items-center gap-2">
                  Awesome! You&apos;re on the list. <span className="text-3xl leading-none origin-bottom hover:animate-bounce inline-block">🦉</span>
                </p>
              </motion.div>
            ) : (
              <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full" noValidate>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email address" 
                    className={`w-full sm:w-auto flex-1 px-5 py-3.5 rounded-lg bg-white border-2 outline-none text-gray-900 disabled:opacity-50 transition-all ${
                      error ? "border-red-400 focus:border-red-500" : "border-transparent focus:border-accent"
                    }`}
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/90 disabled:bg-accent/70 text-white font-semibold rounded-lg transition-colors cursor-pointer text-base flex items-center justify-center min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      "Notify Me"
                    )}
                  </button>
                </form>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-200 text-sm font-medium mt-2 text-left sm:text-center"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      </motion.div>
    </div>
  );
}
