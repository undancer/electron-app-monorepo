import { Injectable } from '@nestjs/common'
import Store from 'electron-store'

interface StoreType {
  title: string
  mainWindowSize: {
    width: number
    height: number
  }

}

@Injectable()
export class ConfigService {
  private store = new Store<StoreType>({
    defaults: {
      title: 'SPlyr',
      mainWindowSize: {
        width: 800,
        height: 600,
      },
    },
  })

  constructor() {
    console.log('config service initialized')
  }

  print() {
    console.log(this.store.store)
  }

  getWindowOptions(name: string) {
    return this.store.get(`window-${name}-config`, {})
  }

  setWindowOptions(name: string, options: any) {
    this.store.set(`window-${name}-config`, options)
  }

  // clearWindowOptions() {
  //   this.store.reset([''].map(key => `window-${key}-config`))
  // }
}
