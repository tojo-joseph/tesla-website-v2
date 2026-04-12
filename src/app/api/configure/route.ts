import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { carId, variantId, colorId } = body;

    // Validate required fields
    if (!carId || !variantId || !colorId) {
      return NextResponse.json(
        { error: "carId, variantId, and colorId are required" },
        { status: 400 },
      );
    }

    // Verify that the variant and color exist and belong to the same car
    const [variant, color] = await Promise.all([
      prisma.variant.findUnique({
        where: { id: variantId },
        select: { id: true, carId: true, price: true },
      }),
      prisma.color.findUnique({
        where: { id: colorId },
        select: { id: true, carId: true },
      }),
    ]);

    if (!variant) {
      return NextResponse.json({ error: "Variant not found" }, { status: 404 });
    }

    if (!color) {
      return NextResponse.json({ error: "Color not found" }, { status: 404 });
    }

    // Ensure variant and color belong to the same car
    if (variant.carId !== carId || color.carId !== carId) {
      return NextResponse.json(
        { error: "Variant and color must belong to the same car" },
        { status: 400 },
      );
    }

    // Create build configuration
    const buildConfig = await prisma.buildConfig.create({
      data: {
        carId,
        variantId,
        colorId,
        totalPrice: variant.price,
      },
      include: {
        car: {
          select: {
            id: true,
            name: true,
            slug: true,
            basePrice: true,
          },
        },
        variant: {
          select: {
            id: true,
            name: true,
            price: true,
            horsepower: true,
            torque: true,
          },
        },
        color: {
          select: {
            id: true,
            name: true,
            hexCode: true,
            imageUrl: true,
          },
        },
      },
    });

    return NextResponse.json(buildConfig, { status: 201 });
  } catch (error) {
    console.error("Failed to create build configuration:", error);
    return NextResponse.json(
      { error: "Failed to create build configuration" },
      { status: 500 },
    );
  }
}
