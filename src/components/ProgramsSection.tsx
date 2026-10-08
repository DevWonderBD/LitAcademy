"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';
import ProgramCard from './ProgramCard';
import { SectionBadge } from '@/components/ui/section-badge';
import { useEffect, useState } from 'react';

const ProgramsSection = () => {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setPrograms(data))
      .catch(err => console.error("Failed to load programs", err));
  }, []);

  return (
    <section className="bg-muted py-16 px-6 lg:px-20 border-b border-slate-100">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <SectionBadge className="mx-auto">Popular Readings</SectionBadge>
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-[900] text-slate-900 mt-4 font-heading leading-tight">
            Discover Popular <span className="text-primary">Papers</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-xl text-center">
            Discover the papers that our students are reading the most. Start your journey with the most popular literature notes.
          </p>
        </div>

        <div className="w-full py-4 max-w-6xl mx-auto">
          {programs.length > 0 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }, 
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper !pb-12" 
            >
              {programs.map((program) => (
                <SwiperSlide key={program.id}>
                  <ProgramCard program={program}></ProgramCard>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-[300px] flex items-center justify-center">
              <div className="animate-pulse flex gap-4 w-full">
                 <div className="bg-slate-200 h-64 w-full rounded-2xl"></div>
                 <div className="bg-slate-200 h-64 w-full rounded-2xl hidden md:block"></div>
                 <div className="bg-slate-200 h-64 w-full rounded-2xl hidden lg:block"></div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
