"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPaypal, 
  FaCcVisa, 
  FaApplePay, 
  FaGooglePay, 
  FaStripe, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaGooglePlay, 
  FaApple,
  FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiPaytm } from 'react-icons/si';

interface FooterData {
  companyInfo: string[];
  topCategories: string[];
}

const Footer = () => {
  const [data, setData] = useState<FooterData>({ companyInfo: [], topCategories: [] });

  useEffect(() => {
    fetch('/data/footer.json')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.error("Error fetching footer data:", err));
  }, []);

  return (
    <footer className="bg-footer-bg pt-20 pb-8 px-6 lg:px-20 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="text-2xl md:text-2xl font-black flex items-center mb-6 w-fit">
              <span className="text-foreground">Lit</span>
              <span className="text-primary">Academy</span>
              <span className="w-2 h-2 bg-primary rounded-full ml-1 self-end mb-1"></span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 pr-4">
              LitAcademy is the premium study platform for National University English Literature students. Access structured notes, bilingual explanations, and an AI guide to master your studies.
            </p>
            
            {/* Social Media */}
            <div className="mb-10">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Social Media</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-primary text-white p-2.5 rounded-full hover:bg-accent transition-colors shadow-sm">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaXTwitter size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>

            {/* Payment Gateways */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4">We Accept Payment Gateway</h4>
              <div className="flex flex-wrap items-center gap-3 text-slate-400">
                <FaPaypal size={24} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
                <FaCcVisa size={24} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
                <FaGooglePay size={32} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
                <FaApplePay size={32} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
                <FaStripe size={28} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
                <SiPaytm size={32} className="hover:text-[var(--color-payment-hover)] transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Column 2*/}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Company Info</h3>
            <ul className="space-y-4">
              {data.companyInfo.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-500 font-medium hover:text-primary transition-colors text-sm flex items-center gap-2">
                    {index === 0 && <span className="w-4 h-[1px] bg-primary inline-block"></span>}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Top Programmes</h3>
            <ul className="space-y-4">
              {data.topCategories.map((category, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-500 font-medium hover:text-primary transition-colors text-sm">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4*/}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Download the App</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 pr-4">
              Join us on this journey of discovery as we explore the latest trend.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">254 Lillian Blvd, Holbrook<br />New York</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">+880 1175 423 512</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors shadow-md">
                <FaGooglePlay size={18} />
                <div className="text-left">
                  <span className="text-[10px] block leading-none">GET IT ON</span>
                  <span className="text-sm font-bold block leading-tight">Google Play</span>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                <FaApple size={20} />
                <div className="text-left">
                  <span className="text-[10px] block leading-none">Download on the</span>
                  <span className="text-sm font-bold block leading-tight">App Store</span>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 LitAcademy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;