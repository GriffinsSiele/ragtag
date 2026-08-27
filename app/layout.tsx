import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ragtag Studios | Crafting stories for a global audience",
    template: "%s | Ragtag Studios",
  },
  description:
    "Ragtag Studios is a film and sound production company creating high-quality work that celebrates diverse African stories for film, television, and digital media.",
  icons: {
    icon: "/brand/favicon-32.png",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-dvh bg-void font-sans text-paper">
        <div className="grain" />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
