import { test, expect } from "@playwright/test";
import { logger } from "../../utils/logger";

test.beforeEach(async () => logger.info("Starting new test"));
test.afterEach(async () => logger.info("Finished test"));

test("Exercise 4 - Im a logging jack and Im okay", async ({ page }) => {});
