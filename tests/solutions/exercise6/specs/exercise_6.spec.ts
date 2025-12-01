import { test, expect } from "@playwright/test";
import { logger } from "../../../tests/utils/logger";

test.describe("Exercise 6", { tag: ["@api"] }, () => {
  const baseUrl = "https://practice.expandtesting.com/notes/api/";

  test("GET: Health-check", async ({ request }) => {
    // TODO: Create fixture: const reponse =
    // TODO: Call the endpoint /health-check in the request.get

    const response = await request.get(baseUrl + "health-check");

    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    logger.info(data);
    expect(data.message).toContain("Notes API is Running");
  });

  //   test("Authorize user", async ({ page }) => {
  //     // TODO: Call the /users/login endpoint
  //     // TODO: Use the account details that you created for the Notes app earlier

  //     const request = page.request;
  //     const response = await request.post(baseUrl + "users/login");
  //   });
});
