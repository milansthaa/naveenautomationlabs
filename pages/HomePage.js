// pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="s"]');
    this.searchButton = page.locator('button.search-submit');
    this.cookieBanner = page.locator('#cookie_action_close_header');
    this.contactLink = page.locator('a:has-text("Contact")');
    this.newsletterInput = page.locator('#newsletter_email');
    this.newsletterButton = page.locator('button#subscribe');
  }

  async goto() {
    await this.page.goto('https://naveenautomationlabs.com/', { waitUntil: 'load' });

    if (await this.cookieBanner.count() > 0) {
      await this.cookieBanner.click();
    }

    await this.searchInput.waitFor({ state: 'visible', timeout: 20000 });
  }

  async searchFor(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
    await this.page.waitForSelector('.post', { timeout: 20000 });
  }

  async goToContactPage() {
    await this.contactLink.click();
    await this.page.waitForSelector('form#contact-form');
  }

  async subscribeNewsletter(email) {
    await this.newsletterInput.fill(email);
    await this.newsletterButton.click();
    await this.page.waitForSelector('.alert-success');
  }
}

export default HomePage;
