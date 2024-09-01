// cypress\integration\ea_website_tests.spec.js
/// <reference types="Cypress" />
// Above is a reference to the Cypress library and along with the cypress.json enable Intellisense for Cypress code
// EA Website Tests

import LoginPage from "../support/pages/loginPage";

describe("EA Website Tests", () => {
  // Runs before each test
  // Arrange
  beforeEach(() => {
    cy.visit("http://eaapp.somee.com/");
    cy.viewport(1920, 1080); // sets the viewport to 1920x1080 pixels (1080p)
  });

  it("Test1 - Login Test (without Page Object Model)", () => {
    // Act
    cy.get("#loginLink", { timeout: 5000 }).click();
    cy.get('input[name="UserName"]').type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn-default").click();

    // Assert
    cy.contains("a", "Log off").should("contain.text", "Log off");
    cy.log("Test1 completed");
  });

  it("Test2 - Dropdown Test (without Page Object Model)", () => {
    // Act
    cy.get("#loginLink").click();
    cy.get('input[name="UserName"]').type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn-default").click();
    cy.get('a:contains("Manage Users")').click();
    cy.contains("td", "guest")
      .parent("tr") // find the row with 'guest'
      .find("#RoleName") // find the dropdown within that row
      .select("Administrator"); // select the 'Administrator' option
    cy.contains("td", "guest") // verify the selected option
      .parent("tr") // Find the row again
      .find("#RoleName") // find the dropdown within that row
      // Assert
      .should("have.value", "Administrator"); // verify that 'Administrator' is selected
    cy.log("Test2 completed");
  });

  it("Test3 - Login Test (with Page Object Model)", () => {
    cy.get("#loginLink").click();

    const loginPage = new LoginPage();
    loginPage.login("admin", "password");

    cy.log("Test3 completed");
  });

  // Runs after each test
  afterEach(() => {
    cy.wait(3000);
  });
});
