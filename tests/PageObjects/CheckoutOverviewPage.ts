import {expect} from '@playwright/test'
export class CheckoutOverview{
    private page : any;
    private finishButton: any;
    private cancelButton: any;
    private thankyouMsg: any;
    constructor({page}:{page:any}) {
        this.page =page;
        this.cancelButton=page.locator('[class="cart_cancel_link btn_secondary"]');
        this.finishButton= page.locator('[class="btn_action cart_button"]');
        this.thankyouMsg = page.locator('[class="complete-header"]');
    }
    public async clickFinishButton(){ 
        await this.finishButton.waitFor();
        await this.finishButton.click();
    };
    public async clickCancelButton(){ 
        await this.cancelButton.waitFor();
        await this.cancelButton.click();
    };
    public async isThankYouMessageDisplayed() {
        await this.thankyouMsg.waitFor();
        await expect(this.thankyouMsg).toBeVisible();
    }
    public async isFinishButtonVisible(){
        await this.finishButton.waitFor();
        await expect(this.finishButton).toBeVisible();
    }  
}