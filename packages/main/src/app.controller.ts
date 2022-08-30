import { Controller, Get } from '@nestjs/common'

import { WindowService } from '@main/window/window.service'
import { AppService } from '@main/app.service'
import { IpcInvoke } from '@main/transport'
import { app } from 'electron'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly windowService: WindowService,
  ) {
    console.log('AppController')
    Promise.resolve()
      .then(() => this.appService.prependApp())
      .then(() => app.whenReady())
      .then(() => this.appService.initApp())
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello()
  // }

  @IpcInvoke('msg')
  public async handleSendMsg(msg: string): Promise<string> {
    this.windowService.sendToMainWindow('reply-msg', 'this is msg from webContents.send')
    return `The main process received your message: ${msg} at time: ${this.appService.getTime()}`
  }
}
