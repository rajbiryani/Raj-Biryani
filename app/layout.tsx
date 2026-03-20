import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafe POS | POS for Small Cafe",
  description: "Raj Biryani – serving authentic and delicious biryani in Kathmandu.",
  keywords: [
    "Raj Biryani",
    "Biryani in Kathmandu",
    "Best Biryani in Kathmandu",
    "Chicken Biryani Kathmandu",
    "Mutton Biryani Kathmandu",
    "Biryani Restaurant Kathmandu",
    "Kathmandu Biryani",
    "Best Restaurant in Kathmandu"
  ],

  
  icons: {
    icon: [
      {
        url: "/Logo.jpeg",
        href: "/Logo.jpeg",
      },
    ],
    shortcut: "/Logo.jpeg",
    apple: "/Logo.jpeg",
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
        className={`${inter.variable} font-sans antialiased bg-white text-zinc-900`}
      >

            {children}
            <Toaster position="top-right" richColors duration={2000} />

      </body>
    </html>
  );
}
