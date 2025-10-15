import {Page} from "@playwright/test"
export default class SpecialHotPage{
    constructor(public page: Page){
    }
    async hoverMegaMenu(){
         const headerMenu = this.page.locator("a[title='Apple']")
        await Promise.all([
            await headerMenu.waitFor({state: "visible"}),
            await this.page.locator("//span[normalize-space()='Mega Menu']").hover()
        ])
    }
    async hoverIpodTouch(){
        await this.page.locator("div[class='carousel-item active'] img[title='iPod Touch']").hover()
    }
    async addIpodTouchCart(){
        await this.page.locator("(//i[@class='fas fa-shopping-cart'])[1]").click()
    }

    async FrameIsToastVisible(){
        const allframes = this.page.frames();
        console.log("total frame" + allframes)
        const frame1 = this.page.frameLocator("#jam-coms-9187fa94-17b9-41e0-85be-8c17d1f2975e")
        const toast = this.page.locator("//a[.='View Cart']")
        await toast.waitFor({state:"visible"})
        return toast;
    }

}