import { test, expect } from '@playwright/test';
import {login} from './loginHelper.ts';

test("dashboard page", async ({page}) => {
    await login(page);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")// wait for 3 seconds

    //recod
    const editAcountLink = page.locator("//a[normalize-space()='Edit your account information']");
    await expect.soft(editAcountLink).toBeVisible();
    await expect(editAcountLink).toHaveText(' Edit your account information');
    // await page.getByTestId("//a[normalize-space()='Edit your account information']").click();
    const continueButton = page.locator("(//input[@value='Continue'])[1]")
    await expect.soft(continueButton).toBeVisible({timeout: 10000});

    console.log(await page.locator('input').allInnerTexts());
    await continueButton.click();

//     function timeout(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
})


