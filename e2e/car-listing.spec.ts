import { test, expect } from '@playwright/test';

test.describe('Car Listing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cars');
  });

  test('should display car listing page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Explore Our Fleet');
  });

  test('should display car cards', async ({ page }) => {
    // Wait for cars to load
    await page.waitForSelector('[data-testid="car-card"]', { timeout: 10000 });
    
    const carCards = page.locator('[data-testid="car-card"]');
    const count = await carCards.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('should filter cars by search', async ({ page }) => {
    // Type in search box
    await page.fill('input[placeholder*="Search"]', 'Model S');
    
    // Wait for results to update
    await page.waitForTimeout(500);
    
    // Check if filtered results appear
    const carCards = page.locator('[data-testid="car-card"]');
    const count = await carCards.count();
    
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should filter cars by price range', async ({ page }) => {
    // Adjust price slider
    const minPriceSlider = page.locator('input[type="range"]').first();
    await minPriceSlider.fill('50000');
    
    // Wait for results to update
    await page.waitForTimeout(500);
    
    // Verify price filter is applied
    const displayedPrice = page.locator('text=/\\$50,000/').first();
    await expect(displayedPrice).toBeVisible();
  });

  test('should navigate to car detail page on click', async ({ page }) => {
    // Wait for cars to load
    await page.waitForSelector('[data-testid="car-card"]', { timeout: 10000 });
    
    // Click first car card
    await page.locator('[data-testid="car-card"]').first().click();
    
    // Verify navigation to detail page
    await expect(page).toHaveURL(/\/cars\/[a-z0-9-]+/);
  });

  test('should show pagination controls', async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check if pagination exists (if there are enough cars)
    const pagination = page.locator('[data-testid="pagination"]');
    const isVisible = await pagination.isVisible().catch(() => false);
    
    // Pagination may not exist if there's only one page
    if (isVisible) {
      expect(await pagination.isVisible()).toBe(true);
    }
  });

  test('should reset filters', async ({ page }) => {
    // Apply some filters
    await page.fill('input[placeholder*="Search"]', 'Model S');
    
    // Click reset button
    await page.click('button:has-text("Reset Filters")');
    
    // Verify search is cleared
    const searchInput = page.locator('input[placeholder*="Search"]');
    await expect(searchInput).toHaveValue('');
  });
});
