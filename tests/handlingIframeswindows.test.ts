import {test, expect} from "@playwright/test";

test("hadling iframes and ", async ({page})=>{
    await page.goto("https://letcode.in/frame");
    //finding the number of frames on the page
    const allframes = page.frames();
    console.log("total frames: "+ allframes.length);

    const myFrame = page.frame("firstFr")
    await myFrame?.locator("input[placeholder='Enter name']").fill("Sarah");
    await myFrame?.locator("//input[@placeholder='Enter email']").fill("Owusu")
    console.log("My frame name is: "+ myFrame);
    const text = await myFrame?.locator(".title.has-text-info").textContent();
    expect(text).toContain("You have entered Sarah Owusu");
    console.log(text);

     await page.waitForTimeout(5000);

})

test("hadling iframes", async ({page})=>{
      await page.goto("https://letcode.in/frame");
      const allframes = page.frames();
      console.log("total frames: "+ allframes.length);

      const frame2 = page.frameLocator("#firstFr")
      await frame2.locator("input[placeholder='Enter name']").fill("Sarah");
      await frame2.locator("//input[@placeholder='Enter email']").fill("Owusu")

      const text = await frame2.locator(".title.has-text-info").textContent()
      expect(text).toContain("You have entered Sarah Owusu");
      console.log(text);

      // getting the inner frame
      const innerFrame = frame2.frameLocator("iframe[src='innerframe']")
      await innerFrame.locator("//input[@placeholder='Enter email']").first().fill("sarahowusu781@getMaxListeners.com")
      await frame2.locator("input[placeholder='Enter name']").fill("Kyereboah")

})

