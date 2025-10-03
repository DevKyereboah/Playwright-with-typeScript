import {test, expect} from "@playwright/test";

test("handling dropdown", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='select-demo']",{
        label: "Monday"
        // value: "Monday"
        // index: 1
    })
    await page.selectOption("#multi-select", [
        {
            label: "Texas",
        },
        {
            index: 2
        },
        {
            value: "Washington"
        }
    ])

    await page.waitForTimeout(3000)
})

test("bootstrap dropdown", async ({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    // Click the dropdown trigger to open the dropdown
    await page.locator(".select2-selection--single").nth(0).click();

    // Type into the search box
    await page.locator("span.select2-search input[role='textbox']").fill("India");

    // Wait for and select "India"
    await page.locator("#select2-country-results li", { hasText: "India" }).click();

    await page.waitForTimeout(3000);
});
test("handling multi select dropdown", async ({page}) =>{
        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

        await selectCountry("India");
        await selectCountry("Denmark");
        await selectCountry("South Africa");

        async function selectCountry(countryName: string) {
            await page.click("#country+span")
            await page.locator("ul#select2-country-results li", { hasText: countryName }).click();
        }
})

