import {test, expect} from '@playwright/test';

test("handling alert", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) =>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
        // await alert.accept("type something ");
        // await alert.default();
    })
    await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click
        await expect(page.locator("#confirm-demo")).toContainText("Cancel");

    // page.on("dialog", async (atempt)=>{
    //     const text = atempt.message; // fixed property access
    //     console.log(text);
    //     await atempt.accept();
    // })
    // await page.locator("p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']").click();
})

