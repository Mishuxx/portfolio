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
  title: "Ricardo (Rick) Pulgar Mendoza | Tech Recruiter • Psychologist • Co-Founder @ Skillea",
  description:
    "Personal portfolio of Ricardo (Rick) Pulgar Mendoza. Connecting clinical psychology, technical talent acquisition, and product exploration.",
  keywords: [
    "Ricardo Pulgar Mendoza",
    "Rick Pulgar",
    "Skillea",
    "Technical Recruiter",
    "Clinical Psychology",
    "Progress Tree",
    "Gamified Learning",
    "Tech Talent",
    "IT Recruitment",
  ],
  authors: [{ name: "Ricardo Pulgar Mendoza" }],
  openGraph: {
    title: "Ricardo (Rick) Pulgar Mendoza — Psychology, Talent & Product Exploration",
    description:
      "Connecting clinical psychology, tech talent acquisition, and digital product exploration.",
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
