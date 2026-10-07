"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import trendingData from '@/lib/data.json'
import { FaArrowRight } from 'react-icons/fa';
import ProgrammeCard from './ProgrammeCard';
import Link from "next/link";
import { SectionBadge } from '@/components/ui/section-badge';

const MostReadSection = () => {

  return (
    <section className="py-14 bg-background px-6 lg:px-20">
      <div className="container mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <SectionBadge>Most Read Topics</SectionBadge>
            <h2 className="text-4xl font-[900] text-slate-900 mt-4">
              Recently <span className="text-primary">Read</span>
            </h2>
          </div>
          <Link href={'/programs'} className="hidden md:flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-all">
            View All Most Read <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="w-full">
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

            {trendingData.filter(programme => programme.tag === 'Trending').map((programme) => (
              <SwiperSlide key={programme.id}>
                <ProgrammeCard programme={programme} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default MostReadSection;
