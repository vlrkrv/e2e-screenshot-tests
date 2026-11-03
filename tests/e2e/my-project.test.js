const { test, expect } = require('@playwright/test');

// Тест 1: Перевірка заголовка на новій сторінці
test('Перевірка сторінки About', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page.locator('h1')).toHaveText('Про нас');
});

// Тест 2: Перевірка наявності кнопки
test('Перевірка кнопки на сторінці About', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  const btn = page.locator('#alertBtn');
  await expect(btn).toBeVisible();
  await expect(btn).toHaveText('Натисни мене');
});

// Тест 3: Перевірка заголовка зовнішнього сайту (Wikipedia)
test('Перевірка заголовка Wikipedia', async ({ page }) => {
  await page.goto('https://uk.wikipedia.org/');
  await expect(page).toHaveTitle(/Вікіпедія/);
});