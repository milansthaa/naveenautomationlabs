const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage').default;
const ContactPage = require('../pages/ContactPage').default;
const testData = require('../utils/testData').default;

test('Submit contact form', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.goToContactPage();

  const contact = new ContactPage(page);
  await contact.fillContactForm(testData.contactForm);
  await contact.submit();

  await expect(contact.successAlert).toBeVisible();
});
