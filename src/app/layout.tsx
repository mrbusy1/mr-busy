import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
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
  title: {
    default: "Muhammad Sufian Amjad - Full Stack Developer & Designer",
    template: "%s | Muhammad Sufian Amjad"
  },
  description: "Professional Full Stack Developer & Creative Designer specializing in modern web applications, mobile development, and UI/UX design. Building exceptional digital experiences with React, Next.js, Node.js & more.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer", 
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Web Developer",
    "Muhammad Sufian Amjad",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Sufian Amjad" }],
  creator: "Muhammad Sufian Amjad",
  publisher: "Muhammad Sufian Amjad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    title: "Muhammad Sufian Amjad - Full Stack Developer & Designer",
    description: "Professional Full Stack Developer & Creative Designer building exceptional digital experiences",
    siteName: "Muhammad Sufian Amjad Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Sufian Amjad - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sufian Amjad - Full Stack Developer & Designer",
    description: "Professional Full Stack Developer & Creative Designer building exceptional digital experiences",
    images: ["/favicon.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icons/favicon.ico',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white min-h-screen overflow-x-hidden`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
