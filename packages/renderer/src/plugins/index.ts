import {
  // App,
  Plugin,

  // inject,
  provide,
} from 'vue-demi'

export const ipc: Plugin = (
  // app: App, ...options: any[]
): any => {
  // app.config.globalProperties.ipc = {}

  provide('ipc', {})
  // const ipc = inject('ipc')
  // ipc
}
