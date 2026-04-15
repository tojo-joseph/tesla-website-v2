import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    }
  },
  usePathname() {
    return ''
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

// Mock framer-motion
jest.mock('motion/react', () => ({
  motion: {
    div: 'div',
    button: 'button',
    section: 'section',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    img: 'img',
  },
  useScroll: () => ({
    scrollYProgress: { get: () => 0 },
  }),
  useTransform: () => ({ get: () => 0 }),
  AnimatePresence: ({ children }) => children,
}))
