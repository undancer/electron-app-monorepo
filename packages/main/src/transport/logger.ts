import { Logger } from '@nestjs/common'

// import ElectronLog, { create } from 'electron-log'

class AppLogger extends Logger {
  // log: ElectronLog.ElectronLog
  constructor() {
    super()
    // log = create('app')
  }

  log(message: any, context?: string) {
    // super.log(message, context);
    // this
  }
}

export { AppLogger }
