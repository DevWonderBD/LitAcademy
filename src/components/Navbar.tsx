'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Loader2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPending, data } = authClient.useSession();
  const user = data?.user;

  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/allcourses' },
    { name: 'Technics', href: '/#technics' },
    { name: 'Instructors', href: '/#instructors' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex-start">
          <Link href="/" className="text-xl md:text-2xl font-black flex items-center">
            <span className="text-white">Lit</span>
            <span className="text-accent ml-0.5">Academy</span>
            <span className="w-2 h-2 bg-accent rounded-full ml-1 self-end mb-1"></span>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-sm font-bold flex items-center gap-1 transition-colors ${
                  link.href === pathname
                    ? 'text-accent'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>{link.href === pathname && '•'}</span> {link.name}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link
                href="/profile"
                className={`text-sm font-bold flex items-center gap-1 transition-colors ${
                  pathname === '/profile'
                    ? 'text-accent'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>{pathname === '/profile' && '•'}</span> My Profile
              </Link>
            </li>
          )}
        </ul>

        {/* Auth Actions */}
        <div className="flex items-center gap-1 md:gap-3">
          {isPending ? (
            <Loader2 className="w-5 h-5 animate-spin text-white" />
          ) : user ? (
            <div className="flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md p-1.5 pr-2 md:pr-3 rounded-full border border-white/20 shadow-sm">
              <div className="flex items-center gap-2 pl-2">
                <div className="hidden md:block text-right">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-tighter">
                    Student
                  </p>
                  <h5 className="text-sm font-black text-white leading-none capitalize">
                    {user.name}
                  </h5>
                </div>

                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border-2 border-white/40 p-0.5 group cursor-pointer">
                  <Link href="/profile" className="relative block w-full h-full rounded-full overflow-hidden">
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
                className="bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-accent-hover hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-sm">
              <Link
                href="/login"
                className="text-white hover:text-accent font-bold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all active:scale-95"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="bg-accent text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-accent-hover hover:shadow-lg transition-all active:scale-95 shadow-md"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 py-3 z-50">
                <ul className="flex flex-col gap-1 px-2">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-colors ${
                          link.href === pathname
                            ? 'text-accent bg-accent/10'
                            : 'text-slate-700 hover:bg-slate-50'
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
                          pathname === '/profile'
                            ? 'text-accent bg-accent/10'
                            : 'text-slate-700 hover:bg-slate-50'
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