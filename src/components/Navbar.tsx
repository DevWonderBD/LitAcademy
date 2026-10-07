"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Menu, BookOpen, GraduationCap, ArrowRight, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Logo = () => (
  <Link href="/" className="text-2xl md:text-2xl font-black flex items-center">
    <span className="text-foreground">Lit</span>
    <span className="text-primary">Academy</span>
    <span className="w-2 h-2 bg-primary rounded-full ml-1 self-end mb-1"></span>
  </Link>
);

const AuthSection = ({ isPending, user }: { isPending: boolean; user: any }) => {
  if (isPending) {
    return <Loader2 className="w-5 h-5 animate-spin text-primary" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center gap-3 bg-transparent hover:bg-muted/50 p-1.5 md:pr-3 rounded-full border border-transparent transition-all cursor-pointer">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border border-border bg-card flex items-center justify-center">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-primary" />
              )}
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <h5 className="text-sm font-black text-foreground leading-none capitalize">
                {user.name}
              </h5>
              <p className="text-[11px] font-bold text-muted-foreground uppercase mt-1">
                Student
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-card border-border">
          <DropdownMenuItem render={<Link href="/dashboard" className="cursor-pointer w-full font-bold" />}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => await authClient.signOut()}
            className="cursor-pointer text-destructive focus:text-destructive font-bold"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href="/login"
      className="bg-primary text-primary-foreground px-4 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 shadow-md"
    >
      Sign In
    </Link>
  );
};

const ProgramLink = ({ name, desc, href, onSelect }: { name: string; desc: string; href: string; onSelect: (name: string, href: string) => void }) => (
  <Link 
    href={href} 
    onClick={() => onSelect(name, href)}
    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all cursor-pointer"
  >
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
        {name}
        <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </span>
      <span className="text-[11px] text-muted-foreground font-medium leading-relaxed">{desc}</span>
    </div>
  </Link>
);

const Navbar = () => {
  const { isPending, data } = authClient.useSession();
  const user = data?.user;
  const pathname = usePathname();

  const [selectedProgram, setSelectedProgram] = useState<{name: string, href: string} | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('lit_selected_program');
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedProgram(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleProgramSelect = (name: string, href: string) => {
    const prog = { name, href };
    setSelectedProgram(prog);
    localStorage.setItem('lit_selected_program', JSON.stringify(prog));
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Glossary", href: "/glossary" },
    { name: "Study Method", href: "/study-method" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="bg-navbar-bg py-4 px-6 sticky top-0 z-50 shadow-sm border-b border-border">
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex max-w-[95%] mx-auto items-center justify-between w-full">
        <div className="w-[200px]">
          <Logo />
        </div>

        <div className="flex-1 flex justify-center">
          <NavigationMenu align="center" positionerClassName="!fixed !left-1/2 !-translate-x-1/2 !top-[70px]">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold text-sm",
                      pathname === "/" ? "text-primary" : "text-foreground"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold text-sm",
                    pathname.startsWith("/programs") ? "text-primary" : "text-foreground"
                  )}
                >
                  {selectedProgram ? (
                    <span className="flex items-center gap-1.5">
                      <span className="text-muted-foreground/70 font-bold">Pro:</span>
                      <span className="text-primary">{selectedProgram.name}</span>
                    </span>
                  ) : (
                    "Programmes"
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2">
                  <div className="w-[850px] bg-card border border-border/50 shadow-2xl rounded-3xl overflow-hidden flex">
                    
                    {/* Left Featured Column */}
                    <div className="w-[300px] bg-primary p-8 relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-2xl"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-white font-heading font-bold text-2xl mb-3 tracking-tight">LitAcademy</h3>
                        <p className="text-primary-foreground/85 text-[13px] leading-relaxed font-medium">
                          A fully structured path to mastering your academic journey. Dive deep into essential literary texts, explore complex critical theories, and build a strong foundation in English Literature effortlessly.
                        </p>
                      </div>

                      <div className="relative z-10 mt-12 bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-8 h-8 text-white opacity-90" />
                          <div>
                            <div className="text-white font-bold text-sm">Select your year</div>
                            <div className="text-primary-foreground/70 text-xs font-medium mt-0.5">Begin your reading journey</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Navigation Links Column */}
                    <div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-10">
                      
                      {/* Honours Section */}
                      <div className="col-span-1">
                        <h4 className="font-black text-foreground mb-5 text-sm flex items-center gap-2 uppercase tracking-widest border-b border-border pb-3">
                          <div className="p-1.5 bg-primary/10 rounded-md"><BookOpen className="w-4 h-4 text-primary" /></div>
                          Honours
                        </h4>
                        <div className="flex flex-col gap-1">
                          <ProgramLink name="1st Year" desc="Foundations of English Literature" href="/programs/honours/1st-year" onSelect={handleProgramSelect} />
                          <ProgramLink name="2nd Year" desc="Romantic to Victorian Period" href="/programs/honours/2nd-year" onSelect={handleProgramSelect} />
                          <ProgramLink name="3rd Year" desc="Modern Drama & Poetry" href="/programs/honours/3rd-year" onSelect={handleProgramSelect} />
                          <ProgramLink name="4th Year" desc="Advanced Critical Theory" href="/programs/honours/4th-year" onSelect={handleProgramSelect} />
                        </div>
                      </div>

                      {/* Masters Section & Quick Links */}
                      <div className="col-span-1">
                        <h4 className="font-black text-foreground mb-5 text-sm flex items-center gap-2 uppercase tracking-widest border-b border-border pb-3">
                          <div className="p-1.5 bg-accent/10 rounded-md"><GraduationCap className="w-4 h-4 text-accent" /></div>
                          Masters
                        </h4>
                        <div className="flex flex-col gap-1">
                          <ProgramLink name="Masters Final" desc="Specialised Advanced Studies" href="/programs/masters/final" onSelect={handleProgramSelect} />
                        </div>

                        {/* Quick Links / Resources */}
                        <div className="mt-8 bg-slate-50/80 border border-slate-100 p-5 rounded-2xl shadow-sm">
                          <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-4">Quick Resources</h5>
                          <div className="flex flex-col gap-3">
                            <Link href="/glossary" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                              Literary Terms Glossary
                            </Link>
                            <Link href="/study-method" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                              Our Study Method
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.slice(1).map((link, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold text-sm",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {user && (
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold text-sm",
                        pathname.startsWith("/dashboard") ? "text-primary" : "text-foreground"
                      )}
                    >
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="w-[200px] flex justify-end">
          <AuthSection isPending={isPending} user={user} />
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex lg:hidden items-center justify-between w-full relative">
        <div className="flex-1">
          <Sheet>
            <SheetTrigger render={<button className="p-2 -ml-2 rounded-full hover:bg-primary/10 text-primary transition-colors outline-none cursor-pointer" aria-label="Toggle menu" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-[350px] bg-card border-r-border/50 p-6 flex flex-col gap-6">
              <SheetHeader className="text-left mb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-4 overflow-y-auto">
                <SheetClose render={<Link href="/" className={cn("text-base font-bold py-2 transition-colors", pathname === "/" ? "text-primary" : "text-foreground")} />}>
                  Home
                </SheetClose>

                <div className="py-2 border-b border-border/40 pb-4">
                  <h4 className="text-base font-bold text-foreground mb-3 flex items-center justify-between">
                    Programmes
                    {selectedProgram && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {selectedProgram.name}
                      </span>
                    )}
                  </h4>
                  <div className="pl-4 flex flex-col gap-3">
                    <h5 className="text-sm font-semibold text-muted-foreground flex items-center gap-2"><BookOpen className="w-4 h-4" /> Honours</h5>
                    <SheetClose render={<Link onClick={() => handleProgramSelect("1st Year", "/programs/honours/1st-year")} href="/programs/honours/1st-year" className="text-sm text-foreground hover:text-primary font-bold" />}>1st Year</SheetClose>
                    <SheetClose render={<Link onClick={() => handleProgramSelect("2nd Year", "/programs/honours/2nd-year")} href="/programs/honours/2nd-year" className="text-sm text-foreground hover:text-primary font-bold" />}>2nd Year</SheetClose>
                    <SheetClose render={<Link onClick={() => handleProgramSelect("3rd Year", "/programs/honours/3rd-year")} href="/programs/honours/3rd-year" className="text-sm text-foreground hover:text-primary font-bold" />}>3rd Year</SheetClose>
                    <SheetClose render={<Link onClick={() => handleProgramSelect("4th Year", "/programs/honours/4th-year")} href="/programs/honours/4th-year" className="text-sm text-foreground hover:text-primary font-bold" />}>4th Year</SheetClose>
                    
                    <h5 className="text-sm font-semibold text-muted-foreground mt-3 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Masters</h5>
                    <SheetClose render={<Link onClick={() => handleProgramSelect("Masters Final", "/programs/masters/final")} href="/programs/masters/final" className="text-sm text-foreground hover:text-primary font-bold" />}>Masters Final</SheetClose>
                  </div>
                </div>

                {navLinks.slice(1).map((link, index) => (
                  <SheetClose key={index} render={<Link href={link.href} className={cn("text-base font-bold py-2 transition-colors", pathname === link.href ? "text-primary" : "text-foreground")} />}>
                      {link.name}
                  </SheetClose>
                ))}

                {user && (
                  <SheetClose render={<Link href="/dashboard" className={cn("text-base font-bold py-2 transition-colors", pathname.startsWith("/dashboard") ? "text-primary" : "text-foreground")} />}>
                    Dashboard
                  </SheetClose>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Logo />
        </div>

        <div className="flex-1 flex justify-end">
          <AuthSection isPending={isPending} user={user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
