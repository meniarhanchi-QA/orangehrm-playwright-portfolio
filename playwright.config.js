// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  /* 1. We set workers to 1 to ensure stability on the OrangeHRM demo site */
  /* This prevents the site from slowing down or timing out due to multiple users */
  workers: 1, 

  /* 2. Maximum time one test can run for (30 seconds) */
  timeout: 30 * 1000,

  /* 3. Global expectation timeout (5 seconds) */
  expect: {
    timeout: 5000,
  },

  /* 4. Reporter generates a nice folder called 'playwright-report' */
  reporter: 'html',

  /* 5. Shared settings for all browsers */
  use: {
    /* Base URL could be set here to shorten page.goto() calls later */
    // baseURL: 'https://opensource-demo.orangehrmlive.com/',

    /* Collect trace only when a test fails on the first try */
    trace: 'on-first-retry',
    
    /* Take a screenshot only on failure to help with debugging */
    screenshot: 'only-on-failure',
  },

  /* 6. Configure the browsers we want to test against */
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