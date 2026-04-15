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
    title: `Configure ${car.name} - Tesla`,
    description: `Build and price your ${car.name}. Choose your variant, color, and options.`,
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
