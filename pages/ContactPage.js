// pages/ContactPage.js
class ContactPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#wpforms-123-field_0');
    this.emailInput = page.locator('#wpforms-123-field_1');
    this.subjectInput = page.locator('#wpforms-123-field_2');
    this.messageInput = page.locator('#wpforms-123-field_3');
    this.submitButton = page.locator('button[type="submit"]');
    this.successAlert = page.locator('.wpforms-confirmation-container');
  }

  async fillContactForm(data) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  async submit() {
    await this.submitButton.click();
    await this.successAlert.waitFor({ state: 'visible', timeout: 20000 });
  }
}

export default ContactPage;
