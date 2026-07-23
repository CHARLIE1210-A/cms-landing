import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'],
  ],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  projects: [
    // ── Auth setup (runs first) ───────────────────────────────────────────
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // ── Desktop Browsers (authenticated routes) ───────────────────────────
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',           // Safari engine (macOS + iOS rendering)
      use: {
        ...devices['Desktop Safari'],
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // ── Mobile Browsers (authenticated) ──────────────────────────────────
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 14'],
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // ── Tablet ────────────────────────────────────────────────────────────
    {
      name: 'Tablet Landscape',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 768 },
        storageState: 'tests/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // ── Landing page tests — NO auth (public pages) ───────────────────────
    {
      name: 'landing-public',
      testMatch: /landing\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'landing-public-webkit',
      testMatch: /landing\.spec\.ts/,
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'landing-public-mobile',
      testMatch: /landing\.spec\.ts/,
      use: { ...devices['iPhone 14'] },
    },
  ],

  // Dev server (npm run dev) must be running on port 3000 before running tests.
  // Run: npm run dev  in a separate terminal before running: npm test

});
