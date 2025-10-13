import {Page} from "@playwright/test"
export default class SpecialHotPage{
    constructor(public page: Page){
    }
    async hoverMegaMenu(){
        await this.page.locator("//span[normalize-space()='Mega Menu']").hover()
    }
    async clickApple(){
        await this.page.locator("a[title='Apple']").click()
    }
    async hoverIpodTouch(){
        await this.page.locator("div[class='carousel-item active'] img[title='iPod Touch']").hover()
    }
    async addIpodTouchCart(){
        await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]").click()
    }

    async isToastVisible(){
        const toast = this.page.locator("//a[.='View Cart']")
        await toast.waitFor({state:"visible"})
        return toast;
    }

}