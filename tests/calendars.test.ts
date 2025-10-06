import {test, expect} from "@playwright/test";
import { Console } from "console";
import moment from "moment";

test("calendar demo with fill function", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "2024-12-25"
    await page.locator('#birthday').fill(date)
    await page.waitForTimeout(3000)
})

test("calendar demo using moment", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
   await page.locator("input[placeholder='Start date']").click();
   const mmYY = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
   const prevDate = page.locator("div[class='datepicker-days'] th[class='prev']")
   const nextDate = page.locator("//div[@class='datepicker-days']//th[@class='next'][normalize-space()='»']");

   await prevDate.click()
   await page.locator("input[placeholder='Start date']").click()
   await page.waitForTimeout(3000)

   let dateToSelect: string ="March 2022"
   const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
   console.log("this month?" + thisMonth)

   while(await mmYY.textContent() ! == dateToSelect){
    await prevDate.click();
   }
})