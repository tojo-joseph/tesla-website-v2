import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
// export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Invalid car ID" }, { status: 400 });
    }

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

    if (!car) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(car);
  } catch (error) {
    console.error("Failed to fetch car:", error);

    // Don't expose internal errors in production
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to fetch car",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
