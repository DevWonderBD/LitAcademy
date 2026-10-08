"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';
import ProgrammeCard from './ProgrammeCard';
import { SectionBadge } from '@/components/ui/section-badge';
import { useEffect, useState } from 'react';

const ProgrammesSection = () => {
  const [programmes, setProgrammes] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setProgrammes(data))
      .catch(err => console.error("Failed to load programmes", err));
  }, []);

  return (
    <section className="bg-muted py-16 px-6 lg:px-20 border-b border-slate-100">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <SectionBadge className="mx-auto">Popular Readings</SectionBadge>
          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-[900] text-slate-900 mt-4 font-heading leading-tight">
            Most Read <span className="text-primary">Papers</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-xl text-center">
            Discover the papers that our students are reading the most. Start your journey with the most popular literature notes.
          </p>
        </div>

        <div className="w-full py-4 max-w-6xl mx-auto">
          {programmes.length > 0 ? (
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
              {programmes.map((programme) => (
                <SwiperSlide key={programme.id}>
                  <ProgrammeCard programme={programme}></ProgrammeCard>
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

        <div className="mt-6 text-center">
            <Link href={"/programs"} className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-3 rounded-full font-bold text-[15px] transition-all shadow-sm cursor-pointer inline-block active:scale-95">
              View Complete Syllabus
            </Link>
        </div>


      </div>
    </section>
  );
};

export default ProgrammesSection;
