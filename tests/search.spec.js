const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage').default;
const testData = require('../utils/testData').default;

test.describe('Search Tests', () => {
  for (const term of testData.searchTerms) {
    test(`Search for "${term}" returns posts`, async ({ page }) => {
      const home = new HomePage(page);
      await home.goto();
      await home.searchFor(term);

      const posts = page.locator('.post');
      await expect(posts).toHaveCountGreaterThan(0);
    });
  }
});
