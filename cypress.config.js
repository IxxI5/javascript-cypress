// cypress.config.js
const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://example.com",
    defaultCommandTimeout: 6000,
    video: true,
    screenshotOnRunFailure: true,
    specPattern: "cypress/integration/**/*.spec.js",
    env: {
      eaWebsiteUrl: "http://eaapp.somee.com/",
    },
  },
});
