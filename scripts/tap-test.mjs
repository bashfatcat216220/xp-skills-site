// Emulates a touch phone: single-tap a folder icon, then single-tap a skill.
import puppeteer from 'puppeteer-core'

const url = process.argv[2] ?? 'http://localhost:4373/'
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium',
  headless: 'new',
  args: ['--no-sandbox'],
})
const page = await browser.newPage()
await page.emulate({
  viewport: { width: 390, height: 844, hasTouch: true, isMobile: true },
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
})
await page.goto(url, { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 2200)) // let boot finish

const tap = async (sel, name) => {
  const els = await page.$$(sel)
  for (const el of els) {
    const label = await el.evaluate((n) => n.textContent)
    if (label && label.includes(name)) {
      await el.tap()
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

console.log('folder tap ok:', await tap('.desk-icon', 'AI Governance'))
await report('after folder tap')
console.log('skill tap ok:', await tap('.file-item', 'Vendor AI Terms Review'))
await report('after skill tap')
await page.screenshot({ path: '/tmp/xp-taptest.png' })
await browser.close()
