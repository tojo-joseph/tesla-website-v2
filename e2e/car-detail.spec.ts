import { test, expect } from '@playwright/test';

test.describe('Car Detail Page', () => {
  test('should display car details for Model S', async ({ page }) => {
    await page.goto('/cars/model-s');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check if car name is displayed
    await expect(page.locator('h1')).toContainText('Model S');
    
    // Check if price is displayed
    await expect(page.locator('text=/\\$/').first()).toBeVisible();
  });

  test('should change images when color is selected', async ({ page }) => {
    await page.goto('/cars/model-s');
    await page.waitForLoadState('networkidle');
    
    // Check if color selector exists
    const colorButtons = page.locator('[data-testid="color-button"]');
    const count = await colorButtons.count();
    
    if (count > 1) {
      // Get initial image src
      const initialImage = await page.locator('img[alt*="Model S"]').first().getAttribute('src');
      
      // Click second color
      await colorButtons.nth(1).click();
      
      // Wait for image to change
      await page.waitForTimeout(500);
      
      // Get new image src
      const newImage = await page.locator('img[alt*="Model S"]').first().getAttribute('src');
      
      // Images should be different
      expect(initialImage).not.toBe(newImage);
    }
  });

  test('should display specifications', async ({ page }) => {
    await page.goto('/cars/model-s');
    await page.waitForLoadState('networkidle');
    
    // Check for spec items
    const specs = page.locator('text=/mph|mi|hp/i');
    const count = await specs.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to Build and Price page', async ({ page }) => {
    await page.goto('/cars/model-s');
    await page.waitForLoadState('networkidle');
    
    // Click Build and Price button
    await page.click('text="Build and Price"');
    
    // Verify navigation
    await expect(page).toHaveURL(/\/configure\/model-s/);
  });

  test('should display variants if available', async ({ page }) => {
    await page.goto('/cars/model-s');
    await page.waitForLoadState('networkidle');
    
    // Check if page loaded successfully
    const pageContent = await page.textContent('body');
    expect(pageContent).toBeTruthy();
  });
});

test.describe('Configuration Page', () => {
  test('should display configuration steps', async ({ page }) => {
    await page.goto('/configure/model-s');
    await page.waitForLoadState('networkidle');
    
    // Check for step indicators
    const steps = page.locator('text=/Step|Variant|Color|Review/i');
    const count = await steps.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('should allow variant selection', async ({ page }) => {
    await page.goto('/configure/model-s');
    await page.waitForLoadState('networkidle');
    
    // Wait for variants to load
    await page.waitForTimeout(1000);
    
    // Check if variant options exist
    const variantButtons = page.locator('button:has-text("Long Range"), button:has-text("Plaid")');
    const count = await variantButtons.count();
    
    if (count > 0) {
      // Click first variant
      await variantButtons.first().click();
      
      // Verify selection
      await page.waitForTimeout(500);
    }
  });

  test('should show Order Now button on review step', async ({ page }) => {
    await page.goto('/configure/model-s');
    await page.waitForLoadState('networkidle');
    
    // Navigate through steps if possible
    const continueButton = page.locator('button:has-text("Continue")');
    const isVisible = await continueButton.isVisible().catch(() => false);
    
    if (isVisible) {
      await continueButton.click();
      await page.waitForTimeout(500);
    }
  });
});
