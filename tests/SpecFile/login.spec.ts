import {test, expect,type Page} from '@playwright/test'
import { General } from '../PageObjects/General'
import { Login } from '../PageObjects/LoginPage';
import { Product } from '../PageObjects/ProductPage';
import {invalidCredentials} from '../TestData/Credentials.json'
import {validCredentials} from '../TestData/Credentials.json'
import { Logger } from '../../logger';
test.describe("SauceDemo Login Functionality Testing", async()=>{
    let page: Page;
    let generalObj: General;
    let loginObj : Login;
    let productPageObj: Product;
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        generalObj= new General({page});
        loginObj = new  Login({page});
        productPageObj= new Product({page});
    });
    test.beforeEach(async ()=>{
        generalObj.openURL();//this will opens the saucedemo website
    })
    test('Valid Login Test Data', async()=>{
        for(let i =0 ; i<validCredentials.length; i++){
            await loginObj.enterUsername(validCredentials[i].username);
            await loginObj.enterPasword(validCredentials[i].password);
            await loginObj.clickLoginButton();
            await Logger.info("Succesfull Login");
            await generalObj.clickCartButton();
            await productPageObj.checkVisibiltyOfProductPage();
            await generalObj.openMenu();
            await generalObj.selectMenuOptions("Logout");
        }   
    });
    test('Invalid Login Test Data', async()=>{
        for(let i =0 ; i<invalidCredentials.length; i++){
            await loginObj.enterUsername(invalidCredentials[i].username);
            await loginObj.enterPasword(invalidCredentials[i].password);
            await loginObj.clickLoginButton();
            await loginObj.isVisibleErrorMsgForInvalidLogin();
            await Logger.info("Error Message for Invalid Credential is displayed");
        }
    });
})