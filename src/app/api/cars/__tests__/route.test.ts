import { GET } from '../route'
import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

// Mock Prisma
jest.mock('@/lib/prisma', () => ({
  prisma: {
    car: {
      count: jest.fn(),
      findMany: jest.fn(),
    },
  },
}))

describe('/api/cars', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns paginated car data', async () => {
    const mockCars = [
      {
        id: '1',
        slug: 'model-s',
        name: 'Model S',
        tagline: 'Plaid',
        basePrice: 89990,
        variants: [],
        images: [],
      },
    ]

    ;(prisma.car.count as jest.Mock).mockResolvedValue(1)
    ;(prisma.car.findMany as jest.Mock).mockResolvedValue(mockCars)

    const request = new NextRequest('http://localhost:3000/api/cars?page=1&limit=9')
    const response = await GET(request)
    const data = await response.json()

    expect(data.data).toHaveLength(1)
    expect(data.total).toBe(1)
    expect(data.page).toBe(1)
    expect(data.totalPages).toBe(1)
  })

  it('filters cars by search term', async () => {
    ;(prisma.car.count as jest.Mock).mockResolvedValue(0)
    ;(prisma.car.findMany as jest.Mock).mockResolvedValue([])

    const request = new NextRequest('http://localhost:3000/api/cars?search=Model+S')
    await GET(request)

    expect(prisma.car.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          OR: expect.arrayContaining([
            { name: { contains: 'Model S', mode: 'insensitive' } },
            { tagline: { contains: 'Model S', mode: 'insensitive' } },
          ]),
        }),
      })
    )
  })

  it('filters cars by price range', async () => {
    ;(prisma.car.count as jest.Mock).mockResolvedValue(0)
    ;(prisma.car.findMany as jest.Mock).mockResolvedValue([])

    const request = new NextRequest('http://localhost:3000/api/cars?minPrice=50000&maxPrice=100000')
    await GET(request)

    expect(prisma.car.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          basePrice: {
            gte: 50000,
            lte: 100000,
          },
        }),
      })
    )
  })

  it('prioritizes real Tesla models over dummy models', async () => {
    const mockCars = [
      { id: '1', slug: 'model-a', name: 'Model A', basePrice: 50000, variants: [], images: [] },
      { id: '2', slug: 'model-s', name: 'Model S', basePrice: 89990, variants: [], images: [] },
      { id: '3', slug: 'model-b', name: 'Model B', basePrice: 60000, variants: [], images: [] },
    ]

    ;(prisma.car.count as jest.Mock).mockResolvedValue(3)
    ;(prisma.car.findMany as jest.Mock).mockResolvedValue(mockCars)

    const request = new NextRequest('http://localhost:3000/api/cars')
    const response = await GET(request)
    const data = await response.json()

    // Model S should be first
    expect(data.data[0].slug).toBe('model-s')
  })

  it('handles errors gracefully', async () => {
    ;(prisma.car.count as jest.Mock).mockRejectedValue(new Error('Database error'))

    const request = new NextRequest('http://localhost:3000/api/cars')
    const response = await GET(request)

    expect(response.status).toBe(500)
    const data = await response.json()
    expect(data.error).toBe('Failed to fetch cars')
  })
})
