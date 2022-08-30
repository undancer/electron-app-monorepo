import { resolve } from 'path'
import { Injectable } from '@nestjs/common'
import { BrowserView, BrowserWindow, BrowserWindowConstructorOptions, HandlerDetails } from 'electron'
import { shell } from 'electron/common'
// import { VUEJS_DEVTOOLS } from 'electron-devtools-vendor'
import { ConfigService } from '@main/config/config.service'

type WindowOpenHandler = (details: HandlerDetails) => ({ action: 'deny' }) | ({ action: 'allow'; overrideBrowserWindowOptions?: BrowserWindowConstructorOptions })

@Injectable()
export class WindowService {
  mainWindow: BrowserWindow
  controlWindow: BrowserWindow
  browserView: BrowserView

  info = {
    dist: () => resolve(__dirname, '../renderer'),
  }

  indexHtml = resolve(this.info.dist(), 'index.html')

  constructor(
    private readonly configService: ConfigService,
  ) {
    configService.print()
    console.log('window service initialized')
  }

  async initMainWindow() {
    console.log('init main window')
    // const mainWindow = await this.createBrowserWindow()
    // mainWindow.webContents.openDevTools({ mode: 'detach' })
    // mainWindow.show()

    if (!this.mainWindow) {
      this.mainWindow = await this.createBrowserWindow('main', '', {
        frame: false,
        titleBarStyle: 'hidden',
        // show: false,
      })
      // } else {
      //   this.mainWindow.blur()
    }

    // const symbol = Symbol.for('main')

    // const view = new BrowserView()
    // await view.webContents.loadURL('', {})
    // mainWindow.addBrowserView(new BrowserView())
    // mainWindow.setBrowserView(new BrowserView())
    // mainWindow.setTopBrowserView(new BrowserView())
    // mainWindow.removeBrowserView(new BrowserView())

    // await this.createBrowserWindow('main', 'browsing')
    // await this.createBrowserWindow('main', 'playing')
    // await this.createBrowserWindow('control', 'control')
    // await this.createBrowserWindow('about', 'about')
  }

  // async initMainWindow() {
  //   console.log('main window init')
  //   // const store = new Store({})
  //   // console.log(store)
  //   // store.openInEditor()

  //   const mainWindow = new BrowserWindow({
  //     width: 800,
  //     height: 600,
  //     webPreferences: {
  //       nodeIntegration: false,
  //       contextIsolation: true,
  //       preload: join(__dirname, '../preload/index.cjs'),
  //       // devTools: isDev,
  //     },
  //     frame: false,
  //     titleBarStyle: 'hidden',
  //     // autoHideMenuBar: !isDev,
  //   })

  //   // mainWindow.maximize()

  //   if (is.dev()) {
  //     // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
  //     // eslint-disable-next-line dot-notation
  //     const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`
  //     await mainWindow.loadURL(url)
  //     mainWindow.webContents.openDevTools({ mode: 'undocked' })
  //   } else {
  //     // const file = `file://${join(app.getAppPath(), 'dist/renderer/index.html')}`

  //     console.log('__dirname', __dirname)
  //     const file = join(__dirname, '../renderer/index.html') // 'dist/renderer/index.html'
  //     console.log('__dirname', file)

  //     await mainWindow.loadFile(file)
  //     mainWindow.removeMenu()
  //   }

  //   mainWindow.on('closed', () => {
  //     mainWindow.destroy()
  //   })

  //   // Test active push message to Renderer-process
  //   mainWindow.webContents.on('did-finish-load', () => {
  //     mainWindow?.webContents.send('main-process-message', new Date().toLocaleString())
  //   })

  //   // Make all links open with the browser, not with the application
  //   mainWindow.webContents.setWindowOpenHandler(this.windowOpenHandler)
  //   this.mainWindow = mainWindow
  // }

  async initControlWindow() {
    if (!this.controlWindow) {
      this.controlWindow = await this.createBrowserWindow('control', 'control')
    } else {
      this.controlWindow.blur()
    }
    const flag = 1 < 2
    const mode = flag ? 'detach' : 'bottom'
    this.controlWindow.webContents.openDevTools({ mode })
  }

  async createBrowserWindow(name = 'main', view?: string, options: BrowserWindowConstructorOptions = {}): Promise<BrowserWindow> {
    const savedOptions = this.configService.getWindowOptions(name)
    const window = new BrowserWindow({
      ...view === 'about'
        ? {
            width: 400,
            height: 300,
          }
        : {
            width: 800,
            height: 600,
          },
      webPreferences: {
        preload: resolve(__dirname, '../preload/index.js'),
      },
      ...view === 'about'
        ? {
            x: 100,
            y: 100,
          }
        : {},
      ...options,
      ...savedOptions,
    })

    await window.loadFile(this.indexHtml, { hash: view })

    // await window.loadURL(`file://${resolve(__dirname, '../renderer/index.html')}${view ? (`#/${view}`) : ''}`, {})
    // window.setWindowButtonVisibility(false)

    // window.webContents.session
    //   .loadExtension(VUEJS_DEVTOOLS, { allowFileAccess: true })
    //   .catch((error) => {
    //     console.error('Failed to load extension', VUEJS_DEVTOOLS, error)
    //   })

    // window.on('quit')
    window.on('close', () => {
      const [x, y] = window.getPosition()
      const [width, height] = window.getSize()
      this.configService.setWindowOptions(name, {
        ...options,
        x,
        y,
        width,
        height,
      })

      console.log('window', name, 'will be closed')
    })

    // window.on('moved', (event) => {
    //   const { sender } = event
    //   const [x, y] = sender.getPosition()
    //   this.configService.setWindowOptions(name, { ...options, x, y })
    //
    //   console.log('moved listener', name, x, y)
    // })
    return window
  }

  sendToMainWindow(channel: string, ...args: any[]) {
    this.mainWindow.webContents.send(channel, ...args)
  }

  private windowOpenHandler: WindowOpenHandler = ({ url }) => {
    if (url.startsWith('https:')) {
      shell.openExternal(url).then(() => {
      })
    }
    return { action: 'deny' }
  }

  print() {
    console.log('print', this.mainWindow)
  }

  async openBrowserView(url: string) {
    if (!this.mainWindow) {
      return
    }

    const mainView = new BrowserView({
      webPreferences: {},

    })
    this.mainWindow.addBrowserView(mainView)

    mainView.setBounds({ x: 42, y: 42, width: 800 - 42, height: 600 - 42 })
    mainView.setAutoResize({ width: true, height: true })

    await mainView.webContents.loadURL(url || 'https://www.baidu.com')
    this.browserView = mainView

    console.log('open', url, this.mainWindow)
    this.print()
  }
}
