
import { FaStar, FaRegClock, FaUserGraduate, FaGlobe, FaCheckCircle, FaPlayCircle} from 'react-icons/fa';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import courses from '@/lib/data.json'
import Image from 'next/image';

const CourseDetails = async({ params }) => {

    const {id} = await params;
    const course = courses.find((c) => c.id == id);

    // console.log(courseId)

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Course Not Found {id}</h1>
                    <p className="text-slate-500">The course you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen pb-24">

            <div className="bg-slate-900 pt-32 pb-40 px-6 lg:px-20 relative">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                                {course.category}
                            </span>
                            {course.tag && (
                                <span className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                                    {course.tag}
                                </span>
                            )}
                        </div>

                        {/* Title & Description */}
                        <h1 className="text-4xl md:text-5xl font-[900] text-white mb-6 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium text-sm">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-accent" size={16} />
                                <span className="text-white font-bold">{course.rating}</span>
                                <span>({course.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserGraduate className="text-primary" size={16} />
                                <span>Instructor: <span className="text-white font-bold">{course.instructor}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGlobe className="text-primary" size={16} />
                                <span>English</span>
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
                                    "Build a sustainable content strategy",
                                    "Understand different social media algorithms",
                                    "Create viral hooks for short-form videos",
                                    "Monetize your social media following"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-slate-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Content</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <FaPlayCircle className="text-accent" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-800">Introduction to Strategy</h4>
                                            <p className="text-sm text-slate-500">Video • 12 mins</p>
                                        </div>
                                    </div>
                                    <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                            <div className="relative h-60 w-full bg-slate-200">
                                <Image fill src={course.image} alt={course.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer transition-all hover:bg-black/20">
                                    <div className="bg-white/30 backdrop-blur-md p-4 rounded-full group-hover:scale-110 transition-transform">
                                        <FaPlayCircle className="text-white" size={40} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-4xl font-black text-slate-900 mb-6">
                                    ${course.price}
                                </div>

                                <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent-hover hover:-translate-y-1 transition-all shadow-lg shadow-accent/30 mb-4">
                                    Add to Cart
                                </button>
                                <button className="w-full bg-primary/10 text-primary border border-primary/20 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all">
                                    Buy Now
                                </button>

                                <p className="text-center text-slate-400 text-xs mt-4 mb-6 font-medium">
                                    30-Day Money-Back Guarantee
                                </p>

                                <h4 className="font-bold text-slate-900 mb-4">This course includes:</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <MdOutlineSignalCellularAlt className="text-primary" size={20} />
                                        <span className="font-medium text-sm">{course.level} Level</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <FaRegClock className="text-primary" size={20} />
                                        <span className="font-medium text-sm">{course.duration} on-demand video</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <FaUserGraduate className="text-primary" size={20} />
                                        <span className="font-medium text-sm">Certificate of completion</span>
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

export default CourseDetails;