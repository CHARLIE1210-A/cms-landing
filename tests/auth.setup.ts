/**
 * tests/auth.setup.ts  (cms-landing)
 *
 * Logs in via the landing login form and saves the authenticated
 * cookie state to tests/.auth/user.json for reuse across all projects.
 */
import { test as setup, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const AUTH_FILE = 'tests/.auth/user.json';
const EMAIL = process.env.TEST_USER_EMAIL!;
const PASSWORD = process.env.TEST_USER_PASSWORD!;

setup('authenticate via landing login', async ({ page }) => {
  const dir = path.dirname(AUTH_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await page.goto('/login');
  await expect(page.locator('#email')).toBeVisible({ timeout: 15_000 });

  await page.fill('#email', EMAIL);
  await page.fill('#password', PASSWORD);

  // Wait for success redirect (to /onboarding or cms dashboard)
  await page.click('button[type="submit"]');

  // After login the app redirects somewhere — just wait for navigation
  await page.waitForNavigation({ timeout: 30_000 }).catch(() => {
    // Some navigations may not trigger waitForNavigation (e.g., JS replace)
  });

  await page.waitForTimeout(2_000); // Let the session settle

  await page.context().storageState({ path: AUTH_FILE });
  console.log('✅ Landing auth state saved to', AUTH_FILE);
});
