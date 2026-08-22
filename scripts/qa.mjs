import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const WIDTHS = [320, 375, 768, 1024, 1440, 1920];

const browser = await chromium.launch({ channel: "chrome" });
const results = [];

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(BASE, { waitUntil: "networkidle" });
  const overflow = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth,
    win: window.innerWidth,
  }));
  results.push({ width, ...overflow, overflows: overflow.doc > overflow.win + 1 });
  await page.close();
}

// Modal smoke test at desktop width.
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE, { waitUntil: "networkidle" });
await page.getByRole("button", { name: /Flagship Case Study/i }).first().click();
await page.waitForSelector('[role="dialog"]');
await page.waitForTimeout(400);
await page.screenshot({ path: `${process.env.OUT_DIR}/desktop-modal.png` });
await page.keyboard.press("Escape");
const dialogGone = (await page.locator('[role="dialog"]').count()) === 0;
await page.close();

await browser.close();
console.log(JSON.stringify({ results, modalOpens: true, escapeCloses: dialogGone }, null, 2));
