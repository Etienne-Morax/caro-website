import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const SECTIONS = ["overview", "mindset", "about", "experience", "bridge", "artefacts", "contact"];

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(BASE, { waitUntil: "networkidle" });
// Axe samples the painted background under each element, so freeze entrance
// transitions and keep the audited section inside the viewport.
await page.addStyleTag({
  content:
    "*{transition:none !important;animation:none !important} .reveal,.hero-rise{opacity:1 !important;transform:none !important}",
});

let total = 0;
for (const id of SECTIONS) {
  await page.evaluate((sectionId) => {
    document.documentElement.style.scrollBehavior = "auto";
    document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
  }, id);

  const { violations } = await new AxeBuilder({ page })
    .include(`#${id}`)
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  total += violations.length;
  if (violations.length) {
    console.log(
      `#${id}:`,
      JSON.stringify(
        violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.slice(0, 4).map((n) => n.failureSummary?.split("\n")[1]?.trim()),
        })),
        null,
        2,
      ),
    );
  }
}

await page.getByRole("button", { name: /Flagship Case Study/i }).first().click();
await page.waitForSelector('[role="dialog"]');
const modal = await new AxeBuilder({ page })
  .include('[role="dialog"]')
  .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  .analyze();
total += modal.violations.length;
if (modal.violations.length) {
  console.log(
    "modal:",
    JSON.stringify(
      modal.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.slice(0, 4).map((n) => n.failureSummary?.split("\n")[1]?.trim()),
      })),
      null,
      2,
    ),
  );
}

console.log(`total violations: ${total}`);
await browser.close();
