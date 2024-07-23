const {test,expect} = require('@playwright/test');

test('First Playwright test', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("TestEngineer");
});

test('Second Playwright test', async ({page})=> {
    await page.goto("https://www.google.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});