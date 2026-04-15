import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Vehicles - Browse Tesla Cars | Tesla",
  description:
    "Explore Tesla's complete lineup of electric vehicles. Compare models, prices, range, and performance. Find your perfect electric car with zero emissions and maximum innovation.",
  keywords: [
    "Tesla cars",
    "electric vehicles",
    "EV lineup",
    "Tesla models",
    "buy electric car",
    "Tesla pricing",
    "EV comparison",
    "zero emission vehicles",
    "sustainable transport",
    "electric car range",
    "Tesla performance",
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Cybertruck",
  ],
  openGraph: {
    title: "Electric Vehicles - Browse Tesla Cars",
    description:
      "Explore Tesla's complete lineup of electric vehicles. Compare models, prices, range, and performance.",
    url: "https://tesla.com/cars",
    type: "website",
    images: [
      {
        url: "/images/social_sharing_img.png",
        width: 1200,
        height: 630,
        alt: "Tesla Electric Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Vehicles - Browse Tesla Cars",
    description:
      "Explore Tesla's complete lineup of electric vehicles. Compare models, prices, range, and performance.",
    images: ["/images/social_sharing_img.png"],
  },
  alternates: {
    canonical: "https://tesla.com/cars",
  },
};

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
