"use client";
import ProgrammeCard from '@/components/ProgrammeCard';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const AllProgrammes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [allProgrammesData, setAllProgrammesData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setAllProgrammesData(data))
      .catch(err => console.error("Failed to fetch data", err));
  }, []);

  const categories = ['All', 'Honours 1st Year', 'Honours 2nd Year', 'Honours 3rd Year', 'Honours 4th Year', 'Masters'];

  const filteredProgrammes = allProgrammesData.filter(programme => {
    const matchesCategory = activeCategory === 'All' || programme.category === activeCategory;
    const matchesSearch = programme.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen pb-24">
      
      <div className="bg-primary pt-32 pb-20 px-6 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[900] text-white mb-6">
            Explore Our <span className="text-accent-highlight">Programme Catalog</span>
          </h1>
          <p className="text-teal-50 font-medium text-lg">
            Discover our premium literature programmes taught by academic experts. Enhance your understanding today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 -mt-8 relative z-20">
        <div className="bg-white rounded-[24px] p-4 md:p-6 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          <div className="relative w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Search for programmes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <FaFilter className="text-slate-400 mr-2 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProgrammes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProgrammes.map((programme, index) => (
                <ProgrammeCard key={index} programme={programme}></ProgrammeCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No programmes found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 bg-accent text-white px-6 py-2.5 rounded-xl font-bold hover:bg-accent-hover transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllProgrammes;
