// tests/login.spec.ts
import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { setTimeout } from 'timers/promises';

const filePath = path.join(__dirname, 'testData', 'Login-user.json');

let user: { username?: string; Username?: string; password?: string; Password?: string };
try {
  const rawData = fs.readFileSync(filePath, 'utf8');
  if (!rawData.trim()) {
    throw new Error('Login-user.json is empty');
  }
  user = JSON.parse(rawData);
} catch (err: any) {
  throw new Error(`Failed to read/parse JSON at ${filePath}: ${err.message}`)
}

const username = user.username ?? user.Username ?? '';
const password = user.password ?? user.Password ?? '';

test('Login test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
  await page.locator ("//a[@role='button']//span[@class='title'][normalize-space()='My account']").hover();
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await setTimeout(3000); // wait for 3 seconds
  await page.locator('#input-email').fill(username);
  await page.locator("label[for='input-password']")
  await page.locator("input[value='Login']").click();
});
