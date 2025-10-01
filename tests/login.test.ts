import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch({ headless: false }); // launch browser in headed mode
  const context = await browser.newContext(); // create a new browser context
  const page = await context.newPage(); // create a new page
  await page.goto("https://ecommerce-playground.lambdatest.io/"); // navigate to the url
  await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]"); // hover on the element
  await page.click("text=Login"); // click on the login from the dropdown

  // login test data
  // koushik350@gmail.com
  // pass123
  await page.fill("input[name = 'email']", ' koushik350@gmail.com'); // fill email
  await page.fill("input[name = 'password']", 'pass123$'); // fill password
  await page.click("input[value='Login']");

  // introduce a timeout to see the result
  await page.waitForTimeout(5000)
  const newPage = await context.newPage()
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await newPage.waitForTimeout(5000);
});