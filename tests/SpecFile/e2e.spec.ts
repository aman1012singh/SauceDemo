import {test, expect,type Page} from '@playwright/test'
import { General } from '../PageObjects/General'
import { Login } from '../PageObjects/LoginPage';
import { Product } from '../PageObjects/ProductPage';
import { Cart } from '../PageObjects/CartPage';
import { Checkout } from '../PageObjects/CheckoutPage';
import { CheckoutOverview } from '../PageObjects/CheckoutOverviewPage';
import {validCredentials} from '../TestData/Credentials.json';
import { ExcelReader } from '../FileReader/excelFileReader';
import { Logger } from '../../logger';
test.describe("SauceDemo E2E Testing", async()=>{
    let page: Page;
    let generalObj: General;
    let loginObj : Login;
    let productPageObj: Product;
    let cartObj: Cart;
    let checkoutObj: Checkout;
    let checkoutOverviewObj: CheckoutOverview;
    let excelProduct :any[][]=[];
    let excelCheckout: any[][]=[];
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        generalObj= new General({page});
        loginObj = new  Login({page});
        productPageObj= new Product({page});
        cartObj= new Cart({page});
        checkoutObj= new Checkout({page});
        checkoutOverviewObj= new CheckoutOverview({page});
        excelProduct = await ExcelReader.readExcel("tests\\TestData\\SauceDemoTestData.xlsx","Sheet1");
        excelCheckout = await ExcelReader.readExcel("tests\\TestData\\SauceDemoTestData.xlsx","Sheet2"); 
    });
    test.beforeEach(async ()=>{
        generalObj.openURL();//this will opens the saucedemo website
        await loginObj.enterUsername(validCredentials[0].username);
        await loginObj.enterPasword(validCredentials[0].password);
        await loginObj.clickLoginButton();
    })
    test('E2E:- Login To Successfull Checkout', async()=>{
        await productPageObj.selectItem();
        await Logger.info("Item Selected");
        await generalObj.clickCartButton();
        await cartObj.clickCheckout();
        await checkoutObj.isCheckoutPageVisible();
        await checkoutObj.enterFirstName(excelCheckout[1][0]);
        await checkoutObj.enterLastName(excelCheckout[1][1]);
        await checkoutObj.enterZipCode(excelCheckout[1][2].toString());
        await checkoutObj.clickContinueButton();
        await checkoutOverviewObj.isFinishButtonVisible();
        await checkoutOverviewObj.clickFinishButton();
        await checkoutOverviewObj.isThankYouMessageDisplayed();
        await Logger.info("Succesfull order placed");
    });
    test('E2E:- Login To Cancelled Checkout', async()=>{
        await productPageObj.selectItem();
        await Logger.info("Item Selected");
        await generalObj.clickCartButton();
        await cartObj.clickCheckout();
        await checkoutObj.isCheckoutPageVisible();
        await checkoutObj.enterFirstName(excelCheckout[1][0]);
        await checkoutObj.enterLastName(excelCheckout[1][1]);
        await checkoutObj.enterZipCode(excelCheckout[1][2].toString());
        await checkoutObj.clickContinueButton();
        await checkoutOverviewObj.isFinishButtonVisible();
        await checkoutOverviewObj.clickCancelButton();
        await productPageObj.checkVisibiltyOfProductPage();
        await Logger.info("Checkout is cancelled");
    });
})