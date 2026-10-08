import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaBook } from 'react-icons/fa';

const ProgrammeCard = ({ programme }: { programme: any }) => {

    return (
        <div>
            <div key={programme.id} className="group relative bg-card rounded-[24px] p-1.5 border border-gray-200 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col h-full">

                <div className="relative h-40 w-full bg-slate-200 rounded-[18px] overflow-hidden mb-3">
                    <Image fill
                        src={programme.image}
                        alt={programme.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {programme.tag && (
                        <span className="absolute top-2.5 left-2.5 bg-white backdrop-blur-sm text-slate-900 text-[10px] font-black px-2 py-1 rounded-full shadow-sm z-10">
                            {programme.tag}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="flex items-center gap-0.5 text-accent">
                            <FaBook size={12} />
                            <span className="text-[12px] font-bold"> {programme.category}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {programme.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-[13px] line-clamp-2 mb-3 leading-relaxed">
                        {programme.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 mt-auto mb-3">
                        <div className="flex items-center gap-1.5">
                            <FaRegClock className="text-slate-400" size={14} />
                            <span className="text-[12px] font-bold text-slate-500">{programme.duration}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/program/${programme.id}`}>
                        <button className="w-full py-2.5 bg-primary text-white text-[12px] font-bold rounded-xl group-hover:bg-primary-hover transition-all duration-300 active:scale-95 cursor-pointer">
                            View Reading
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProgrammeCard;
