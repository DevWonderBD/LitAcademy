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
    { name: 'Programs', href: '/programs' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'Study Method', href: '/study-method' },
    { name: 'FAQ', href: '/faq' },
  ];
  return (
    <nav className="bg-navbar-bg py-4 px-6 sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="max-w-[95%] lg:max-w-[92%] mx-auto flex items-center justify-between">

        <div className="flex-start">
          <Link href="/" className="text-2xl md:text-2xl font-black flex items-center">
            <span className="text-foreground">Lit</span>
            <span className="text-primary">Academy</span>
            <span className="w-2 h-2 bg-primary rounded-full ml-1 self-end mb-1"></span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {
            navLinks.map((link, index) => <li key={index}>
              <Link href={link.href} className={`${link.href == pathname ? "text-primary" : 'text-foreground hover:text-primary transition-colors duration-250'} text-sm font-bold flex items-center gap-1`}>
                <span>{link.href == pathname && '*'}</span> {link.name}
              </Link>
            </li>

            )
          }
          {
            user && <Link href='/dashboard' className={`${pathname.startsWith('/dashboard') ? "text-primary" : 'text-foreground hover:text-primary transition-colors duration-250'} text-sm font-bold flex items-center gap-1`}>
              <span>{pathname.startsWith('/dashboard') && '*'}</span>Dashboard
            </Link>
          }

        </ul>

        {/* SignIn & SignUp */}
        <div className="flex items-center gap-0.5 md:gap-2">

          {
            isPending ? <Loader2 className="w-5 h-5 animate-spin text-primary" /> : user ?
              <div className="flex items-center gap-3 md:gap-5 bg-card/50 backdrop-blur-md p-1.5 pr-2 md:pr-3 rounded-full border border-border shadow-sm">
                <div className="flex items-center gap-2 pl-2">
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                      Student
                    </p>
                    <h5 className="text-sm font-black text-foreground leading-none capitalize">
                      {user.name}
                    </h5>
                  </div>

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border-2 border-primary/20 p-0.5 group cursor-pointer">
                    <Link href='/dashboard' className="relative block w-full h-full rounded-full overflow-hidden ">
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
                  className="bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-95"
                >
                  Sign Out
                </button>
              </div>
              :
              <Link
                href="/login"
                className="bg-primary text-primary-foreground px-4 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 shadow-md"
              >
                Sign In
              </Link>
          }



          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-card rounded-2xl shadow-xl border border-border py-3 z-50">
                <ul className="flex flex-col gap-1 px-2">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-colors ${
                          link.href === pathname ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}

                  {user && (
                    <li>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 transition-colors ${
                          pathname.startsWith("/dashboard") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Dashboard
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