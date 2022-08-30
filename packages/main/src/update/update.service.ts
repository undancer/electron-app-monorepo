import { Injectable } from '@nestjs/common'
import { autoUpdater } from 'electron-updater'

@Injectable()
export class UpdateService {
  foo() {
    // autoUpdater.setFeedURL({ url: 'https://github.com/electron-userland/electron-updater' })
    console.log('autoUpdater.setFeedURL.success', autoUpdater)
  }
}
