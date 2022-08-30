import { chromium } from 'playwright'
import { expect } from 'expect'

let browser
let page

beforeAll(async () => {
  browser = await chromium.launch()
})
afterAll(async () => {
  await browser.close()
})
beforeEach(async () => {
  page = await browser.newPage()
  await page.goto('https://whatismybrowser.com/')
})
afterEach(async () => {
  await page.close()
})

test('should display correct browser', async () => {
  const browser = await page.$eval('.string-major', el => el.innerHTML)
  expect(browser).toContain('Chrome')
})
