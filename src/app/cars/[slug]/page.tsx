import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import CarDetailClient from "./CarDetailClient";

interface CarDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  try {
    const { prisma } = await import("@/lib/prisma");
    const car = await prisma.car.findUnique({
      where: { slug: params.slug },
      select: {
        name: true,
        tagline: true,
      },
    });

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
    };
  } catch (error) {
    return {
      title: "Tesla Vehicle",
      description:
        "Explore Tesla vehicles with detailed specifications and pricing.",
    };
  }
}

export async function generateStaticParams() {
  try {
    const { prisma } = await import("@/lib/prisma");
    const cars = await prisma.car.findMany({
      select: { slug: true },
    });

    return cars.map((car: { slug: string }) => ({
      slug: car.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

async function getCarData(slug: string) {
  try {
    const { prisma } = await import("@/lib/prisma");
    const car = await prisma.car.findUnique({
      where: { slug },
      include: {
        variants: {
          orderBy: { price: "asc" },
        },
        colors: {
          orderBy: { name: "asc" },
        },
        images: true,
        buildConfigs: {
          include: {
            variant: true,
            color: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return car;
  } catch (error) {
    console.error("Failed to fetch car data:", error);
    return null;
  }
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const car = await getCarData(params.slug);

  if (!car) {
    return (
      <div className="min-h-screen bg-midlife-bg">
        <Navigation />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-midlife-text mb-4 font-termina">
                Car Not Found
              </h1>
              <p className="text-midlife-light-gray mb-8 font-satoshi">
                The requested vehicle could not be found.
              </p>
              <a
                href="/cars"
                className="inline-block bg-midlife-red hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-termina"
              >
                Back to Vehicles
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midlife-bg">
      <Navigation />
      <main className="pt-20">
        <CarDetailClient car={car} />
      </main>
    </div>
  );
}
