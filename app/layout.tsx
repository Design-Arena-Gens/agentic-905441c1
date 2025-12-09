import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Adcraze | Performance-First Ads That Drive Real ROI",
  description: "Stop wasting ad spend. Google & Meta-certified experts. Free audit + performance pricing.",
  keywords: "digital ads, google ads, meta ads, facebook ads, performance marketing, ROI, ad agency",
  openGraph: {
    title: "Adcraze | Performance-First Ads That Drive Real ROI",
    description: "Stop wasting ad spend. Google & Meta-certified experts. Free audit + performance pricing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
