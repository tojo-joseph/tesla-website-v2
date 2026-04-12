import { prisma } from "@/lib/prisma";
import { Car } from "@/store/carSlice";
import { notFound } from "next/navigation";

// Get all cars for static generation
export async function getAllCars() {
  try {
    const cars = await prisma.car.findMany({
      select: { slug: true },
    });
    return cars;
  } catch (error) {
    console.error("Failed to fetch all cars:", error);
    return [];
  }
}

// Get car by slug for page rendering
export async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
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
    console.error(`Failed to fetch car with slug ${slug}:`, error);
    return null;
  }
}

// Get related cars (same category or similar price range)
export async function getRelatedCars(currentCar: Car, limit: number = 3) {
  try {
    const relatedCars = await prisma.car.findMany({
      where: {
        AND: [
          { id: { not: currentCar.id } },
          {
            OR: [
              { basePrice: { gte: currentCar.basePrice * 0.8, lte: currentCar.basePrice * 1.2 } },
              // Add other related criteria if needed
            ],
          },
        ],
      },
      include: {
        images: {
          where: { isPrimary: true },
          take: 1,
        },
      },
      take: limit,
    });

    return relatedCars;
  } catch (error) {
    console.error("Failed to fetch related cars:", error);
    return [];
  }
}
