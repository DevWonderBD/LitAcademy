"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';
import programmes from '@/lib/data.json'
import ProgrammeCard from './ProgrammeCard';
import { SectionBadge } from '@/components/ui/section-badge';

const ProgrammesSection = () => {

  return (
    <section className="bg-muted pt-18 px-6 lg:px-20">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-12">
          <div>
            <SectionBadge>Our Programmes</SectionBadge>
            <h2 className="text-4xl lg:text-5xl font-[900] text-foreground mt-4">
              Explore Our Literature <span className="text-primary">Programmes</span>
            </h2>
          </div>

          {/* All Programmes Button*/}
          <div className="mt-6 text-center">
            <Link href={"/programs"} className="bg-accent hover:bg-accent/90 text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-teal-50 cursor-pointer inline-block">
              See All Programmes
            </Link>
          </div>
        </div>

        <div className="w-full py-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
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
        </div>


      </div>
    </section>
  );
};

export default ProgrammesSection;
