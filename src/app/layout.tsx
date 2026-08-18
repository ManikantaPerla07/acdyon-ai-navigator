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
  title: "AcdyOn AI Navigator — Your Next Career Move, Mapped by AI",

  description:
    "Turn your current skills and career goal into a focused learning path with clear next steps and practical progression.",

  keywords: [
    "AI career navigator",
    "AI learning path",
    "career development",
    "AI career planning",
    "AcdyOn",
  ],

  authors: [{ name: "AcdyOn AI Navigator" }],

  creator: "AcdyOn AI Navigator",

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "AcdyOn AI Navigator — Your Next Career Move, Mapped by AI",
    description:
      "Turn your current skills and career goal into a focused learning path with clear next steps.",
    type: "website",
    siteName: "AcdyOn AI Navigator",
  },

  twitter: {
    card: "summary_large_image",
    title: "AcdyOn AI Navigator — Your Next Career Move, Mapped by AI",
    description:
      "Turn your current skills and career goal into a focused learning path with clear next steps.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}