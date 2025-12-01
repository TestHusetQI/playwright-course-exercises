import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import type { CustomWorld } from "../features/support/world";

const BASE_URL = "https://testhuset.dk";

function selectors(page: CustomWorld["page"]) {
  const cookieBotDialogHeader = page.locator("#CybotCookiebotDialogHeader");
  const cookieDialogAcceptBtn = page.getByRole("button", { name: "Tillad valgte" });

  const courseMenuBtn = page.getByRole("link", { name: "Kursus" });
  const playwrightCourseItem = page.locator('a:has-text("Automatisering med Playwright")');
  const courseTitle = page.locator("h1.hero-title");

  const pricingContainer = page.locator("div.pricing-part");
  const price = pricingContainer.locator("span[data-variation-price]");

  return {
    cookieBotDialogHeader,
    cookieDialogAcceptBtn,
    courseMenuBtn,
    playwrightCourseItem,
    courseTitle,
    price,
  };
}

Given("the user is on the Testhuset homepage", async function (this: CustomWorld) {
  await this.page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
});
