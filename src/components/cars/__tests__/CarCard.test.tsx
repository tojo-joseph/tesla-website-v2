import { render, screen } from '@testing-library/react'
import CarCard from '../CarCard'

describe('CarCard', () => {
  const mockCar = {
    id: '1',
    slug: 'model-s',
    name: 'Model S',
    tagline: 'Plaid',
    description: 'The quickest car in production',
    basePrice: 89990,
    images: [
      {
        id: '1',
        url: 'https://example.com/model-s.jpg',
        alt: 'Model S',
        isPrimary: true,
      },
    ],
    variants: [
      {
        id: '1',
        name: 'Long Range',
        price: 89990,
      },
    ],
  }

  it('renders car name and tagline', () => {
    render(<CarCard car={mockCar} />)
    
    expect(screen.getByText('Model S')).toBeInTheDocument()
    expect(screen.getByText('Plaid')).toBeInTheDocument()
  })

  it('displays the correct price', () => {
    render(<CarCard car={mockCar} />)
    
    expect(screen.getByText(/\$89,990/)).toBeInTheDocument()
  })

  it('shows primary image', () => {
    render(<CarCard car={mockCar} />)
    
    const image = screen.getByAltText('Model S')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('model-s.jpg'))
  })

  it('links to car detail page', () => {
    render(<CarCard car={mockCar} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/cars/model-s')
  })

  it('shows placeholder image when no primary image exists', () => {
    const carWithoutImage = { ...mockCar, images: [] }
    render(<CarCard car={carWithoutImage} />)
    
    const image = screen.getByAltText('Model S')
    expect(image).toHaveAttribute('src', expect.stringContaining('placeholder'))
  })
})
