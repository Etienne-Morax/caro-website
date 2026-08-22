import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = process.env.OUT_DIR ?? "./screenshots";
const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];
const SECTIONS = ["overview", "mindset", "about", "experience", "bridge", "artefacts", "contact"];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });

for (const viewport of VIEWPORTS) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });

  for (const id of SECTIONS) {
    await page.evaluate((sectionId) => {
      const el = document.getElementById(sectionId);
      window.scrollTo({ top: (el?.offsetTop ?? 0) + 8, behavior: "instant" });
    }, id);
    // Let scroll-triggered reveals settle.
    await page.waitForTimeout(1100);
    await page.screenshot({ path: `${OUT}/${viewport.name}-${id}.png` });
  }

  await page.close();
}

await browser.close();
console.log("screenshots written to", OUT);
