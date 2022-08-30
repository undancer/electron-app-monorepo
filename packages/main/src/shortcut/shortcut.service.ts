import { Injectable } from '@nestjs/common'
import { globalShortcut } from 'electron'
import { WindowService } from '../window/window.service'

@Injectable()
export class ShortcutService {
  constructor(
    private readonly windowService: WindowService,
  ) {
  }

  registered() {
    globalShortcut.register('CmdOrCtrl+Shift+J+K+L', async () => {
      await this.windowService.initControlWindow()
    })
  }
}
