import {Page} from "@playwright/test"
export default class LoginPage{
    constructor(public page : Page){
    }
    async login(email: string, password: string){
      await this.enterEmail(email)
      await this.enterLoginPassword(password)
      await this.clickLoginButton()
    }
    async enterEmail(emailAddress: string){
        await this.page.locator("#input-email").type(emailAddress)
    }
    async enterLoginPassword(LoginPassword : string){
        await this.page.locator("#input-password").type(LoginPassword)
    }
    async clickLoginButton(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("input[value='Login']")
        ])
        }
}