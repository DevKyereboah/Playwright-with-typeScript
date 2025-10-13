import { Page } from "@playwright/test";
import {test,expect} from "@playwright/test";
export default class RegisterPage{
  constructor(public page: Page){
  }
  async enterFirstName(firstname: string){
    await this.page.locator("//input[@id='input-firstname']").type(firstname);
  }
  async enterLastname(lastname: string){
    await this.page.locator("#input-lastname").type(lastname)
  }
  async enterEmail(email: string){
    await this.page.locator("#input-email").type(email)
  }
  async enterTelephone(telephone: string){
    await this.page.locator("#input-telephone").type(telephone)
  }
  async enterPassword(password : string){
    await this.page.locator("#input-password").type(password)
  }
  async confirmPassword(password: string){
    await this.page.locator("#input-confirm").type(password)
  }
  async isSubscribeChecked(){
    return await this.page.locator("label[for='input-newsletter-yes']").isChecked()
  }
  async clickTermCondition(){
    return await this.page.locator("label[for='input-agree']").check()
  }
  async clickContinueToRegister(){
    await Promise.all([
      this.page.waitForNavigation({waitUntil:"networkidle"}),
      this.page.locator("input[value='Continue']").click()
    ]) 
  }

}





