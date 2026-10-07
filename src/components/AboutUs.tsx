import React from 'react';
import { SectionBadge } from '@/components/ui/section-badge';

const AboutUs = () => {
    return (
        <section>
            <div className="bg-background py-12 md:py-20 px-6 lg:px-20">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <SectionBadge className="mx-auto">About Us</SectionBadge>

                    <h2 className="text-xl md:text-3xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto leading-snug mb-6 md:mb-10 tracking-tight">
                        We are passionate about empowering literature students <span className="text-gray-500">with high-quality, accessible & engaging education. Our mission is offering a fully structured learning path.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-16 md:gap-14 border-t border-gray-100 pt-6">
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-foreground">10+</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Years of Literature Teaching Experience
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-foreground">2k+</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Students Joined our Programmes
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-foreground">50+</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Experienced Teacher&apos;s service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;