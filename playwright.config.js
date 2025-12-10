// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  testDir: './tests',
});
