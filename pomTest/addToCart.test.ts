import {test, expect} from "@playwright/test"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import { waitForDebugger } from "inspector"
import SpecialHotPage from "../pages/SpecialHotPage"
import HomePage from "../pages/homePage"
const email = "sarh.owusu781@gmail.com"
const password = "koushik@123"
test("Register test", async ({page})=>{
    const register = new RegisterPage(page)
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
    await register.enterFirstName("koushik")
    await register.enterLastname("Chatterjee")
    await register.enterEmail(email)
    await register.enterTelephone("1234567890")
    await register.enterPassword(password)
    await register.confirmPassword(password)
    await expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermCondition()
    await register.clickContinueToRegister()
})

test("login test_0", async ({page})=>{
    const login = new LoginPage(page)
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await login.enterEmail(email)
    await login.enterLoginPassword(password)
    await login.clickLoginButton()
    await page.waitForTimeout(3000)
    expect(await page.title()).toBe("My Account")
})

test("special hot page test", async ({page})=>{
    const specialHotPage = new SpecialHotPage(page)
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8")
    await specialHotPage.hoverIpodTouch()
    await specialHotPage.addIpodTouchCart()
    await specialHotPage.FrameIsToastVisible()
})

test("add to cart", async ({page})=>{
    const login = new LoginPage(page);
    const homePage = new HomePage(page)
    const special =new SpecialHotPage(page)
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await login.login(email, password);
    await homePage.clickSpecialHotMenu()
    await special.addIpodTouchCart()
    const FrameIsToastVisible = await special.FrameIsToastVisible();
    expect(FrameIsToastVisible).toBeVisible()
})