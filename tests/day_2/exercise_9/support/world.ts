import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
