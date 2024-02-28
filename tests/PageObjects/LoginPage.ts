import { expect } from "@playwright/test";
export class Login{
    private page
    private usernameTextbox: any;
    private passwordTextbox : any;
    private loginButton: any;
    private errorMsg: any
    constructor({page}:{page: any}){
        this.page= page;
        this.usernameTextbox = page.getByPlaceholder("Username");
        this.passwordTextbox = page.getByPlaceholder("Password");
        this.loginButton = page.locator('[id="login-button"]');
        this.errorMsg = page.locator('[data-test="error"]')
    }
    public async enterUsername(username: string){
        await this.usernameTextbox.waitFor(); // Wait until DOMContentLoaded event fires
        await this.usernameTextbox.fill(username);
    }
    public async enterPasword(password: string){
        await this.passwordTextbox.waitFor(); // Wait until DOMContentLoaded event fires
        await this.passwordTextbox.fill(password);
    }
    public async clickLoginButton(){
        await  await this.loginButton.waitFor(); // Wait until DOMContentLoaded event fires
        await this.loginButton.click();
    }
    public async isVisibleErrorMsgForInvalidLogin(){
        await this.errorMsg.waitFor();
        await expect(this.errorMsg).toBeVisible();  
    }
}