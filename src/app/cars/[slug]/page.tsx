import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import CarDetailClient from "./CarDetailClient";
import { getCarBySlug, getAllCars } from "@/lib/data/cars";
import { notFound } from "next/navigation";

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
      title: "Car Not Found - Tesla",
      description: "The requested car could not be found.",
    };
  }

  return {
    title: `${car.name} - Tesla`,
    description:
      car.tagline ||
      `Explore the ${car.name} with detailed specifications and pricing.`,
    keywords: [
      car.name,
      "Tesla",
      "electric vehicle",
      "EV",
      "sustainable transport",
      ...car.variants.map((v) => v.name),
    ],
    openGraph: {
      title: car.name,
      description: car.tagline || `Explore the ${car.name}`,
      images: car.images[0] ? [car.images[0].url] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: car.name,
      description: car.tagline || `Explore the ${car.name}`,
      images: car.images[0] ? [car.images[0].url] : [],
    },
    alternates: {
      canonical: `https://tesla.com/cars/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const cars = await getAllCars();

  return cars.map((car: { slug: string }) => ({
    slug: car.slug,
  }));
}

export default async function CarDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const car = await getCarBySlug(resolvedParams.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-20">
        <CarDetailClient car={car} />
      </main>
    </div>
  );
}
