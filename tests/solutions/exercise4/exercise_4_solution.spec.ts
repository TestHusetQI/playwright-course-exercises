import { test, expect } from "@playwright/test";
import { logger } from "../../tests/utils/logger";

test.beforeEach(async () => logger.info("Starting new test"));
test.afterEach(async () => logger.info("Finished test"));

test("Exercise 4 - Filling out the forms", async ({ page }) => {
  // TODO: Create for each input field on the page, don't forget the two buttons!
  // HINT: Use page.locator('your-selector-here')

  const cookieBotDialogHeader = page.locator("#CybotCookiebotDialogHeader");
  const courseMenuBtn = page.getByRole("link", { name: "Kursus" });
  const playwrightCourseItem = page.locator('a:has-text("Automatisering med Playwright")');
  const courseTitle = page.locator("h1.hero-title");
  const pricingContainer = page.locator("div.pricing-part");
  const price = pricingContainer.locator("span[data-variation-price]");

  await test.step("Navigate to page", async () => {
    // TODO: Navigate to https://testhuset.dk
    // TODO: wait for the page to load

    // Insert navigation code here:
    logger.info("Navigating to Testhuset.dk");
    await page.goto("https://testhuset.dk", { waitUntil: "domcontentloaded" });

    // Handles the cookie dialog if it appears
    if (cookieBotDialogHeader) {
      logger.info("Handling cookie dialog…");
      const cookieDialogAcceptBtn = page.getByRole("button", { name: "Tillad valgte" });
      await cookieDialogAcceptBtn.click();
    }
  });

  await test.step("Press the KURSUS menu button", async () => {
    // TODO: Call the locator and use the click action to press the button
    logger.info("Clicking the KURSUS menu button…");
    await courseMenuBtn.click();
  });

  await test.step("Press the Playwright Course element and screenshot the page", async () => {
    // TODO: Call the locator and use the click action to press the element
    logger.info("Selecting the Playwright course and taking screenshot");
    await playwrightCourseItem.click();
    await page.screenshot({ path: "screenshots/day1_exercise2.png", fullPage: true });
  });

  await test.step("Assert course title and price", async () => {
    // TODO: Create two assertions to verify that the course title and price are correct
    logger.info("Asserting course title and price…");
    logger.error("This is an error log example");
    await expect(courseTitle).toHaveText("Automatisering med Playwright");
    await expect(price).toHaveText("10.499 kr.");
  });
});
