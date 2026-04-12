import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.buildConfig.deleteMany();
  await prisma.carImage.deleteMany();
  await prisma.color.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.car.deleteMany();

  // Create Tesla cars
  const modelS = await prisma.car.create({
    data: {
      slug: 'model-s',
      name: 'Model S',
      tagline: 'Beyond Ludicrous',
      basePrice: 79990,
      description: 'The highest performing sedan ever built with tri-motor all-wheel drive and plaid performance.',
      topSpeed: 200,
      zeroToSixty: 1.99,
      range: 405,
    },
  });

  const model3 = await prisma.car.create({
    data: {
      slug: 'model-3',
      name: 'Model 3',
      tagline: 'Beyond Electric',
      basePrice: 38990,
      description: 'The perfect middle ground between performance and efficiency in a compact sedan.',
      topSpeed: 162,
      zeroToSixty: 3.1,
      range: 358,
    },
  });

  const modelX = await prisma.car.create({
    data: {
      slug: 'model-x',
      name: 'Model X',
      tagline: 'Beyond SUV',
      basePrice: 94990,
      description: 'The SUV that combines utility, performance, and the most advanced technology.',
      topSpeed: 155,
      zeroToSixty: 2.5,
      range: 348,
    },
  });

  const modelY = await prisma.car.create({
    data: {
      slug: 'model-y',
      name: 'Model Y',
      tagline: 'Beyond Compact SUV',
      basePrice: 43990,
      description: 'Compact SUV with the versatility of a SUV and the efficiency of a sedan.',
      topSpeed: 155,
      zeroToSixty: 3.5,
      range: 330,
    },
  });

  // Create variants for Model S
  const modelSPlaid = await prisma.variant.create({
    data: {
      carId: modelS.id,
      name: 'Plaid',
      price: 129990,
      horsepower: 1020,
      torque: 1420,
    },
  });

  const modelSLongRange = await prisma.variant.create({
    data: {
      carId: modelS.id,
      name: 'Long Range',
      price: 89990,
      horsepower: 670,
      torque: 713,
    },
  });

  // Create variants for Model 3
  const model3Performance = await prisma.variant.create({
    data: {
      carId: model3.id,
      name: 'Performance',
      price: 55990,
      horsepower: 450,
      torque: 471,
    },
  });

  const model3LongRange = await prisma.variant.create({
    data: {
      carId: model3.id,
      name: 'Long Range AWD',
      price: 47990,
      horsepower: 346,
      torque: 389,
    },
  });

  const model3RearWheel = await prisma.variant.create({
    data: {
      carId: model3.id,
      name: 'Rear-Wheel Drive',
      price: 38990,
      horsepower: 283,
      torque: 307,
    },
  });

  // Create variants for Model X
  const modelXPlaid = await prisma.variant.create({
    data: {
      carId: modelX.id,
      name: 'Plaid',
      price: 138990,
      horsepower: 1020,
      torque: 1420,
    },
  });

  const modelXLongRange = await prisma.variant.create({
    data: {
      carId: modelX.id,
      name: 'Long Range',
      price: 99990,
      horsepower: 670,
      torque: 713,
    },
  });

  // Create variants for Model Y
  const modelYPerformance = await prisma.variant.create({
    data: {
      carId: modelY.id,
      name: 'Performance',
      price: 56990,
      horsepower: 450,
      torque: 471,
    },
  });

  const modelYLongRange = await prisma.variant.create({
    data: {
      carId: modelY.id,
      name: 'Long Range AWD',
      price: 49990,
      horsepower: 384,
      torque: 376,
    },
  });

  // Create colors for Model S
  const modelSPearlWhite = await prisma.color.create({
    data: {
      carId: modelS.id,
      name: 'Pearl White',
      hexCode: '#F5F5F5',
      imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
    },
  });

  const modelSBlack = await prisma.color.create({
    data: {
      carId: modelS.id,
      name: 'Solid Black',
      hexCode: '#000000',
      imageUrl: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop',
    },
  });

  const modelSBlue = await prisma.color.create({
    data: {
      carId: modelS.id,
      name: 'Deep Blue Metallic',
      hexCode: '#1E3A8A',
      imageUrl: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop',
    },
  });

  const modelSRed = await prisma.color.create({
    data: {
      carId: modelS.id,
      name: 'Red Multi-Coat',
      hexCode: '#DC2626',
      imageUrl: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop',
    },
  });

  const modelSGrey = await prisma.color.create({
    data: {
      carId: modelS.id,
      name: 'Stealth Grey',
      hexCode: '#374151',
      imageUrl: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop',
    },
  });

  // Create colors for Model 3
  const model3White = await prisma.color.create({
    data: {
      carId: model3.id,
      name: 'Pearl White',
      hexCode: '#F5F5F5',
      imageUrl: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop',
    },
  });

  const model3Black = await prisma.color.create({
    data: {
      carId: model3.id,
      name: 'Solid Black',
      hexCode: '#000000',
      imageUrl: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop',
    },
  });

  const model3Blue = await prisma.color.create({
    data: {
      carId: model3.id,
      name: 'Deep Blue Metallic',
      hexCode: '#1E3A8A',
      imageUrl: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop',
    },
  });

  const model3Red = await prisma.color.create({
    data: {
      carId: model3.id,
      name: 'Red Multi-Coat',
      hexCode: '#DC2626',
      imageUrl: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop',
    },
  });

  // Create colors for Model X
  const modelXWhite = await prisma.color.create({
    data: {
      carId: modelX.id,
      name: 'Pearl White',
      hexCode: '#F5F5F5',
      imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
    },
  });

  const modelXBlack = await prisma.color.create({
    data: {
      carId: modelX.id,
      name: 'Solid Black',
      hexCode: '#000000',
      imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
    },
  });

  const modelXBlue = await prisma.color.create({
    data: {
      carId: modelX.id,
      name: 'Deep Blue Metallic',
      hexCode: '#1E3A8A',
      imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
    },
  });

  const modelXRed = await prisma.color.create({
    data: {
      carId: modelX.id,
      name: 'Red Multi-Coat',
      hexCode: '#DC2626',
      imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
    },
  });

  // Create colors for Model Y
  const modelYWhite = await prisma.color.create({
    data: {
      carId: modelY.id,
      name: 'Pearl White',
      hexCode: '#F5F5F5',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    },
  });

  const modelYBlack = await prisma.color.create({
    data: {
      carId: modelY.id,
      name: 'Solid Black',
      hexCode: '#000000',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    },
  });

  const modelYBlue = await prisma.color.create({
    data: {
      carId: modelY.id,
      name: 'Deep Blue Metallic',
      hexCode: '#1E3A8A',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    },
  });

  const modelYRed = await prisma.color.create({
    data: {
      carId: modelY.id,
      name: 'Red Multi-Coat',
      hexCode: '#DC2626',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    },
  });

  const modelYGrey = await prisma.color.create({
    data: {
      carId: modelY.id,
      name: 'Stealth Grey',
      hexCode: '#374151',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    },
  });

  // Create car images
  await prisma.carImage.createMany({
    data: [
      // Model S images
      { carId: modelS.id, url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop', alt: 'Tesla Model S front view', isPrimary: true },
      { carId: modelS.id, url: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop', alt: 'Tesla Model S side view', isPrimary: false },
      { carId: modelS.id, url: 'https://images.unsplash.com/photo-1549399657-2e7e5cbd6c78?w=800&auto=format&fit=crop', alt: 'Tesla Model S interior', isPrimary: false },
      
      // Model 3 images
      { carId: model3.id, url: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop', alt: 'Tesla Model 3 front view', isPrimary: true },
      { carId: model3.id, url: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop', alt: 'Tesla Model 3 side view', isPrimary: false },
      { carId: model3.id, url: 'https://images.unsplash.com/photo-1554224712-5a1a7b45c2c5?w=800&auto=format&fit=crop', alt: 'Tesla Model 3 interior', isPrimary: false },
      
      // Model X images
      { carId: modelX.id, url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop', alt: 'Tesla Model X front view', isPrimary: true },
      { carId: modelX.id, url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop', alt: 'Tesla Model X with falcon wing doors', isPrimary: false },
      { carId: modelX.id, url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop', alt: 'Tesla Model X interior', isPrimary: false },
      
      // Model Y images
      { carId: modelY.id, url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop', alt: 'Tesla Model Y front view', isPrimary: true },
      { carId: modelY.id, url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop', alt: 'Tesla Model Y side view', isPrimary: false },
      { carId: modelY.id, url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop', alt: 'Tesla Model Y interior', isPrimary: false },
    ],
  });

  // Create some sample build configurations
  await prisma.buildConfig.createMany({
    data: [
      // Model S configurations
      { carId: modelS.id, variantId: modelSPlaid.id, colorId: modelSPearlWhite.id, totalPrice: 129990 },
      { carId: modelS.id, variantId: modelSPlaid.id, colorId: modelSRed.id, totalPrice: 131990 },
      { carId: modelS.id, variantId: modelSLongRange.id, colorId: modelSBlack.id, totalPrice: 89990 },
      
      // Model 3 configurations
      { carId: model3.id, variantId: model3Performance.id, colorId: model3Red.id, totalPrice: 56990 },
      { carId: model3.id, variantId: model3LongRange.id, colorId: model3White.id, totalPrice: 47990 },
      { carId: model3.id, variantId: model3RearWheel.id, colorId: model3Black.id, totalPrice: 38990 },
      
      // Model X configurations
      { carId: modelX.id, variantId: modelXPlaid.id, colorId: modelXWhite.id, totalPrice: 138990 },
      { carId: modelX.id, variantId: modelXLongRange.id, colorId: modelXBlue.id, totalPrice: 101990 },
      
      // Model Y configurations
      { carId: modelY.id, variantId: modelYPerformance.id, colorId: modelYRed.id, totalPrice: 57990 },
      { carId: modelY.id, variantId: modelYLongRange.id, colorId: modelYGrey.id, totalPrice: 50990 },
    ],
  });

  console.log('Tesla database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
