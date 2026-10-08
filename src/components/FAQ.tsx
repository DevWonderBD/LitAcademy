"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SectionBadge } from '@/components/ui/section-badge';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [faqs, setFaqs] = useState<{question: string, answer: string}[]>([]);

  React.useEffect(() => {
    fetch('/data/faq.json')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(console.error);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-background py-14 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(20,153,136,0.03)_0%,transparent_70%)] rounded-full -mt-40 -mr-40 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3 flex flex-col justify-start">
            <SectionBadge>Testimonial & FAQ</SectionBadge>
            <h2 className="text-4xl md:text-4xl font-[900] text-slate-900 leading-tight mt-4 mb-6">
              Frequently asked <br />
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              For any unanswered questions, reach out to our support team via email. We&apos;ll respond as soon as possible to assist you.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <HiOutlineMail size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">Email Us Directly</h4>
                <a href="mailto:support@litacademy.com" className="text-primary font-medium hover:underline">
                  support@litacademy.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-white">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div 
                    key={index} 
                    className={`border-b border-slate-100 last:border-none ${index !== 0 ? 'mt-4 pt-4' : ''}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                    >
                      <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-accent'}`}>
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-accent group-hover:text-white'}`}>
                        {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                      </div>
                    </button>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-500 font-medium leading-relaxed pr-8 md:pr-12">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;