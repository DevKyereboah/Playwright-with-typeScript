import {test, expect} from '@playwright/test';

test("interaction with input", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground//simple-form-demo");
    // TODO: Add further interactions here
    const messageInput = page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute('placeholder')); // Should print "Please enter your Message"
    expect(messageInput).toHaveAttribute('placeholder', 'Please enter your Message')
    console.log('Before entering data', + await messageInput.inputValue())
    await messageInput.fill("Hello Sarah");
    console.log('After entering data' + await messageInput.inputValue)
    console.log(await messageInput.inputValue());
});

test('sum', async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground//simple-form-demo");
    // decalre the input fields
    const firstInput = page.locator("#sum1")
    const secondInput = page.locator("#sum2")
    
    const getTotalInputBtn = page.locator("//button[normalize-space()='Get Sum']")
    const num1 = 121;
    const num2 = 234;

    await firstInput.fill(" " + num1)
    await secondInput.fill(" " + num2)
    await getTotalInputBtn.click();

    const result = page.locator("#addmessage")
    const expectedResult = num1 + num2;
    console.log(await result.textContent());
    expect(result).toHaveText("" + expectedResult)
})

test("checkbox interaction", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground//checkbox-demo");
    const singleCheckbox = page.locator("//label[normalize-space()='Click on check box']")
    await expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
})