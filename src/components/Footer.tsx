"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaGooglePlay, 
  FaApple,
  FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  companyInfo: FooterLink[];
  topPrograms: FooterLink[];
}

const Footer = () => {
  const [data, setData] = useState<FooterData>({ companyInfo: [], topPrograms: [] });

  useEffect(() => {
    fetch('/data/footer.json')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.error("Error fetching footer data:", err));
  }, []);

  return (
    <footer className="bg-footer-bg pt-12 md:pt-20 pb-8 px-6 lg:px-20 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-4">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="text-2xl md:text-2xl font-black flex items-center mb-6 w-fit">
              <span className="text-foreground">Lit</span>
              <span className="text-primary">Academy</span>
              <span className="w-2 h-2 bg-primary rounded-full ml-1 self-end mb-1"></span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-5 pr-4">
              LitAcademy is the premium study platform for National University English Literature students. Access structured notes, bilingual explanations, and an AI guide to master your studies.
            </p>
            
            {/* Social Media */}
            <div className="mb-10">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Social Media</h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com/litacademy" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-2.5 rounded-full hover:bg-accent transition-colors shadow-sm">
                  <FaFacebookF size={14} />
                </a>
                <a href="https://instagram.com/litacademy" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaInstagram size={14} />
                </a>
                <a href="https://twitter.com/litacademy" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaXTwitter size={14} />
                </a>
                <a href="https://youtube.com/litacademy" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2*/}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Company Info</h3>
            <ul className="space-y-4">
              {data.companyInfo.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-slate-500 font-medium hover:text-primary transition-colors text-sm flex items-center gap-2">
                    {index === 0 && <span className="w-4 h-[1px] bg-primary inline-block"></span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Top Programs</h3>
            <ul className="space-y-4">
              {data.topPrograms.map((program, index) => (
                <li key={index}>
                  <Link href={program.href} className="text-slate-500 font-medium hover:text-primary transition-colors text-sm flex items-center gap-2">
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4*/}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Download the App</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 pr-4">
              Study anytime, anywhere. Download our mobile app to read notes on the go.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">Online Platform (Accessable anywhere)</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">support@litacademy.info</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <Dialog>
              <div className="flex flex-wrap items-center gap-3">
                <DialogTrigger className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors shadow-md cursor-pointer">
                  <FaGooglePlay size={18} />
                  <div className="text-left">
                    <span className="text-[10px] block leading-none">GET IT ON</span>
                    <span className="text-sm font-bold block leading-tight">Google Play</span>
                  </div>
                </DialogTrigger>
                <DialogTrigger className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md cursor-pointer">
                  <FaApple size={20} />
                  <div className="text-left">
                    <span className="text-[10px] block leading-none">Download on the</span>
                    <span className="text-sm font-bold block leading-tight">App Store</span>
                  </div>
                </DialogTrigger>
              </div>
              <DialogContent className="sm:max-w-md text-center p-10 bg-[#fcfbf9] border-slate-200 rounded-2xl shadow-2xl">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-4xl animate-bounce mt-2">☕</span>
                  </div>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-center text-slate-900 font-heading">
                      Hold your horses! 🐎
                    </DialogTitle>
                    <DialogDescription className="text-base text-center text-slate-600 mt-4 leading-relaxed font-medium">
                      Our devs are currently locked in a room, fueled only by caffeine and Shakespeare quotes, building the ultimate mobile app for you. <br/><br/>
                      <span className="text-primary font-bold">It&apos;s dropping soon!</span> Until then, our website works flawlessly on your mobile browser.
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>
      
      {/* Full Width Copyright */}
      <div className="w-full border-t border-slate-300/80">
        <div className="container mx-auto max-w-7xl py-4 px-3 flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} LitAcademy. All rights reserved.
          </p>
          <p className="text-slate-500 text-[15px] font-heading">
            A <a href="https://devwonderbd.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-black italic hover:text-primary transition-colors cursor-pointer">Dev Wonder</a> Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
