const { test, expect } = require('@playwright/test');

test('Скриншот всієї сторінки About', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  expect(await page.screenshot()).toMatchSnapshot('about-page-full.png');
});

test('Скриншот заголовка на сторінці About', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('about-page-h1.png');
});