// loginPage.js
/// <reference types="Cypress" />
// Above is a reference to the Cypress library and along with the cypress.json enable IntelliSense for Cypress code
// LoginPage class to represent (Page Object Model) the login page of the application.
class LoginPage {
  // Getter to return a Cypress chainable object that targets the element with the ID 'username'.
  get usernameInput() {
    return cy.get("#UserName"); // ID selector
  }

  // Getter to return a Cypress chainable object that targets the element with the ID 'password'.
  get passwordInput() {
    return cy.get("#Password"); // ID selector
  }

  // Getter to return a Cypress chainable object that targets the element with the ID 'loginButton'.
  get loginButton() {
    return cy.get('input[type="submit"][class="btn btn-default"]'); // ID selector
  }

  // Method to log in using the provided username and password
  login(username, password) {
    this.enterUsername(username); // this uses the instance of the class to retrieve the usernameInput method
    this.enterPassword(password); // this uses the instance of the class to retrieve the passwordInput method
    this.clickLoginButton(); // this uses the instance of the class to retrieve the loginButton method
  }

  // Method to accept a 'username' parameter, which is the value to be typed into the username field.
  enterUsername(username) {
    this.usernameInput.type(username); // Type command to enter the username.
  }

  // Method to accept a 'password' parameter, which is the value to be typed into the password field.
  enterPassword(password) {
    this.passwordInput.type(password); // Type command to enter the password.
  }

  // Method to trigger a click event on the login button.
  clickLoginButton() {
    this.loginButton.click(); // Click command to click the login button.
  }
}

// Export the LoginPage class as the default export of this module to be imported and used in other test files.
export default LoginPage;
