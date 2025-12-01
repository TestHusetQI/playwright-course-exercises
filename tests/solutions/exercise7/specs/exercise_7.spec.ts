import { test, expect } from "@playwright/test";

test.describe("Exercise 6", { tag: ["@api"] }, () => {
  const baseUrl = "https://practice.expandtesting.com/notes/api";
  const email = "xalst0902+playwright@gmail.com";
  const password = "txz8aua@NYM@nuf!jra";

  let token: string;

  // Run once before all tests in this describe
  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${baseUrl}/users/login`, {
      form: { email, password },
      headers: { Accept: "application/json" },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log("Login response:", body);

    token = body.data.token;
    console.log("TOKEN:", token);
  });

  test("Get all notes", async ({ request }) => {
    await test.step("GET: /notes", async () => {
      console.log("globalToken: ", token);
      const response = await request.get(baseUrl + "/notes", {
        headers: {
          "x-auth-token": token,
        },
      });

      const data = await response.json();
      console.log("response: ", data.message);
    });
  });
});
