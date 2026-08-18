import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcdyOn AI Navigator",
  description:
    "Turn your career goal and current skills into a focused learning path with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}