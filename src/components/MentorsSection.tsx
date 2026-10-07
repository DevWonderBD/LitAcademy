import Instructor1 from '@/assets/instructor1.jpg';
import Instructor2 from '@/assets/instructor2.jpg';
import Instructor3 from '@/assets/instructor3.jpg';
import Instructor4 from '@/assets/instructor4.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { SectionBadge } from '@/components/ui/section-badge';

const MentorsSection = () => {

  const mentors = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Professor of Modern Literature",
      image: Instructor1, 
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Saiful Talukdar",
      role: "MA English, NU Specialist",
      image: Instructor2,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Mark Thompson",
      role: "Victorian Era Researcher",
      image: Instructor3,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Jessica Williams",
      role: "Literary Theory Expert",
      image: Instructor4,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    }
  ];

  return (
    <section id='mentors' className="bg-muted py-14 px-6 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
          <div className="max-w-xl">
            <SectionBadge>Literature Mentors</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mt-4">
              Learn from the <span className="text-primary">Best Guides</span>
            </h2>
          </div>
          <Link href={'/mentors'} className="flex items-center gap-2 text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1 transition-all">
            See All Mentors <HiArrowNarrowRight />
          </Link>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mentors.map((mentor, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-300 rounded-2xl p-4 hover:shadow-2xl hover:shadow-teal-50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-slate-100">
                <div className="w-full h-full relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-tighter text-center px-4">
                     {mentor.name}
                   </div>
                   
                   <Image 
                     src={mentor.image} 
                     alt={mentor.name} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700" 
                   /> 
                </div>
                
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                   <a href={mentor.socials.linkedin} className="bg-white p-2.5 rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                     <FaLinkedinIn size={16} />
                   </a>
                   <a href={mentor.socials.twitter} className="bg-white p-2.5 rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                     <FaTwitter size={16} />
                   </a>
                   <a href={mentor.socials.web} className="bg-white p-2.5 rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                     <FaGlobe size={16} />
                   </a>
                </div>
              </div>

              <div className="text-center pt-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-slate-500 font-medium text-sm">
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
