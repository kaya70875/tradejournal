import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter();

export const metadata: Metadata = {
  title: "TradeJourney",
  description:
    "TradeJourney helps traders record their decisions, track trade reasoning, and stay disciplined with reminders and insights.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}