![swagLabs](https://www.pagerduty.com/wp-content/uploads/2020/01/010101_LOGO_Sauce-Labs_Horiz_Red-Grey_RGB.png)
 
## Sauce Labs Test Automation Framework
 
 
![image](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=yellow)    ![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
)   ![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
)  ![pom](https://img.shields.io/badge/POM-48B9C7?style=for-the-badge&logo=pkgsrc&logoColor=white)
 
### 🤖 Overview
This repository contains a suite of automated tests that validate the functionality and user experience of the Sauce Demo application. The tests are written using Playwright, an end-to-end testing framework that supports multiple browsers and platforms.
***
### 📁 Folder Structure
```
 tests/
 
   TestData/
     Credentials.json
     SauceDemoTestData.xlsx
 
    PageObjects/
      CartPage.ts
      CheckoutPage.ts
      CheckoutOverview.ts
      General.ts
      ItemPage.ts
      LoginPage.ts
      ProductPage.ts

    SpecFile/
      login.spec.ts
      e2e.spec.ts
 
    FileReader/
        excelFileReader.ts
```
 
***
### 📜 PagesObjects
- **LoginPage.ts**: This file perform the login functionality for SauceDemo website.  It contains methods to enter username and password, login button.
Description: Each field have different method to perform its functionality. These methods are used in test cases to interact with Dom element in Login Page.


- **ProductPage**: This page have the locator and require function to perform any action based on testdata input. This page have list of all product where user can select the product and proceed.

- **ItemPage**: Whenever any product is selected a Item Page will be open where it have the option to add to cart that product or move back. Hence this page have all DOM element and method to interact with website during test execution.
 
- **Checkoutpage.ts**: This field contains the loactor of each user detail required to perform checkout operations. It will open after the Cart page.
 
- **CheckoutOverviewPage.ts**: This give the complete summary of all order which is going to placed. So it has all required DOM element and methods.

- **CartPage**: This  page object contains all the methods and properties related to product which is added to cart.

- **General**: This  class contains common methods which can be used across all the page objects. It includes methods to get the Cart Page,Menu Bar etc.

 
****
### 🧰 FileReader
- **excelFileReader.ts**: This file is used to read the excel data and  return it as 2D for further use in test. This method takes file name and Sheet name as input parameter to perform any read operation during test execution.
 

***
 
### 🔨 Tests
- **login.spec.ts**: Contains test cases related to the login page functionality, ensuring successful login with valid credentials only. Also this contain other test case which check the login functionality for invalid cradentials
 
- **e2e.spec.ts**: This testcase represent the end user action how he/she place the order. This have two test case one is for succesfull order placemengt and another is cancelled checkout process.
 
***
 
 
 
## 💻 Technologies Used
- **🎭 Playwright**: Automation library for web applications.
- **![JavaScript Icon](https://img.icons8.com/color/24/000000/javascript--v1.png) JavaScript**: Programming language used for scripting.
- **![Ts Icon](https://img.icons8.com/color/24/000000/typescript--v1.png) Typescript** : Markup language for creating web pages.
- **![Allure Icon](https://img.icons8.com/ios/18/000000/test-tube.png) Allure Report**: Test report generation tool.
 
***
 
## ✔ Installation
 
```bash
   git clone https://github.com/sudeepshukla930/swags_labs_playwright/
```
 
install dependencies
 
```bash
   npm install
```
 
## 🚀 Usage
 
###  Running Tests
 
- **Login through Chrome:**
 
```
npm run loginOnChrome
 
```
 

- **Run all Testcases:**
 
```
npm run testcases
 
```


 
 
## 📈 Reports
 
- **HTML Report**
 
```
npm run htmlReport
 
```
 
- **Allure Report**
 
```
npm run allure
 
```
 
- **nyc generate**
 
```
npm run test:coverage
 
```
 
***
 
## 📌 Keypoints:
 
- Tests are written using Playwright and TypeScript, providing a robust and maintainable test suite.
 
- Data-driven testing is implemented using JSON and Excel data files, allowing for flexibility and scalability in test data management.
 
- Page Object Model (POM) is followed for better code organization and maintainability, enhancing test readability and reusability.
 
- Detailed test reports are generated using Allure, providing comprehensive insights into test execution.
 
- Code coverage reports are generated using NYC and Istanbul, ensuring code quality and test coverage.
 
*******************************
********************