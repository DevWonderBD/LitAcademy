import HeroFigure from '@/assets/HeroFigure.png'
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';


const Hero = () => {
  return (
    <section>
      <div className="bg-secondary pt-12 md:pt-8 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <span className="bg-accent-badge-bg text-accent px-6 py-1 rounded-xl text-xs font-bold tracking-wide shadow-sm inline-block -rotate-12">
              For National University English students
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-foreground mt-8 mb-6 leading-[1.05] tracking-tight font-heading">
              The perfect place to learn English literature.
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-medium">
              Syllabus-based notes for NU Honours and Masters. Hover over any literary term to understand it instantly, save your own notes, and test yourself — free.
            </p>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button className="bg-primary text-white px-4 md:px-8 py-2.5 rounded-full font-extrabold text-sm flex items-center gap-2 hover:bg-primary-hover transition-all shadow-lg cursor-pointer group">
                Choose Your Program <span className="text-xl inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </button>
              
              <button className="flex items-center gap-2 font-extrabold text-foreground hover:text-accent transition-all group border border-accent p-1 rounded-full">
                <span className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay className="text-[10px] ml-0.5" />
                </span>
                <span className='mr-2'>See How It Works</span>
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="text-sm font-semibold text-gray-500">
                Pick your program → Read and hover → Save and practice
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">Hover-to-learn terms</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">Your own saved notes</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">Practice quizzes</span>
                <span className="bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">Pythia, your AI guide</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
            <div className="absolute -z-10 w-[120%] h-[120%] -top-10 -right-10 opacity-30 pointer-events-none">
                <div className="absolute top-20 right-10 w-64 h-96 bg-primary rounded-[40px] rotate-[35deg] blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-64 h-80 bg-accent rounded-[40px] rotate-[15deg] blur-3xl"></div>
            </div>

            <div className="absolute top-20 left-0 bg-white p-3 rounded-2xl shadow-2xl z-20 animate-pulse">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
            </div>
            <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-2xl z-20">
                <Image src="https://www.google.com/favicon.ico" width={24} height={24} alt="google" className="w-6 h-6" unoptimized />
            </div>

            <div className="relative">
              <Image src={HeroFigure} alt='student' width={600} height={600}
                className="relative z-10 w-full max-w-lg object-contain"
              />
              <div className="absolute bottom-10 -right-10 w-[450px] h-[300px] bg-gradient-to-br from-primary to-accent rounded-[50px] -rotate-12 -z-0 opacity-80 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;