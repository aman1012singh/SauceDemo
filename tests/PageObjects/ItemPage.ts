export class Item{
    private page : any;
    private backButton: any;
    private addToCartButton: any;
    constructor({page}:{page:any}) {
        this.page =page;
        this.backButton=page.locator('[class="inventory_details_back_button"]');
        this.addToCartButton=page.locator('[class="btn_primary btn_inventory"]');
    }
    public async clickBackButton(){
        await this.backButton.waitFor();
        await this.backButton.click(); 
    };
    public async clickAddToCartButton(){
        await this.addToCartButton.waitFor();
        await this.addToCartButton.click(); 
    };
}