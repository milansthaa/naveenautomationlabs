const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage').default;

test('Navigate to Contact page from Home', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.goToContactPage();

  await expect(page).toHaveURL(/contact/);
});
