// loginPage.js
/// <reference types="Cypress" />
// Above is a reference to the Cypress library and along with the cypress.json enable IntelliSense for Cypress code
// LoginPage class to represent (Page Object Model) the login page of the application.
class LoginPage {
  // getter to return the element with the ID 'username'.
  get usernameInput() {
    return cy.get("#UserName"); // ID selector
  }

  // getter to return the element with the ID 'password'.
  get passwordInput() {
    return cy.get("#Password"); // ID selector
  }

  // getter to return the element with text 'Manage Users'.
  get manageUsers() {
    return cy.get("a:contains('Manage Users')");
  }

  // getter to return the element with the ID 'loginButton'.
  get loginButton() {
    return cy.get('input[type="submit"][class="btn btn-default"]'); // ID selector
  }

  // method to check if the "Manage Users" text is present in the Manage Users link
  isManageUsers() {
    return this.manageUsers().text().includes("Manage Users");
  }

  // method to log in using the provided username and password
  login(username, password) {
    this.enterUsername(username); // this uses the instance of the class to retrieve the usernameInput method
    this.enterPassword(password); // this uses the instance of the class to retrieve the passwordInput method
    this.clickLoginButton(); // this uses the instance of the class to retrieve the loginButton method
  }

  // method to enter a 'username' value to be typed into the username field.
  enterUsername(username) {
    this.usernameInput.type(username); // type command to enter the username.
  }

  // method to accept a 'password' value to be typed into the password field.
  enterPassword(password) {
    this.passwordInput.type(password); // type command to enter the password.
  }

  // method to trigger a click event on the login button.
  clickLoginButton() {
    this.loginButton.click(); // Click command to click the login button.
  }
}

// Export the LoginPage class to be used in other test files.
export default LoginPage;
