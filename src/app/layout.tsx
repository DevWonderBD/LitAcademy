import { 
  Playfair_Display, 
  Lora, 
  Anek_Bangla, 
  Noto_Serif_Bengali,
  Plus_Jakarta_Sans
} from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";

// PRD 8.2 Fonts configured via CSS variables
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

// UI Font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
        playfairDisplay.variable,
        lora.variable,
        anekBangla.variable,
        notoSerifBengali.variable,
        plusJakartaSans.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-ui bg-background text-foreground">
        <main className="flex-1 flex flex-col">{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
