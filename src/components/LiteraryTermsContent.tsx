"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, ArrowRight, BookA, X } from "lucide-react";

import { literaryTermsData, LiteraryTerm } from "@/lib/data/literary-terms";

export default function LiteraryTermsContent() {
  const terms: LiteraryTerm[] = literaryTermsData;
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredTerms = terms.filter((term) => {
    const matchesSearch = term.term
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLetter =
      activeLetter === "All" ||
      term.term.toUpperCase().startsWith(activeLetter);
    return matchesSearch && matchesLetter;
  });

  const totalPages = Math.ceil(filteredTerms.length / pageSize);
  const paginatedTerms = filteredTerms.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  // Group terms by first letter
  const groupedTerms = paginatedTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(term);
      return acc;
    },
    {} as Record<string, LiteraryTerm[]>,
  );

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-secondary/40 pt-8 pb-6 md:pt-12 md:pb-8 px-6 relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-foreground mb-2 md:mb-4 font-heading tracking-tight">
            Literary Terms
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 font-medium">
            Explore the essential literary terms and devices to master your
            academic readings.
          </p>

          {/* Modern Search Bar */}
          <div className="max-w-2xl mx-auto relative group mt-2">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search literary terms (e.g., Metaphor, Soliloquy)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-14 pr-14 py-3.5 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-ui text-base placeholder:text-slate-400"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Alphabet Filter (Hide when searching to save vertical space) */}
          {!searchQuery && (
            <div className="relative mb-8 -mx-6 px-6 md:mx-0 md:px-0">
              {/* Gradient hints for mobile scroll */}
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden z-10"></div>

              <div className="flex overflow-x-auto pb-4 gap-2 md:flex-wrap md:justify-center snap-x touch-pan-x">
                <button
                  onClick={() => {
                    setActiveLetter("All");
                    setCurrentPage(1);
                  }}
                  className={`shrink-0 snap-start px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeLetter === "All" ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white border border-border text-slate-500 hover:border-primary/50 hover:text-primary"}`}
                >
                  All
                </button>
                {letters.map((letter) => {
                  const hasTerms = terms.some((t) =>
                    t.term.toUpperCase().startsWith(letter),
                  );
                  if (!hasTerms) return null;

                  return (
                    <button
                      key={letter}
                      onClick={() => {
                        setActiveLetter(letter);
                        setCurrentPage(1);
                      }}
                      className={`shrink-0 snap-start w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${activeLetter === letter ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white border border-border text-slate-500 hover:border-primary/50 hover:text-primary"}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="space-y-16">
            <AnimatePresence>
              {sortedLetters.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-muted-foreground text-xl font-medium">
                    No terms found matching your search.
                  </p>
                </motion.div>
              ) : (
                sortedLetters.map((letter) => (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <h2 className="text-4xl font-black text-slate-200 font-heading select-none">
                        {letter}
                      </h2>
                      <div className="h-px bg-border flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {groupedTerms[letter].map((term) => (
                        <Link
                          href={`/literary-terms/${term.id}`}
                          key={term.id}
                          className="group"
                        >
                          <div className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                                {term.term}
                              </h3>
                              <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-2">
                              {term.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-border text-slate-500 hover:border-primary/50 hover:text-primary disabled:opacity-50 disabled:pointer-events-none transition-all"
              >
                Previous
              </button>

              <div className="flex gap-1 mx-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-white border border-border text-slate-500 hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-border text-slate-500 hover:border-primary/50 hover:text-primary disabled:opacity-50 disabled:pointer-events-none transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
