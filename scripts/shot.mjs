import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const OUT = '/tmp/claude-0/-home-user-uwos-fr/31f80d87-d394-5690-864d-8ef40bfdc57a/scratchpad/shots';
const BASE = 'http://localhost:4321';

const shots = process.argv.slice(2);
const targets = shots.length
  ? shots
  : [
      'home::/',
      'article::/combien-de-stylos-prevoir-pour-un-stand-professionnel-selon-le-nombre-de-visiteurs/',
      'category::/rubrique/maison-deco/',
      'rubriques::/rubriques/',
      'fil::/le-fil/',
    ];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: EXEC });

for (const t of targets) {
  const [name, path] = t.split('::');
  for (const [dev, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
    // scroll pour déclencher les reveals puis revenir en haut
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.7;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${OUT}/${name}-${dev}.png`, fullPage: dev === 'desktop' });
    await ctx.close();
    console.log(`shot ${name}-${dev}`);
  }
}
await browser.close();
console.log('done ->', OUT);
