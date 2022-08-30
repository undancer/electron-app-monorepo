import { useIpcStore } from '@renderer/stores/ipc'
import { createPinia, mapStores } from 'pinia'
import isElectron from 'is-electron'
// import { useStore } from '@renderer/stores/store'
// import { useIpcStore } from '@renderer/stores/ipc'

export * from './ipc'

const appStore = mapStores(useIpcStore)

const store = createPinia()

// export const registerStore = () => {
//   if (isElectron()) {
//     appStore.ipc = useIpcStore()
//   } else {
//     appStore.ipc = new Proxy({}, {} as ProxyHandler<any>)
//   }
//   // appStore.store = useStore()
// }

export {
  store as default,
  appStore,
}
