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
}





