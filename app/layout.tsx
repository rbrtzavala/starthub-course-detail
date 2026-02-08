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
  metadataBase: new URL("https://www.starhub.academy"),
  title: {
    default: "StarHub Academy",
    template: "%s | StarHub Academy"
  },
  description: "StartHub Academy offers high-quality courses focused on modern web development and performance-driven learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
            `bg-white text-slate-900 antialiased ${geistSans.variable} ${geistMono.variable} antialiased`
        }
      >
        {children}
      </body>
    </html>
  );
}
