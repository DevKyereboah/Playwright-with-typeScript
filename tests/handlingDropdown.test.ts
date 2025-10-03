import {test, expect} from "@playwright/test";

test("handling dropdown", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='select-demo']",{
        label: "Monday"
    })
    await page.waitForTimeout(3000)
})