import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tesla - Electric Vehicles, Solar & Clean Energy",
  description:
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
  keywords: [
    "Tesla",
    "electric vehicles",
    "EV",
    "electric cars",
    "sustainable energy",
    "solar panels",
    "clean energy",
    "zero emissions",
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Cybertruck",
    "battery technology",
    "autonomous driving",
    "renewable energy",
    "electric vehicle charging",
    "EV infrastructure",
  ],
  authors: [{ name: "Tesla" }],
  openGraph: {
    title: "Tesla - Electric Vehicles, Solar & Clean Energy",
    description:
      "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
    url: "https://tesla.com",
    siteName: "Tesla",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tesla-website-v2-git-develop-tojo-josephs-projects.vercel.app/images/social_sharing_img.png",
        width: 1200,
        height: 630,
        alt: "Tesla - Electric Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla - Electric Vehicles, Solar & Clean Energy",
    description:
      "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions.",
    creator: "@tesla",
    images: [
      "https://tesla-website-v2-git-develop-tojo-josephs-projects.vercel.app/images/social_sharing_img.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
