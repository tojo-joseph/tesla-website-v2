import { Metadata } from "next";
import { getCarBySlug, getAllCars } from "@/lib/data/cars";
import { notFound } from "next/navigation";
import ConfigureClient from "./ConfigureClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const car = await getCarBySlug(resolvedParams.slug);

  if (!car) {
    return {
      title: "Configure - Tesla",
      description: "Build and price your Tesla.",
    };
  }

  return {
    title: `Configure ${car.name} - Build & Price Your Tesla | Tesla`,
    description: `Build and price your ${car.name}. Choose your variant, color, and options. Customize your electric vehicle and see real-time pricing.`,
    keywords: [
      `configure ${car.name}`,
      "build Tesla",
      "price Tesla",
      "customize electric vehicle",
      "Tesla configurator",
      "EV customization",
      car.name,
      "Tesla options",
      "vehicle builder",
    ],
    openGraph: {
      title: `Configure ${car.name} - Build & Price Your Tesla`,
      description: `Build and price your ${car.name}. Choose your variant, color, and options.`,
      url: `https://tesla.com/configure/${resolvedParams.slug}`,
      type: "website",
      images: [
        {
          url: "/images/social_sharing_img.png",
          width: 1200,
          height: 630,
          alt: `Configure ${car.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Configure ${car.name}`,
      description: `Build and price your ${car.name}. Choose your variant, color, and options.`,
      images: ["/images/social_sharing_img.png"],
    },
    alternates: {
      canonical: `https://tesla.com/configure/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const cars = await getAllCars();

  return cars.map((car: { slug: string }) => ({
    slug: car.slug,
  }));
}

export default async function ConfigurePage({ params }: PageProps) {
  const resolvedParams = await params;
  const car = await getCarBySlug(resolvedParams.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-20">
        <ConfigureClient car={car} />
      </main>
    </div>
  );
}
