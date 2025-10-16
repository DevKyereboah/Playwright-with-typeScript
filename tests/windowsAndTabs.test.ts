import {test} from "@playwright/test"
test("handling windows and multiple tabs", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("a[title='Follow @Lambdatesting on Twitter']").click()
    ])

       console.log("new window url:" + newWindow.url())
})

test("handling multiple tabs", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("a[title='Follow @Lambdatesting on Facebook']").click()
    ])
     await page.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log("no. of tabs: " + pages.length);

    pages.forEach(tab =>{
        console.log(tab.url());
    })

    let FacebookPage = page;
    for(let index = 0; index <pages.length; index++){
        const url =pages[index].url();
        if(url == "https://www.facebook.com/LambdaTest/"){
            FacebookPage = pages[index];
        }
    }
    const text = await FacebookPage.textContent('//h1')
    console.log(text);
})