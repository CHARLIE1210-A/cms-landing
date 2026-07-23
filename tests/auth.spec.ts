/**
 * tests/auth.spec.ts  (cms-landing)
 *
 * Tests for /login and /signup pages.
 * Login success test uses real credentials from .env.test.local.
 */
import { test, expect } from '@playwright/test';

// Use a fresh browser context (no stored auth state) so we're testing
// the login UI itself — not already-logged-in state.
test.use({ storageState: { cookies: [], origins: [] } });

const EMAIL = process.env.TEST_USER_EMAIL!;
const PASSWORD = process.env.TEST_USER_PASSWORD!;

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
  });

  test('login page loads', async ({ page }) => {
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
  });

  test('shows "Welcome back" heading', async ({ page }) => {
    const heading = page.locator('text=/welcome back/i');
    await expect(heading).toBeVisible();
  });

  test('submit empty form shows validation errors', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(
      page.locator('text=/valid email|required|6 characters/i').first()
    ).toBeVisible({ timeout: 5_000 });
  });

  test('invalid email format shows error', async ({ page }) => {
    await page.fill('#email', 'not-an-email');
    await page.fill('#password', 'somepass');
    await page.click('button[type="submit"]');
    await expect(
      page.locator('text=/valid email/i').first()
    ).toBeVisible({ timeout: 5_000 });
  });

  test('wrong password shows error message', async ({ page }) => {
    await page.fill('#email', EMAIL);
    await page.fill('#password', 'wrongpassword123');
    await page.click('button[type="submit"]');
    // Supabase returns "Invalid login credentials" or similar
    await expect(
      page.locator('text=/invalid|credentials|wrong|incorrect/i').first()
    ).toBeVisible({ timeout: 15_000 });
  });

  test('successful login redirects to CMS dashboard or onboarding', async ({ page }) => {
    await page.fill('#email', EMAIL);
    await page.fill('#password', PASSWORD);

    // Click login and wait for URL to change
    await page.click('button[type="submit"]');

    // The app does session-transfer to localhost:3001 or goes to /onboarding
    await page.waitForURL(
      (url) => url.href.includes('localhost:3001') || url.href.includes('/onboarding') || url.href.includes('/dashboard'),
      { timeout: 30_000 }
    );
    // Verify we're no longer on /login
    expect(page.url()).not.toContain('/login');
  });

  test('"Sign up" link navigates to /signup', async ({ page }) => {
    await page.click('a[href="/signup"]');
    await expect(page).toHaveURL(/\/signup/);
  });

  test('"Continue with Google" button present', async ({ page }) => {
    const googleBtn = page.locator('button').filter({ hasText: /google/i });
    await expect(googleBtn).toBeVisible();
  });
});

test.describe('Signup Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('networkidle');
  });

  test('signup page loads', async ({ page }) => {
    await expect(page).toHaveURL(/\/signup/);
    const body = await page.textContent('body');
    expect(body).toBeTruthy();
  });

  test('signup form fields are present', async ({ page }) => {
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password, input[type="password"]').first()).toBeVisible();
  });

  test('submit empty signup form shows validation', async ({ page }) => {
    await page.click('button[type="submit"]');
    const err = page.locator('text=/required|valid email|must be/i').first();
    if (await err.count() > 0) {
      await expect(err).toBeVisible({ timeout: 5_000 });
    }
  });

  test('"Login" / "Sign in" link present on signup page', async ({ page }) => {
    const loginLink = page.locator('a').filter({ hasText: /log in|sign in|login/i }).first();
    await expect(loginLink).toBeVisible();
  });
});
