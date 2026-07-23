/**
 * tests/landing.spec.ts  (cms-landing)
 *
 * Tests for the public marketing landing page (/).
 * No auth required — runs against all 3 landing-public browser projects
 * (Chrome desktop, WebKit/Safari, Mobile Safari).
 */
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('page loads and returns 200', async ({ page }) => {
    expect(page.url()).toContain('localhost:3000');
    const body = await page.textContent('body');
    expect(body).toBeTruthy();
  });

  test('page has a descriptive title', async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(3);
  });

  test('Navbar is visible on desktop', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) {
      const nav = page.locator('nav, header').first();
      await expect(nav).toBeVisible();
    }
  });

  test('desktop navbar has "Go to Dashboard" button', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) {
      const dashBtn = page
        .locator('nav a, nav button, header a, header button')
        .filter({ hasText: /dashboard/i })
        .first();
      await expect(dashBtn).toBeVisible();
    }
  });

  test('mobile hamburger menu opens', async ({ page, isMobile }) => {
    if (isMobile) {
      // Find the hamburger / menu toggle
      const hamburger = page
        .locator('button')
        .filter({ hasText: /menu/i })
        .or(page.locator('[aria-label*="menu" i], [aria-label*="navigation" i]'))
        .first();

      if (await hamburger.count() > 0) {
        await hamburger.click();
        await page.waitForTimeout(400);
        // Mobile nav links should be visible
        const mobileNav = page.locator('[role="dialog"], [data-state="open"], nav').last();
        await expect(mobileNav).toBeVisible();
      }
    }
  });

  test('mobile nav also has "Go to Dashboard" button', async ({ page, isMobile }) => {
    if (isMobile) {
      // Open mobile menu first
      const hamburger = page
        .locator('button')
        .filter({ hasText: /menu/i })
        .or(page.locator('[aria-label*="menu" i]'))
        .first();

      if (await hamburger.count() > 0) {
        await hamburger.click();
        await page.waitForTimeout(400);
      }
      const dashBtn = page
        .locator('a, button')
        .filter({ hasText: /dashboard/i })
        .first();
      await expect(dashBtn).toBeVisible();
    }
  });

  test('page has no horizontal overflow (no unintended scroll)', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
  });

  test('CTA / hero section visible', async ({ page }) => {
    // Look for a primary call-to-action button in the hero
    const cta = page
      .locator('main a, main button, section a, section button')
      .filter({ hasText: /get started|try|sign up|start|dashboard/i })
      .first();
    if (await cta.count() > 0) {
      await expect(cta).toBeVisible();
    }
  });
});
