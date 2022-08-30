import { release } from 'os'
import { Injectable } from '@nestjs/common'
import EventBase from '@main/event/event-base'
import { app } from 'electron'

@Injectable()
export class EventService extends EventBase {
  registerAppEvents() {
    console.log('registerAppEvents')

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

    // eslint-disable-next-line dot-notation
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
  }
}
