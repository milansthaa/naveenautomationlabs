const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage').default;
const testData = require('../utils/testData').default;

test('Subscribe to newsletter', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.subscribeNewsletter(testData.newsletterEmail);

  const alert = page.locator('.alert-success');
  await expect(alert).toBeVisible();
});
