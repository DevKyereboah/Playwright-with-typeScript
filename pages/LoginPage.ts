import {Page} from "@playwright/test"
export default class LoginPage{
    constructor(public page : Page){
    }
    async enterEmail(emailAddress: string){
        await this.page.locator("#input-email").type(emailAddress)
    }
    async enterLoginPassword(LoginPassword : string){
        await this.page.locator("#input-password").type(LoginPassword)
    }
    async clickLoginButton(){
        await this.page.locator("input[value='Login']").click()
    }
}