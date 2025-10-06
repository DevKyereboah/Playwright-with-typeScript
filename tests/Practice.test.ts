import {test, expect} from "@playwright/test"
import { time } from "console";
test("practice test", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-exceptions/")

    //Test case 1: NoSuchElementException
    await page.locator("#add_btn").click();
    const rowTwoDispayed = page.locator(".input-field").first()
    await page.waitForTimeout(3000);
    expect(rowTwoDispayed).toBeVisible();
})
test("second row", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-exceptions/")

    //Test case 2: ElementNotInteractableException
    await page.locator("#add_btn").click();
    await page.waitForTimeout(3000);
    const rowTwo = page.locator(".input-field")
    await rowTwo.nth(1).fill("Beans");
    await page.locator("[name='Save']").nth(1).click()
    const saveButtonStatus = page.locator("[name='Edit']").nth(1)
    expect(saveButtonStatus).toHaveText('Edit')
})
test("clearing input field", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-exceptions/")

    //Test case 3: InvalidElementStateException
    const saveButtonStatus = page.locator("[name='Edit']").nth(1)
     await saveButtonStatus.click();
    expect(saveButtonStatus).toHaveText('Edit')
    await saveButtonStatus.click();

    const rowOne = page.locator(".input-field").first()    
    await expect(rowOne).toBeEnabled();
    await rowOne.fill("potatoes")

})