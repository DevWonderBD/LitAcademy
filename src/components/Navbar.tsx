"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Menu } from "lucide-react";
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
import React from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { isPending, data } = authClient.useSession();
  const user = data?.user;
  const pathname = usePathname();

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
            <DropdownMenuItem render={<Link href="/dashboard" className="cursor-pointer" />}>
                Dashboard
              </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => await authClient.signOut()}
              className="cursor-pointer text-destructive focus:text-destructive"
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
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px] grid grid-cols-2 gap-6 bg-card border border-border/50">
                    <div>
                      <h4 className="font-black text-foreground mb-3 text-sm">Honours</h4>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link href="/programs/honours/1st-year" className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                            1st Year
                          </Link>
                        </li>
                        <li>
                          <Link href="/programs/honours/2nd-year" className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                            2nd Year
                          </Link>
                        </li>
                        <li>
                          <Link href="/programs/honours/3rd-year" className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                            3rd Year
                          </Link>
                        </li>
                        <li>
                          <Link href="/programs/honours/4th-year" className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                            4th Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-black text-foreground mb-3 text-sm">Masters</h4>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link href="/programs/masters/final" className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                            Masters Final
                          </Link>
                        </li>
                      </ul>
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
                  <h4 className="text-base font-bold text-foreground mb-3">Programs</h4>
                  <div className="pl-4 flex flex-col gap-3">
                    <h5 className="text-sm font-semibold text-muted-foreground">Honours</h5>
                    <SheetClose render={<Link href="/programs/honours/1st-year" className="text-sm text-foreground hover:text-primary" />}>1st Year</SheetClose>
                    <SheetClose render={<Link href="/programs/honours/2nd-year" className="text-sm text-foreground hover:text-primary" />}>2nd Year</SheetClose>
                    <SheetClose render={<Link href="/programs/honours/3rd-year" className="text-sm text-foreground hover:text-primary" />}>3rd Year</SheetClose>
                    <SheetClose render={<Link href="/programs/honours/4th-year" className="text-sm text-foreground hover:text-primary" />}>4th Year</SheetClose>
                    
                    <h5 className="text-sm font-semibold text-muted-foreground mt-2">Masters</h5>
                    <SheetClose render={<Link href="/programs/masters/final" className="text-sm text-foreground hover:text-primary" />}>Masters Final</SheetClose>
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
