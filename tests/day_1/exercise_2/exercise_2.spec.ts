import { test, expect } from '@playwright/test';

test('Exercise 2 - Filling out the forms', async ({ page }) => {
    // TODO: Create for each input field on the page, don't forget the two buttons!
    // HINT: Use page.locator('your-selector-here')

    const cookieBotDialogHeader = page.locator('#CybotCookiebotDialogHeader')
    // const courseMenuBtn = 
    // const playwrightCourseItem = 
    // const courseTitle = 
    // const coursePrice =

    await test.step('Navigate to page', async () => {
        // TODO: Navigate to https://testhuset.dk
        // TODO: wait for the page to load

        // Insert navigation code here:
        await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });

        // Handles the cookie dialog if it appears
        if (cookieBotDialogHeader) {
            const cookieDialogAcceptBtn = page.getByRole('button', { name: 'Tillad valgte' })
            await cookieDialogAcceptBtn.click();
        }
    });

    await test.step('Press the KURSUS menu button', async () => {
        // TODO: Call the locator and use the click action to press the button
    });

    await test.step('Press the Playwright Course element and screenshot the page', async () => {
        // TODO: Call the locator and use the click action to press the element
    });

    await test.step('Assert course title and price', async () => {
        // TODO: Create two assertions to verify that the course title and price are correct
    });
})