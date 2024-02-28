export class Cart{
    private page : any;
    private checkoutButton: any;
    private continueShoppingButton: any;
    constructor({page}:{page:any}) {
        this.page =page;
        this.checkoutButton=page.locator('[class="btn_action checkout_button"]');
        this.continueShoppingButton=page.locator('[class="btn_secondary"]');
    }
    public async clickCheckout(){ 
        await this.checkoutButton.waitFor();
        await this.checkoutButton.click();
    };
    public async clickContinueShopping(){ 
        await this.continueShoppingButton.waitFor();
        await this.continueShoppingButton.click();
    };
}