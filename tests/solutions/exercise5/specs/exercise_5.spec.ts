import { test, expect, Page } from "@playwright/test";
import { logger } from "../../../tests/utils/logger";
import NotesAppPage, { WorkTypes } from "../pages/notes-page";

test.describe("Exercise 5", { tag: ["@smoke"] }, () => {
  let notesAppPage: NotesAppPage;

  test("Login to note app", async ({ page }) => {
    await test.step("Navigate to page", async () => {
      // TODO: Navigate to https://practice.expandtesting.com/notes

      logger.info("Navigating to Notes app login page");
      await page.goto("https://practice.expandtesting.com/notes/app/login", {
        waitUntil: "domcontentloaded",
      });
    });

    await test.step("Fill out login form and login", async () => {
      // TODO: Create locators using the testid for each input field
      // TODO: Fill in the email and password input fields using the environment variables
      // TODO: Click the login button
      // TODO: Verify that the user is logged in successfully

      const emailInput = page.getByTestId("login-email");
      const passwordInput = page.getByTestId("login-password");
      const loginButton = page.getByTestId("login-submit");
      const logoutButton = page.getByTestId("logout");

      logger.info("Filling in login form");
      await emailInput.fill("xalst0902+playwright@gmail.com");
      await passwordInput.fill("txz8aua@NYM@nuf!jra");
      await loginButton.click();

      try {
        await expect(logoutButton).toBeVisible();
        logger.info("Login successful");
      } catch (error) {
        logger.error("Login failed", error);
      }
    });
  });

  test("Create a new note", async ({ page }) => {
    notesAppPage = new NotesAppPage(page);

    await test.step("Authenticating user", async () => {
      await notesAppPage.login("xalst0902+playwright@gmail.com", "txz8aua@NYM@nuf!jra");
    });

    await test.step("Click Add Note button ", async () => {
      logger.info("Clicking Add New Note button");
      await notesAppPage.addNewNoteBtn().click();

      try {
        await expect(notesAppPage.newNoteModal()).toBeVisible();
        logger.info("Modal opened successfully");
      } catch (error) {
        logger.error("Modal did not open: ", error);
      }
    });

    await test.step("Create new note", async () => {
      // TODO: Fill the note with the following information:
      // CATEGORY: 'Personal'
      // COMPLETED: True
      // TITLE: Participate in Playwright course
      // DESCRIPTION: I wonder what I will learn next

      notesAppPage.selectWorkDropdown(WorkTypes.personal);
      await notesAppPage.noteCompleteCheckbox().check();
      await notesAppPage.noteTitle().pressSequentially("Participate in Playwright course");
      await notesAppPage.noteDescription().pressSequentially("I wonder what I will learn next");
      await notesAppPage.noteSubmitButton().click();
    });

    await test.step("Verify that note has been created", async () => {
      // TODO: Assert that the note was created
      // TODO: Remember to clean up after have done the assertion (delete note)

      try {
        await expect(page.getByTestId("note-card-title").filter({ hasText: "Participate in Playwright course" })).toHaveCount(1);
        logger.info("Note was found");
      } catch (error) {
        logger.error(error);
        test.fail();
      }
    });

    await test.step("Removing created note", async () => {
      // TODO: Delete the note
      // TODO: Could we run into an edge case where there's multiple notes with the same testid?

      await notesAppPage.deleteSpecificNote("Participate in Playwright course");
    });
  });
});
