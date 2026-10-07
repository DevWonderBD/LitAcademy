import { 
  Inter, 
  Playfair_Display, 
  Lora, 
  Anek_Bangla, 
  Noto_Serif_Bengali,
  Plus_Jakarta_Sans,
  Manrope,
  DM_Sans,
  Outfit
} from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";

// PRD 8.2 Fonts configured via CSS variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const anekBangla = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-serif-bengali",
  display: "swap",
});

// UI Font alternatives
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "LitAcademy – NU English Literature Study Platform",
  description: "A premium, syllabus-based learning platform for English Literature students of National University (NU), Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "overflow-x-hidden",
        inter.variable,
        playfairDisplay.variable,
        lora.variable,
        anekBangla.variable,
        notoSerifBengali.variable,
        plusJakartaSans.variable,
        manrope.variable,
        dmSans.variable,
        outfit.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-ui bg-background text-foreground">
        <main className="flex-1 flex flex-col">{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
