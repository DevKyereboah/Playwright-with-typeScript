import { test, expect, Page } from '@playwright/test';
import {login} from './loginHelper.ts';

test("dashboard page", async ({page}) => {
    await login(page);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")// wait for 3 seconds

})