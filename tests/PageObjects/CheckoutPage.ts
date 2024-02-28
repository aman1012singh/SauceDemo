import {expect} from '@playwright/test'
export class Checkout{
    private page : any;
    private firstNameTextbox : any;
    private lastNameTextbox : any;
    private zipCodeTextbox : any;
    private continueButton: any;
    private cancelButton: any;
    private checkoutPageHeader: any; 
    constructor({page}:{page:any}) {
        this.page =page;
        this.firstNameTextbox=page.getByPlaceholder('First Name');
        this.lastNameTextbox = page.getByPlaceholder('Last Name');
        this.zipCodeTextbox = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton=page.locator('[class="btn_primary cart_button"]');
        this.cancelButton= page.locator('[class="cart_cancel_link btn_secondary"]');
        this.checkoutPageHeader = page.locator('[class="subheader"]');
    }
    public async enterFirstName(firstName:string){ 
        await this.firstNameTextbox.waitFor();
        await this.firstNameTextbox.fill(firstName);
    };
    public async enterLastName(lastName:string){ 
        await this.lastNameTextbox.waitFor();
        await this.lastNameTextbox.fill(lastName);

    };
    public async enterZipCode(zipcode:string){ 
        await this.zipCodeTextbox.waitFor();
        await this.zipCodeTextbox.fill(zipcode);
    };
    public async clickContinueButton(){ 
        await this.continueButton.waitFor();
        await this.continueButton.click();
    };
    public async clickCancelButton(){ 
        await this.cancelButton.waitFor();
        await this.cancelButton.click();
    };
    public async isCheckoutPageVisible(){
        await this.checkoutPageHeader.waitFor();
        await  expect(this.checkoutPageHeader).toBeVisible()
    }
}