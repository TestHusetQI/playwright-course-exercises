import { test, expect } from "@playwright/test";
import { logger } from "../../../utils/logger";

test.describe("Exercise 6", { tag: ["@api"] }, () => {
  const baseUrl = "https://practice.expandtesting.com/notes/api";
  const email = "";
  const password = "";

  // This will hold the auth token once you’ve logged in
  let token: string;

  // Run once before all tests in this describe
  test.beforeAll(async ({ request }) => {
    // TODO:
    // 1. Use the `request` fixture to send a POST request to: `${baseUrl}/users/login`
    // 2. Send the email and password as form data (or JSON) in the request body.
    // 3. Add an "Accept: application/json" header.
    // 4. Assert that the response is successful (status 2xx).
    // 5. Parse the JSON response and extract the token from the response body.
    // 6. Store the token in the `token` variable above so it can be used in the tests.
  });

  test("Get all notes", async ({ request }) => {
    await test.step("GET: /notes", async () => {
      // TODO:
      // 1. Use the `request` fixture to send a GET request to: `${baseUrl}/notes`
      // 2. Include the token from `beforeAll` as a header: "x-auth-token": token
      // 3. Assert that the response is successful.
      // 4. Parse the JSON response and inspect the data (e.g. notes list, message).
      // 5. Add at least one meaningful assertion on the response body
      //    (for example, that a property exists or that the notes array is not empty).
    });
  });
});
