import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/special');
  await page.getByRole('button', { name: 'Mega Menu' }).click();
  await page.getByRole('button', { name: 'Mega Menu' }).click();
  await page.getByRole('link', { name: 'Apple'}).click();
  await page.getByRole('link', { name: 'iPod Touch iPod Touch iPod' }).click();
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8');
  await page.locator('.btn.btn-cart').first().click();
  await page.locator('.btn.btn-cart').first().click();
  await page.locator('.btn.btn-cart').first().click();
  await page.getByRole('link', { name: 'View Cart ' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
});