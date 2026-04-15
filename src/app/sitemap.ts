import { MetadataRoute } from "next";
import { getAllCars } from "@/lib/data/cars";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tesla.com";

  const cars = await getAllCars();

  const carPages = cars.map((car: { slug: string }) => ({
    url: `${baseUrl}/cars/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const configurePages = cars.map((car: { slug: string }) => ({
    url: `${baseUrl}/configure/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...carPages,
    ...configurePages,
  ];
}
