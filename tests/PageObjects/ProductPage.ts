import { Page,expect } from "@playwright/test";
import { ExcelReader } from "../FileReader/excelFileReader";
import { Item } from "./ItemPage";
export class Product{
    private page: any;
    private appLogo: any;
    private addToCartButton: any;
    private productName: any;
    private excelProduct :any[][]=[];
    private itemObj :Item;
    constructor({page}:{page: any}){
        this.page= page;
        this.appLogo=page.locator('[class="app_logo"]');
        this.productName = page.locator('[class="inventory_item_name"]'); 
        this.itemObj = new Item({page});
        }
    public async selectItem(){
        this.excelProduct = await ExcelReader.readExcel("tests\\TestData\\SauceDemoTestData.xlsx","Sheet1");
        const lastRow = this.excelProduct.length-1;
        for(let i=1 ;i<lastRow;i++){
            if(this.excelProduct[i][3]){
                await this.productName.nth(i-1).waitFor();    
                await this.productName.nth(i-1).click();
                await this.itemObj.clickAddToCartButton();
                await this.itemObj.clickBackButton();
            }
            else{
                
            }
        }
    }
    public async checkVisibiltyOfProductPage(){
        await this.appLogo.waitFor();
        await expect(this.appLogo).toBeVisible();
    }
  
}