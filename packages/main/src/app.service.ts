import { release } from 'os'
import { Injectable } from '@nestjs/common'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { WindowService } from '@main/window/window.service'
import { EventService } from '@main/event/event.service'
import { ConfigService } from '@main/config/config.service'
import { ShortcutService } from '@main/shortcut/shortcut.service'
import { app, session } from 'electron'
// import { VUEJS_DEVTOOLS } from 'electron-devtools-vendor'

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly eventService: EventService,
    private readonly shortcutService: ShortcutService,
    private readonly windowService: WindowService,
  ) {
    console.log('app service initialized')
    // console.log(this.storeService)
  }

  async prependApp() {
    // Disable GPU Acceleration for Windows 7
    if (release().startsWith('6.1')) {
      app.disableHardwareAcceleration()
    }

    // Set application name for Windows 10+ notifications
    if (process.platform === 'win32') {
      app.setAppUserModelId(app.getName())
    }

    if (!app.requestSingleInstanceLock()) {
      app.quit()
      process.exit(0)
    }
  }

  async initApp() {
    console.log('init app')
    console.log(this.windowService)

    this.configService.print()
    this.eventService.registerAppEvents()

    // await session.defaultSession.loadExtension(VUEJS_DEVTOOLS, {
    //   allowFileAccess: true,
    // }).catch((error) => {
    //   console.error('Failed to load extension', VUEJS_DEVTOOLS, error)
    // })
    // installExtension(VUEJS_DEVTOOLS.id)
    //   .then(name => console.log(`Added Extension:  ${name}`))
    //   .catch(err => console.log('An error occurred: ', err))

    await this.windowService.initMainWindow()
    // this.windowService.print()
    this.shortcutService.registered()
    // await Promise.all([
    //   app.whenReady(),
    //   this.windowService.initMainWindow(),
    // ])
    // util.promisify(app.whenReady)
    // module.wrap('aaa')
    // module.
    // net.createServer({})
  }

  getHello(): string {
    return 'Hello World!'
  }

  public getTime(): number {
    return new Date().getTime()
  }
}
