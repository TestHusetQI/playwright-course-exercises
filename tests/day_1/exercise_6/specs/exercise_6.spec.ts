import { test, expect, Page, request } from "@playwright/test";
import { logger } from "../../../utils/logger";

test.describe("Exercise 6", { tag: ["@api"] }, () => {
  const baseUrl = "https://practice.expandtesting.com/notes/api/";

  test("GET: Health-check", async ({ request }) => {
    // TODO: Create call: const reponse = using the request fixture
    // TODO: Call the endpoint /health-check in the request.get
    // TODO: Assert that the response.ok() is true
    // TODO: Make a const data = that contains the json response.
    // TODO: Assert that the data.message is correct. (You can use logging to check what the data contains.)
  });
});
