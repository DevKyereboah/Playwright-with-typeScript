import {test} from '@playwright/test';
import moment from 'moment';
test("date picker test", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    
    // for eg. picking my date of birth
    const date = "1999-01-02"
    await page.fill("#birthday", date)
    await page.waitForTimeout(3000);
})
test("date picker demo using moment", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    await page.locator("input[placeholder='Start date']").click();

    //await selectDate(2, "December 1999");
    await page.reload()
    //await selectDate(5, "August 2025")
    await page.waitForTimeout(3000);
    await page.reload()
    // await selectDate(2, "June 2022")


    async function selectDate() {
        const mmYY = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']");
        const prevDate = page.locator("div[class='datepicker-days'] th[class='prev']");
        const nextDate = page.locator("div[class='datepicker-days'] th[class='next']");

        await prevDate.click()
        await page.locator("tbody tr:nth-child(1) td:nth-child(5)").click()
        await page.waitForTimeout(3000)
        //select a date
        const dateToSelect: string = "August 2025";
        const thisMonth = moment(dateToSelect, "MMMM yyyy").isBefore();
        console.log("this month?", thisMonth);

        while (await mmYY.textContent() !== dateToSelect) {
            if (thisMonth === true) {
                await prevDate.click();
            }
            else {
                await nextDate.click();
            }
            await prevDate.click();
            await page.locator("//td[@class='day'][normalize-space()='5']").click();
        }
    }
    selectDate()
})