import { test, expect } from "@playwright/test";
import { logger } from "../../tests/utils/logger";

test("Exercise 3 - Filling out the forms", async ({ page }) => {
  // TODO: Create for each input field on the page, don't forget the two buttons!
  // HINT: Use page.locator('your-selector-here')

  const inputNumber = page.getByRole("spinbutton", { name: "Input: Number" });
  const inputText = page.getByRole("textbox", { name: "Input: Text" });
  const inputPassword = page.getByRole("textbox", { name: "Input: Password" });
  const inputDate = page.getByLabel("Input: Date");
  const outputNumber = page.locator("#output-number");
  const outputText = page.locator("#output-text");
  const outputPassword = page.locator("#output-password");
  const outputDate = page.locator("#output-date");
  const displayInputsBtn = page.getByRole("button", { name: "Display Inputs" });
  const clearInputsBtn = page.getByRole("button", { name: "Clear Inputs" });

  await test.step("Navigate to page", async () => {
    // TODO: Navigate to https://practice.expandtesting.com/inputs
    logger.info("Navigating to Inputs page…");
    await page.goto("https://practice.expandtesting.com/inputs", { waitUntil: "domcontentloaded" });
  });

  await test.step("Fill the inputs and press the display inputs button", async () => {
    // TODO: Use the fill function to write the correct type into each field

    await inputNumber.fill("42");
    await inputText.fill("Playwright");
    await inputPassword.fill("MyS3cr3tP@ssw0rd");
    await inputDate.pressSequentially("20022015");
    await displayInputsBtn.click();
  });

  await test.step("Validate the output fields and take screenshot", async () => {
    // TODO: Create 3 assertions to verify that the output fields contain the same values as the input fields
    // TODO: Take a screenshot and save it to 'screenshots/day2_exercise2.png'
    // HINT: Use "toHaveValue" assertion

    logger.info("Validating output fields…");
    await expect(outputNumber).toHaveText("42");
    await expect(outputText).toHaveText("Playwright");
    await expect(outputPassword).toHaveText("MyS3cr3tP@ssw0rd");
    await expect(outputDate).toHaveText("2015-02-20");
    await page.screenshot({ path: "screenshots/day2_exercise2.png", fullPage: true });
  });

  await test.step("Clear the inputs", async () => {
    // TODO: Press the "Clear Inputs" button

    await clearInputsBtn.click();
  });
});
