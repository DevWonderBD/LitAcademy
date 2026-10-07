"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Menu, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
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

const Navbar = () => {
  const { isPending, data } = authClient.useSession();
  const user = data?.user;
  const pathname = usePathname();

  const [selectedProgram, setSelectedProgram] = useState<{name: string, href: string} | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('lit_selected_program');
    if (saved) {
      try {
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

  const Logo = () => (
    <Link href="/" className="text-2xl md:text-2xl font-black flex items-center">
      <span className="text-foreground">Lit</span>
      <span className="text-primary">Academy</span>
      <span className="w-2 h-2 bg-primary rounded-full ml-1 self-end mb-1"></span>
    </Link>
  );

  const AuthSection = () => {
    if (isPending) {
      return <Loader2 className="w-5 h-5 animate-spin text-primary" />;
    }

    if (user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center gap-3 bg-transparent hover:bg-muted/50 p-1.5 md:pr-3 rounded-full border border-transparent transition-all cursor-pointer">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border border-border bg-card">
                <Image
                  src={user.image || "/placeholder.jpg"}
                  alt={user.name || "User"}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
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

  const ProgramLink = ({ name, href }: { name: string; href: string }) => (
    <Link 
      href={href} 
      onClick={() => handleProgramSelect(name, href)}
      className="group flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all cursor-pointer"
    >
      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </Link>
  );

  return (
    <nav className="bg-navbar-bg py-4 px-6 sticky top-0 z-50 shadow-sm border-b border-border">
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex max-w-[95%] mx-auto items-center justify-between w-full">
        <div className="w-[200px]">
          <Logo />
        </div>

        <div className="flex-1 flex justify-center">
          <NavigationMenu>
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
                <NavigationMenuContent>
                  <div className="p-4 w-[500px] grid grid-cols-5 gap-4 bg-card border-none shadow-2xl rounded-2xl overflow-hidden">
                    
                    <div className="col-span-3 p-4">
                      <h4 className="font-black text-foreground mb-4 text-sm flex items-center gap-2 uppercase tracking-wider">
                        <div className="p-1.5 bg-primary/10 rounded-md"><BookOpen className="w-4 h-4 text-primary" /></div>
                        Honours
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <ProgramLink name="1st Year" href="/programs/honours/1st-year" />
                        <ProgramLink name="2nd Year" href="/programs/honours/2nd-year" />
                        <ProgramLink name="3rd Year" href="/programs/honours/3rd-year" />
                        <ProgramLink name="4th Year" href="/programs/honours/4th-year" />
                      </div>
                    </div>

                    <div className="col-span-2 bg-slate-50/50 p-6 rounded-xl border border-slate-100/50">
                      <h4 className="font-black text-foreground mb-4 text-sm flex items-center gap-2 uppercase tracking-wider">
                        <div className="p-1.5 bg-accent/10 rounded-md"><GraduationCap className="w-4 h-4 text-accent" /></div>
                        Masters
                      </h4>
                      <div className="flex flex-col gap-2">
                        <ProgramLink name="Masters Final" href="/programs/masters/final" />
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
          <AuthSection />
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
          <AuthSection />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
