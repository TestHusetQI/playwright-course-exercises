import * as playwright from 'playwright';

async function main() {
  /**
   * TODO:
   * 1. Launch Chromium
   * 2. Create a new browser context + page
   * 3. Go to an 'https://testhuset.dk' website
   * 4. Take a screenshot
   * 5. Close browser
   */

  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });

  await page.screenshot({ path: 'screenshots/day1_homepage.png', fullPage: true });
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});