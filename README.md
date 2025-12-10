# naveenautomationlabs
Following the instruction as provided by the professor for Class Project – Playwright Automation (POM Framework). Me (Milan Shrestha) and my team member Fraulein Joy Sumabat build a POM framework for a naveenautomationlabs.com 

# Naveen Automation Labs Playwright Automation Project
# Project Summary
This project demonstrates end-to-end automated testing of the Naveen Automation Labs website using Playwright with a well-structured Page Object Model (POM) framework. The framework is designed to make tests readable, maintainable, and scalable for web application automation.

# Key highlights:
Automated tests for search functionality, contact form, newsletter subscription, navigation, and UI validation.
Implemented using Node.js and Playwright.
Uses Page Object Model (POM) to separate page locators and functions from test scripts.
Test scripts include data-driven testing using a separate testData.js file.

# Project Structure
naveen-playwright/
├── pages/
│   ├── HomePage.js
│   ├── ContactPage.js
│   ├── NewsletterPage.js
│   └── AboutPage.js
│
├── tests/
│   ├── search.spec.js
│   ├── contact.spec.js
│   ├── newsletter.spec.js
│   ├── navigation.spec.js
│   └── example.spec.js
│
├── utils/
│   ├── testData.js
│   └── helpers.js
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md

# Well-Structured POM Framework
Pages Folder: Contains all page classes with locators and reusable methods.
Tests Folder: Contains test scripts, each focused on a specific feature.
Utils Folder: Contains test data and helper functions for reusable actions.
Benefits of this structure:
Maintainability: If locators change, only the page file needs updating.
Readability: Test scripts are short, focused, and easy to understand.
Reusability: Methods in pages can be reused across multiple test scripts.

# Sample Automated Test Scripts
Search Functionality – Verify that searching for a term returns relevant posts.
Contact Form Submission – Fill out the contact form and verify submission success.
Newsletter Subscription – Subscribe to the newsletter and validate confirmation.
Navigation Links – Verify that top navigation links load correct pages.
UI Element Verification – Check visibility of important sections like header, footer, and banners.

Optional additional scripts: Login, Registration, About Page verification, etc.

# Steps to Execute Tests
Clone the repository:
git clone <repository-url>
cd naveen-playwright

Install dependencies:
npm install

Initialize Playwright (if not done already):
npx playwright install

Run all tests:
npx playwright test

Generate HTML report:
npx playwright show-report

Dependencies
Node.js >= 16
Playwright >= 1.40

NPM packages:
playwright
@playwright/test

Test Data
All test data is centralized in utils/testData.js for easy modification and data-driven testing.

Example:
const testData = {
  searchTerms: ['automation', 'Selenium', 'Playwright'],
  contactForm: {
    name: 'Test User',
    email: 'testuser@example.com',
    subject: 'Testing Contact Form',
    message: 'This is a test message from Playwright'
  },
  newsletterEmail: 'newsletter@example.com'
};

module.exports = testData;

# Team Members
Milan Shrestha
Fraulein Joy Sumabat
