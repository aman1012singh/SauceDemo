import {baseUrl} from '../TestData/Credentials.json'
export class General{
    private url : any;
    private page : any;
    private cartButton: any;
    private menuButton:any;
    private menuOptions: any;
    constructor({page}:{page:any}) {
        this.page =page;
        this.url= baseUrl.url;
        this.cartButton = page.locator('[role="img"]');
        this.menuButton=page.getByText('Open Menu');
        this.menuOptions=page.locator('[class="bm-item menu-item"]');
    }
    public async openURL(){
        await this.page.waitForLoadState('networkidle');
        await this.page.goto(this.url);  
    };
    public async clickCartButton(){
        await  await this.page.waitForLoadState('domcontentloaded'); // Wait until DOMContentLoaded event fires
        await this.cartButton.click();
    };
    public async openMenu(){
        await this.menuButton.waitFor();
        await this.menuButton.click();
    }
    public async selectMenuOptions(option:string){
        await this.page.waitForLoadState('domcontentloaded'); // Wait until DOMContentLoaded event fires
        const numberOfOptions = await this.menuOptions.count();
        for(let i=0; i< numberOfOptions;i++){
            await this.menuOptions.nth(i).waitFor();
            const element = await this.menuOptions.nth(i);
            const elementText = await element.textContent();
            if(elementText===option){
                await element.waitFor();
                await element.click();
                break;
            }
            else{
                
            }
           
        }
        
    }

}