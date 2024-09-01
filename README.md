# Testing with JavaScript Cypress

Author: IxxI5

### Description

This repository showcases examples of website testing using Cypress, both with and without the Page Object Model.

### Prerequisites

- **VS Code** is installed or download it from: https://code.visualstudio.com/

- **Node JS** is installed or download the latest version from: https://nodejs.org/en

### Launch a Test

After downloading the javascript-cypress repository, follow these steps:

- **Unzip** the downloaded file.
- **Open** VS Code Terminal
- **Install Dependencies** through VS Code Terminal:

  ```javascript
  // install the dependencies
  npm install
  ```

- **Run a Test in Headless Mode (without a browser)**

  ```javascript
  // run only a specific test file
  npx cypress run --spec "cypress/integration/ea_website_tests.spec.js"

  // or

  // runs all tests under the integration folder
  npx cypress run
  ```

- **Run a Test in Headful Mode (with Chrome as browser)**

  ```javascript
  // run only a specific test file
  npx cypress run --spec "cypress/integration/ea_website_tests.spec.js" --browser chrome --headed

  // or

  // runs all tests under the integration folder
  npx cypress run --browser chrome --headed
  ```

### Create a Cypress Project Step by Step

- **Execute** the following npm command in VS Code Terminal:

  ```javascript
  mkdir cypress-project                   // create the cypress-project directory

  cd cypress-project                      // go to directory cypress-project

  npm init -y                             // initialize a new node.js project (package.json)

  npm install cypress --save-dev          // install cypress as dev dependency

  npx cypress open                        // opens Cypress for the first time to generate the
                                          // necessary files
  ```

- **Cypress UI**

  On loaded Cypress UI, select E2E (End to End) Test

- **Configure** the **cypress.json**

  If the **cypress.json** file is missing, please create it in the **/cypress-project/cypress** directory having the following content:

  ```javascript
  {
    "compilerOptions": {
        "allowJs": true,
        "baseUrl": "../node_modules",
        "types": ["cypress"]
    },
    "include": ["**/*.*"]
  }
  ```

- **Check** the **package.json**

  ```javascript
  {
    "name": "cypress-project",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "MIT",
    "description": "",
    "devDependencies": {
        "cypress": "^13.14.1"
    }
  }
  ```

- **Create a Test File**
  In the cypress directory, create the **integration/myTest.spec.js** file (create the integration directory if it does not exist):

  ```javascript
  // cypress/integration/myTest.spec.js
  /// <reference types="Cypress" />

  describe("Sample Test", () => {
    it("visits example.com and checks title", () => {
      cy.visit("https://example.com");
      cy.title().should("include", "Example Domain");
    });
  });
  ```

- **Run a Test in Headless Mode (without a browser)**

  ```javascript
  npx cypress run --spec "cypress/integration/myTest.spec.js"
  ```

- **Run a Test in Headful Mode (with Chrome as browser)**

  ```javascript
  npx cypress run --spec "cypress/integration/myTest.spec.js" --browser chrome --headed
  ```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
