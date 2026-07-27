// Drives the built site with real mouse input: double-click a desktop folder,
// then double-click a skill inside it, and report what opened.
import puppeteer from 'puppeteer-core'

const url = process.argv[2] ?? 'http://localhost:4373/'
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium',
  headless: 'new',
  args: ['--no-sandbox'],
  defaultViewport: { width: 1366, height: 860 },
})
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle0' })
// skip boot screen if present
await page.keyboard.press('Space')
await new Promise((r) => setTimeout(r, 300))

const dbl = async (sel, name) => {
  const els = await page.$$(sel)
  for (const el of els) {
    const label = await el.evaluate((n) => n.textContent)
    if (label && label.includes(name)) {
      await el.click({ clickCount: 2 })
      await new Promise((r) => setTimeout(r, 400))
      return true
    }
  }
  return false
}

const report = async (step) => {
  const wins = await page.$$eval('.xpwin', (ws) =>
    ws.map((w) => w.getAttribute('aria-label')),
  )
  console.log(step, '->', JSON.stringify(wins))
}

console.log('folder dblclick ok:', await dbl('.desk-icon', 'General Practice'))
await report('after folder dblclick')

console.log('skill dblclick ok:', await dbl('.file-item', 'Pre-Mortem'))
await report('after skill dblclick')

await page.screenshot({ path: '/tmp/xp-clicktest.png' })
await browser.close()
