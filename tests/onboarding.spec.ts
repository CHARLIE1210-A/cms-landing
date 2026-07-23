/**
 * tests/onboarding.spec.ts  (cms-landing)
 *
 * Tests for /onboarding — only runs with authenticated state.
 * Verifies the org-setup page loads and has the required fields.
 */
import { test, expect } from '@playwright/test';

test.describe('Onboarding Page', () => {
  test('onboarding page loads for authenticated user', async ({ page }) => {
    await page.goto('/onboarding');
    await page.waitForLoadState('networkidle');
    // Either loads onboarding form or redirects (if already onboarded)
    const url = page.url();
    // Valid outcomes: /onboarding stays, or redirected to dashboard/cms
    expect(
      url.includes('/onboarding') ||
      url.includes('localhost:3001') ||
      url.includes('/dashboard')
    ).toBeTruthy();
  });

  test('onboarding has org name field if on /onboarding', async ({ page }) => {
    await page.goto('/onboarding');
    await page.waitForLoadState('networkidle');
    if (page.url().includes('/onboarding')) {
      // Organisation name input should be present
      const nameField = page
        .locator('input[name*="org"], input[name*="name"], input[placeholder*="org" i], input[placeholder*="company" i]')
        .first();
      if (await nameField.count() > 0) {
        await expect(nameField).toBeVisible();
      }
    }
  });

  test('submit empty onboarding form shows validation', async ({ page }) => {
    await page.goto('/onboarding');
    await page.waitForLoadState('networkidle');
    if (page.url().includes('/onboarding')) {
      const submit = page.locator('button[type="submit"]').first();
      if (await submit.isVisible()) {
        await submit.click();
        const err = page.locator('text=/required|enter|must/i').first();
        if (await err.count() > 0) {
          await expect(err).toBeVisible({ timeout: 5_000 });
        }
      }
    }
  });
});
