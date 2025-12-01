import { expect, Page } from "@playwright/test";
import { logger } from "../../../utils/logger";

export enum WorkTypes {
  home = "Home",
  work = "Work",
  personal = "Personal",
}

export default class NotesAppPage {
  constructor(private page: Page) {}

  addNewNoteBtn = () => this.page.getByTestId("add-new-note");
  newNoteModal = () => this.page.locator("div.modal-dialog");
  emailInput = () => this.page.getByTestId("login-email");
  passwordInput = () => this.page.getByTestId("login-password");
  loginButton = () => this.page.getByTestId("login-submit");
  logoutButton = () => this.page.getByTestId("logout");
  noteCategory = () => this.page.getByTestId("note-category");
  noteCompleteCheckbox = () => this.page.getByTestId("note-completed");
  noteTitle = () => this.page.getByTestId("note-title");
  noteDescription = () => this.page.getByTestId("note-description");
  noteSubmitButton = () => this.page.getByTestId("note-submit");
  noteDeleteButton = () => this.page.getByTestId("note-delete");
  noteCardTitle = () => this.page.getByTestId("note-card-title");

  /**
   *
   * @returns The Nodecard
   */
  private getNoteCard() {
    return this.page.getByTestId("note-card");
  }

  /**
   * This function navigates to the login page and fills out the username and password field and clicks the login button.
   * @param username
   * @param password
   */
  public async login(username: string, password: string) {
    const baseUrl: string = "https://practice.expandtesting.com/notes/app/";

    logger.info("Navigating to login page");
    await this.page.goto(baseUrl + "login", { waitUntil: "domcontentloaded" });

    logger.info("Filling in login form");
    await this.emailInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  public async selectWorkDropdown(category: WorkTypes) {
    await this.noteCategory().selectOption(category);
  }

  public async deleteSpecificNote(title: string) {
    const noteCard = this.getNoteCard().filter({
      has: this.noteCardTitle().filter({ hasText: title }),
    });

    await noteCard.getByTestId("note-delete").click();
  }

  public async expectModalFields() {
    await expect(this.noteCategory()).toBeVisible();
    await expect(this.noteCompleteCheckbox()).toBeVisible();
    await expect(this.noteTitle()).toBeVisible();
    await expect(this.noteDescription()).toBeVisible();
    await expect(this.noteSubmitButton()).toHaveText("Create");
    await expect(this.page.getByTestId("note-cancel")).toHaveText("Cancel");
  }
}
