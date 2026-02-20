import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatbotToggle from '@/components/ui/chatbot-toggle'
import Footer from "@/components/footer";

// Google fonts (you can keep these if you still use them elsewhere)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tristan Triñanes",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-hide">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased scrollbar-hide`}
      >
          {children}
          <ChatbotToggle />
          <Footer />
      </body>
    </html>
  );
}