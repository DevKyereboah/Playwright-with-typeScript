import {test, expect} from "@playwright/test"
import RegisterPage from "../pages/RegisterPage"
import LoginPage  from "../pages/LoginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/SpecialHotPage"

const email = "koushik02@mailinator.com"
const password = "koushik@123"
test("Register test", async ({page, baseURL})=>{
    const register = new RegisterPage(page)
    await page.goto(`${baseURL}route=account/register`)
    await register.enterFirstName("koushik")
    await register.enterLastname("Chatterjee")
    await register.enterEmail(email)
    await register.enterTelephone("1234567890")
    await register.enterPassword(password)
    await register.confirmPassword(password)
    await register.isSubscribeChecked()
    await register.clickTermCondition()
    await register.clickContinueToRegister()
})