import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE, { waitUntil: "networkidle" });
// Reveal everything so off-screen content is measured too.
await page.addStyleTag({ content: ".reveal,.hero-rise{opacity:1 !important;transform:none !important}" });

const findings = await page.evaluate(() => {
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const luminance = ([r, g, b]) =>
    0.2126 * toLinear(r / 255) + 0.7152 * toLinear(g / 255) + 0.0722 * toLinear(b / 255);
  // Computed colours come back in whatever space they were authored in
  // (oklch here), so resolve them to rgba by painting a pixel.
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const parse = (value) => {
    if (!value || value === "transparent") return [0, 0, 0, 0];
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#000";
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const over = (fg, bg) => {
    const alpha = fg.length > 3 ? fg[3] : 1;
    return [0, 1, 2].map((i) => fg[i] * alpha + bg[i] * (1 - alpha));
  };

  /** Composite every painted background between the element and the root. */
  const backgroundOf = (el) => {
    const layers = [];
    for (let node = el; node; node = node.parentElement) {
      const color = parse(getComputedStyle(node).backgroundColor);
      if (color.length >= 3 && (color.length === 3 || color[3] > 0)) layers.push(color);
    }
    return layers.reduceRight((acc, layer) => over(layer, acc), [255, 255, 255]);
  };

  const isHidden = (el) =>
    !el.offsetParent && getComputedStyle(el).position !== "fixed" ? true : el.closest("[hidden]") !== null;

  const results = [];
  document.querySelectorAll("p,span,a,li,h1,h2,h3,dt,dd,button,code").forEach((el) => {
    if (el.children.length > 0) return;
    const text = el.textContent?.trim();
    if (!text) return;
    const style = getComputedStyle(el);
    if (style.visibility === "hidden" || style.display === "none") return;
    if (el.classList.contains("sr-only") || isHidden(el)) return;
    if (el.closest("[aria-hidden='true']")) return;

    const size = parseFloat(style.fontSize);
    const weight = Number(style.fontWeight);
    const isLarge = size >= 24 || (size >= 18.66 && weight >= 700);
    const background = backgroundOf(el);
    const foreground = over(parse(style.color), background);
    const [l1, l2] = [luminance(foreground), luminance(background)];
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const minimum = isLarge ? 3 : 4.5;

    if (ratio < minimum) {
      results.push({
        text: text.slice(0, 44),
        size,
        ratio: Number(ratio.toFixed(2)),
        minimum,
        cls: String(el.className).slice(0, 70),
      });
    }
  });
  return results;
});

console.log(`${findings.length} contrast failures`);
console.log(JSON.stringify(findings.slice(0, 20), null, 2));
await browser.close();
