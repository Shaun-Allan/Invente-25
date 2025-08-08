import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3005',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: [
    {
      command: 'docker ps | grep nextjs-app || docker start nextjs-app',
      port: 3005,
      reuseExistingServer: true,
      timeout: 30000,
    },
    {
      command: 'docker ps | grep strapi-app || docker start strapi-app',
      port: 1338,
      reuseExistingServer: true,
      timeout: 30000,
    }
  ],
});