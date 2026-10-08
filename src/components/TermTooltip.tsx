"use client";
import React, { useState } from 'react';
import { FaTimes, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

export interface TermTooltipData {
  text: string;
  titleEn: string;
  descEn: string;
  titleBn: string;
  descBn: string;
}

interface TermTooltipProps {
  termData: TermTooltipData;
  isActive: boolean;
  isClicked: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
  onCloseClick: (e: React.MouseEvent) => void;
  onBgClick: () => void;
}

const TermTooltip: React.FC<TermTooltipProps> = ({
  termData,
  isActive,
  isClicked,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onCloseClick,
  onBgClick
}) => {
  const [langEn, setLangEn] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLangEn(!langEn);
  };

  return (
    <span className="relative inline-block mx-1.5" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span 
        onClick={onClick}
        className={`litacademy-term-trigger cursor-pointer border-b-[2.5px] border-dashed font-bold px-1 rounded-sm transition-colors ${
          isActive ? 'bg-primary text-white border-primary' : 'text-primary border-primary hover:bg-teal-50'
        }`}
      >
        {termData.text}
      </span>
      
      {isActive && (
        <>
          {/* Popover Card */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="litacademy-tooltip fixed top-24 left-6 right-6 w-auto sm:absolute sm:top-auto sm:bottom-[calc(100%+14px)] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[280px] md:w-[340px] bg-white border border-slate-200 text-slate-800 font-sans rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-[100] animate-in fade-in zoom-in-95 duration-200 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white rounded-t-xl">
              <div className="pr-4">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Glossary Term</div>
                <div 
                  className="font-bold text-primary text-lg leading-tight"
                  style={!langEn ? { fontFamily: 'var(--font-anek-bangla)' } : {}}
                >
                  {langEn ? termData.titleEn : termData.titleBn}
                </div>
              </div>
              {/* Only show Close button if it's locked by click */}
              {isClicked && (
                <button onClick={onCloseClick} className="text-slate-400 hover:text-red-500 bg-white p-1.5 rounded-full shadow-sm border border-slate-200 transition-all hover:scale-105">
                  <FaTimes size={12} />
                </button>
              )}
            </div>
            
            {/* Body */}
            <div className="p-5">
              <p 
                className="leading-relaxed text-slate-600 text-[15px]" 
                style={!langEn ? { fontFamily: 'var(--font-anek-bangla)' } : {}}
              >
                {langEn ? termData.descEn : termData.descBn}
              </p>
            </div>

            {/* Footer actions */}
            <div className="p-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 rounded-b-xl">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-primary transition-colors bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-sm hover:shadow"
              >
                <MdLanguage size={16} className={langEn ? "text-primary" : "text-amber-500"}/> 
                {langEn ? 'Read in Bangla' : 'Read in English'}
              </button>
              
              <button 
                onClick={toggleSave}
                className={`flex items-center gap-1.5 text-[13px] font-bold transition-all bg-white border px-3 py-1.5 rounded-md shadow-sm hover:shadow ${
                  isSaved ? 'border-amber-200 text-amber-500 bg-amber-50/50' : 'border-slate-200 text-slate-500 hover:text-primary'
                }`}
              >
                {isSaved ? <FaBookmark size={14}/> : <FaRegBookmark size={14}/>}
                {isSaved ? 'Saved' : 'Save'}
              </button>
            </div>

            {/* Triangle pointer */}
            <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 border-[12px] border-transparent border-t-slate-200 -mb-[1px]"></div>
            <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 border-[11px] border-transparent border-t-white"></div>
          </div>
        </>
      )}
    </span>
  );
};

export default TermTooltip;

