import { Controller } from '@nestjs/common'
// import { MessagePattern, Payload } from '@nestjs/microservices'
import { IpcInvoke } from '@doubleshot/nest-electron-ipc-transport'
import { WindowService } from '@main/window/window.service'
// import { CreateWindowDto } from './dto/create-window.dto'
// import { UpdateWindowDto } from './dto/update-window.dto'

@Controller()
export class WindowController {
  private hidden: boolean

  constructor(private readonly windowService: WindowService) {}

  @IpcInvoke('click')
  foo(index: number) {
    console.log('window clicked', index)
    // windowService.init
    return `data-${index}`
  }

  @IpcInvoke('route')
  route(...args: any[]) {
    this.windowService.sendToMainWindow('route', ...args)
    console.log('window route', ...args)
    return 'send to main window'
  }

  // @MessagePattern('createWindow')
  // create(@Payload() createWindowDto: CreateWindowDto) {
  //   return this.windowService.create(createWindowDto)
  // }
  //
  // @MessagePattern('findAllWindow')
  // findAll() {
  //   return this.windowService.findAll()
  // }
  //
  // @MessagePattern('findOneWindow')
  // findOne(@Payload() id: number) {
  //   return this.windowService.findOne(id)
  // }
  //
  // @MessagePattern('updateWindow')
  // update(@Payload() updateWindowDto: UpdateWindowDto) {
  //   return this.windowService.update(updateWindowDto.id, updateWindowDto)
  // }
  //
  // @MessagePattern('removeWindow')
  // remove(@Payload() id: number) {
  //   return this.windowService.remove(id)
  // }

  @IpcInvoke('router-before-each')
  handleRouterBeforeEach(...args: any) {
    console.log('handleRouterBeforeEach', args)
    return 'handleRouterBeforeEachResponse'
  }

  @IpcInvoke('router-after-each')
  handleRouterAfterEach(...args: any) {
    console.log('handleRouterAfterEach', args)
    return 'handleRouterAfterEachResponse'
  }

  @IpcInvoke('router-before-resolve')
  handleRouterBeforeResolve(...args: any) {
    console.log('handleRouterBeforeResolve', args)
    return 'handleRouterBeforeResolveResponse'
  }

  @IpcInvoke('route-path')
  handle(path: string) {
    // const url = new URL(path)
    console.log('route-path-main', path, this.windowService)
    // this.windowService.print()
    // this.windowService.openBrowserView('https://www.baidu.com')
    // .searchParams
    return true
  }

  @IpcInvoke('toggle')
  toggle(hidden: boolean) {
    this.hidden = hidden
    console.log('toggle clicked', this.hidden, this.windowService)
  }
}
