import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo (Rick) Pulgar Mendoza | CPO @ Skillea • Tech Recruiter • Psychologist",
  description:
    "At the intersection of Psychology, Talent, and Product Architecture — understanding human systems to build better digital systems and high-performing teams.",
  keywords: [
    "Ricardo Pulgar Mendoza",
    "Rick Pulgar",
    "Skillea",
    "CPO",
    "Product Architect",
    "Technical Recruiter",
    "Clinical Psychology",
    "Progress Tree",
    "Gamification",
    "Talent Architecture",
  ],
  authors: [{ name: "Ricardo Pulgar Mendoza" }],
  openGraph: {
    title: "Ricardo (Rick) Pulgar Mendoza — Human Systems & Digital Architecture",
    description:
      "Architecting digital products and high-performance teams through human behavioral psychology.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#08090D] text-[#F3F4F6] antialiased selection:bg-purple-500/30 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
