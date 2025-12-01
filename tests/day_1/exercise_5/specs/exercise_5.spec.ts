import { test, expect, Page } from "@playwright/test";
import NotesAppPage, { WorkTypes } from "../pages/notes-page";
import { logger } from "../../../utils/logger";

test.describe("Exercise 5", { tag: ["@smoke"] }, () => {
  let notesAppPage: NotesAppPage;

  test("Login to note app", async ({ page }) => {
    await test.step("Navigate to page", async () => {
      // TODO: Navigate to https://practice.expandtesting.com/notes
    });

    await test.step("Fill out login form and login", async () => {
      // TODO: Create locators using the testid for each input field
      // TODO: Fill in the email and password input fields using the environment variables
      // TODO: Click the login button
      // TODO: Verify that the user is logged in successfully
    });
  });

  test("Create a new note", async ({ page }) => {
    // TODO: Use the notesAppPage page object below for the two test steps.
    // TODO: You can see the functions available when dotting into notesAppPage.
    notesAppPage = new NotesAppPage(page);

    await test.step("Authenticating user", async () => {
      // TODO: Maybe there's a function that allows you to login.
    });

    await test.step("Click Add Note button ", async () => {
      // TODO: Click the New Note button. Using a locator from the page object.
    });

    await test.step("Create new note", async () => {
      // TODO: Fill the note with the following information:
      // CATEGORY: 'Personal'
      // COMPLETED: True
      // TITLE: Participate in Playwright course
      // DESCRIPTION: I wonder what I will learn next
    });

    await test.step("Verify that note has been created", async () => {
      // TODO: Assert that the note was created
      // TODO: Remember to clean up after have done the assertion (delete note)
    });

    await test.step("Removing created note", async () => {
      // TODO: Delete the note
      // TODO: Could we run into an edge case where there's multiple notes with the same testid?
    });
  });
});
