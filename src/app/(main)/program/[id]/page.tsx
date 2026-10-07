import coursesData from '@/lib/data.json'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaPlayCircle, FaCheckCircle, FaUserGraduate, FaGlobe, FaBookOpen } from 'react-icons/fa';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';

const ProgrammeDetails = ({ params }: { params: { id: string } }) => {
    const programmeId = parseInt(params.id);
    const programme = coursesData.find((c) => c.id === programmeId);

    if (!programme) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-24">
            
            <div className="bg-slate-900 pt-32 pb-32 px-6 lg:px-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image fill src={programme.image} alt={programme.title} className="object-cover blur-sm"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 w-full text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                                {programme.category}
                            </span>
                            {programme.tag && (
                                <span className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                                    {programme.tag}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-[900] text-white mb-6 leading-tight">
                            {programme.title}
                        </h1>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {programme.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium text-sm">
                            <div className="flex items-center gap-2">
                                <FaUserGraduate className="text-primary" size={16} />
                                <span>Guide: <span className="text-white font-bold">{programme.instructor}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGlobe className="text-primary" size={16} />
                                <span>English Literature</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 lg:px-20 -mt-24 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/50 mb-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">What you&apos;ll learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Understand core themes and motifs",
                                    "Analyze critical literary theories",
                                    "Explore historical context and background",
                                    "Master answering broad and short questions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-slate-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Syllabus Overview</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <FaBookOpen className="text-accent" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-800">Unit 1: Introduction to the Paper</h4>
                                            <p className="text-sm text-slate-500">Reading • Chapter 1</p>
                                        </div>
                                    </div>
                                    <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">Begin</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                            <div className="relative h-60 w-full bg-slate-200">
                                <Image fill src={programme.image} alt={programme.title} className="w-full h-full object-cover"/>
                            </div>

                            <div className="p-8">
                                <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 hover:-translate-y-1 transition-all shadow-lg shadow-accent/30 mb-4 cursor-pointer">
                                    Begin Programme
                                </button>
                                
                                <h4 className="font-bold text-slate-900 mb-4 mt-6">This programme includes:</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <MdOutlineSignalCellularAlt className="text-primary" size={20} />
                                        <span className="font-medium text-sm">{programme.level} Level</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <FaBookOpen className="text-primary" size={20} />
                                        <span className="font-medium text-sm">Comprehensive Notes</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <FaUserGraduate className="text-primary" size={20} />
                                        <span className="font-medium text-sm">Expert Guidance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammeDetails;
