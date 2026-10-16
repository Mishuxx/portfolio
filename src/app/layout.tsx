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
  title: "Ricardo (Rick) Pulgar Mendoza | Tech Recruiter • Psychologist (UCV) • Co-Founder @ Skillea",
  description:
    "5+ years recruiting tech talent from Latin America for Canadian and US companies. Background in psychology. Now building Skillea as co-founder.",
  keywords: [
    "Ricardo Pulgar Mendoza",
    "Rick Pulgar",
    "Skillea",
    "Technical Recruiter",
    "Psychologist (UCV)",
    "Progress Tree",
    "Gamified Learning",
    "Tech Talent",
    "IT Recruitment",
  ],
  authors: [{ name: "Ricardo Pulgar Mendoza" }],
  openGraph: {
    title: "Ricardo (Rick) Pulgar Mendoza — Tech Recruiter • Psychologist (UCV) • Co-Founder @ Skillea",
    description:
      "5+ years recruiting tech talent from Latin America for Canadian and US companies. Background in psychology. Now building Skillea as co-founder.",
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
