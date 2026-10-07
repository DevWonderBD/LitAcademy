import { Open_Sans, Geist } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere – Online Learning Platform",
  description: "A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme='light'
      className={cn("h-full", "antialiased", "overflow-x-hidden", openSans.className, "font-sans", geist.variable)}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
