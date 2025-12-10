class NewsletterPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter';

    // Locators
    this.subscribeYes = page.locator('input[name="newsletter"][value="1"]');
    this.subscribeNo = page.locator('input[name="newsletter"][value="0"]');
    this.continueBtn = page.locator('input[type="submit"][value="Continue"]');
    this.successMessage = page.locator('.alert-success');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async subscribe() {
    await this.subscribeYes.check();
    await this.continueBtn.click();
  }

  async unsubscribe() {
    await this.subscribeNo.check();
    await this.continueBtn.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

export default NewsletterPage;
