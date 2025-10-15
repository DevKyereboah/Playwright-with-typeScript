import {Page} from "@playwright/test"
import { expect, test } from "@playwright/test"
export default class HomePage{
    constructor(public page : Page){
    }
    async clickSpecialHotMenu(){
        await this.page.locator("ul[class='navbar-nav horizontal'] a[class='icon-left both nav-link active']")
        .click()
    }
}