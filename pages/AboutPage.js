class AboutPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://naveenautomationlabs.com/opencart/index.php?route=information/about';

    // Locators
    this.heading = page.locator('#content h1');
    this.content = page.locator('#content');
    this.breadcrumb = page.locator('.breadcrumb');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async getHeading() {
    return this.heading.textContent();
  }

  async getPageContent() {
    return this.content.textContent();
  }

  async breadcrumbExists() {
    return await this.breadcrumb.isVisible();
  }
}

export default AboutPage;
