import path from 'path'
import { ElectronApplication, Page, _electron as electron } from 'playwright'
import { findLatestBuild, parseElectronApp } from 'electron-playwright-helpers'

let electronApp: ElectronApplication

beforeAll(async () => {
  const latestBuild = findLatestBuild(path.join(__dirname, '../../dist/electron'))
  const { main, executable } = parseElectronApp(latestBuild)
  console.log(main, executable)
  process.env.CI = 'e2e'
  electronApp = await electron.launch({
    args: [main],
    executablePath: executable,
  })
  electronApp.on('window', async (page) => {
    const filename = page.url()?.split('/').pop()
    console.log(`Window opened: ${filename}`)

    // capture errors
    page.on('pageerror', (error) => {
      console.error(error)
    })
    // capture console messages
    page.on('console', (msg) => {
      console.log(msg.text())
    })
  })
})

afterAll(async () => {
  await electronApp.close()
})

let page: Page

beforeEach(async () => {
  if (!page) {
    page = await electronApp.firstWindow()
  }
})

test('test is running', async () => {
  console.log('!!!')
})

test('get isPackaged', async () => {
  await electronApp.firstWindow()
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    // This runs in Electron's main process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.isPackaged
  })
  console.log(isPackaged) // false (because we're in development mode)
})
