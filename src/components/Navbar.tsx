'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {isPending, data} = authClient.useSession()
  const user = data?.user;

  const pathname = usePathname()
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/allcourses' },
    { name: 'Technics', href: '/#technics' },
    { name: 'Instructors', href: '/#instructors' },
    { name: 'FAQ', href: '/#faq' },
  ];
  return (
    <nav className="bg-[#FDF1EE] py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        <div className="flex-start">
          <Link href="/" className="text-xl md:text-2xl font-black flex items-center">
            <span className="text-[#2C3E50]">Lit</span>
            <span className="text-[#fe6e38]">Academy</span>
            <span className="w-2 h-2 bg-[#fe6e38] rounded-full ml-1 self-end mb-1"></span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {
            navLinks.map((link, index) => <li key={index}>
              <Link href={link.href} className={`${link.href == pathname ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
                <span>{link.href == pathname && '*'}</span> {link.name}
              </Link>
            </li>

            )
          }
          {
            user && <Link href='/profile' className={`${pathname == '/profile' ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
              <span>{pathname == '/profile' && '*'}</span>My Profile
            </Link>
          }

        </ul>

        {/* SignIn & SignUp */}
        <div className="flex items-center gap-0.5 md:gap-2">

          {
            isPending ? <Loader2 className="w-5 h-5 animate-spin text-[#149988]" /> : user ?
              <div className="flex items-center gap-3 md:gap-5 bg-white/50 backdrop-blur-md p-1.5 pr-2 md:pr-3 rounded-full border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 pl-2">
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] font-bold text-[#149988] uppercase tracking-tighter">
                      Student
                    </p>
                    <h5 className="text-sm font-black text-slate-900 leading-none capitalize">
                      {user.name}
                    </h5>
                  </div>

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border-2 border-[#149988]/20 p-0.5 group cursor-pointer">
                    <Link href='/profile' className="relative block w-full h-full rounded-full overflow-hidden ">
                      <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        sizes="(max-width: 768px) 36px, 40px"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>

                <button
                  onClick={async () => await authClient.signOut()}
                  className="bg-[#F97416] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e06510] hover:shadow-lg hover:shadow-[#F97416]/20 transition-all active:scale-95"
                >
                  Sign Out
                </button>
              </div>
              :
              <div className="flex items-center gap-2 md:gap-3 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-slate-100 shadow-sm">
                <Link
                  href="/login"
                  className="text-[#F97416] font-bold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F97416]/10 transition-all active:scale-95"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="bg-[#F97416] text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e06510] hover:shadow-lg hover:shadow-[#F97416]/20 transition-all active:scale-95 shadow-md"
                >
                  Register
                </Link>
              </div>
          }



          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 text-[#D35400] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50">
                <ul className="flex flex-col gap-1 px-2">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-colors ${
                          link.href === pathname ? "text-[#fe6e38] bg-[#fe6e38]/10" : "text-gray-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}

                  {user && (
                    <li>
                      <Link
                        href="/profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-colors ${
                          pathname === "/profile" ? "text-[#fe6e38] bg-[#fe6e38]/10" : "text-gray-700 hover:bg-slate-50"
                        }`}
                      >
                        Profile
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;