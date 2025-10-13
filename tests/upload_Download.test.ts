import {test, expect} from '@playwright/test'
test.only("file download test", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.waitForSelector("#textbox", {state: "visible"})
    await page.type("#textbox", "This is a test file")
    //page.waitForTimeout(3000)
    await page.click("#create")
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ])
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName)

})

test("file upload test", async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // await page.setInputFiles("input[name='files[]']", ["tests/uploadItems/image required.png",
    //     "tests/uploadItems/image.png"])
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[name='files[]']")
    ])
    const isMultiple =  uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["tests/uploadItems/image required.png",
         "tests/uploadItems/image.png"])
})