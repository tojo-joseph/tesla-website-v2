import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tesla - Sales, Support & Inquiries | Tesla",
  description:
    "Get in touch with Tesla for vehicle purchases, test drives, customer support, and general inquiries. Find our worldwide offices and contact information.",
  keywords: [
    "contact Tesla",
    "Tesla support",
    "Tesla sales",
    "test drive",
    "Tesla inquiry",
    "customer service",
    "Tesla offices",
    "vehicle purchase",
    "Tesla locations",
    "get in touch",
  ],
  openGraph: {
    title: "Contact Tesla - Sales, Support & Inquiries",
    description:
      "Get in touch with Tesla for vehicle purchases, test drives, customer support, and general inquiries.",
    url: "https://tesla.com/contact-us",
    type: "website",
    images: [
      {
        url: "/images/social_sharing_img.png",
        width: 1200,
        height: 630,
        alt: "Contact Tesla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tesla - Sales, Support & Inquiries",
    description:
      "Get in touch with Tesla for vehicle purchases, test drives, customer support, and general inquiries.",
    images: ["/images/social_sharing_img.png"],
  },
  alternates: {
    canonical: "https://tesla.com/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
