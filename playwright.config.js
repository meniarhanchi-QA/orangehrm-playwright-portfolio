const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // Logic: Retry twice on GitHub if it fails
  workers: process.env.CI ? 1 : undefined, // Logic: Run 1 by 1 on GitHub to avoid overloading the demo site
  
  // The Stability Fixes you just added
  timeout: 60000, 
  expect: {
    timeout: 10000, 
  },

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    trace: 'on-first-retry', // Logic: Records a "Video/Trace" only if the test fails
    navigationTimeout: 45000,
    actionTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});