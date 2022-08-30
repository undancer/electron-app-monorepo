import { IpcResponse } from '@common/types'
import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { tryOnUnmounted } from '@vueuse/core'
import isElectron from 'is-electron'

const { ipcRenderer } = window

interface IpcInstance {
  send: <T = any>(target: string, ...args: any[]) => Promise<IpcResponse<T>>
  on: (event: string, callback: (...args: any[]) => void) => void
}

export const ipcInstance: IpcInstance = {
  send: async <T = any>(target: string, ...args: any[]) => {
    if (isElectron()) {
      const payloads: any[] = args.map(e => toRaw(e))
      const response: IpcResponse<T> = await ipcRenderer?.invoke(target, ...payloads)

      // eslint-disable-next-line no-useless-call
      if (response.hasOwnProperty.call(response, 'error')) {
        throw response.error
      }

      return response
    } else {
      return {}
    }
  },
  on: (event, callback) => {
    if (isElectron()) {
      ipcRenderer?.on(event, (e, ...args) => {
        callback(...args)
      })

      // Use tryOnUnmounted if use @vueuse https://vueuse.org/shared/tryOnUnmounted/
      // if (getCurrentInstance()) {
      //   onUnmounted(() => {
      //     ipcRenderer.removeAllListeners(event)
      //   })
      // }
      tryOnUnmounted(() => {
        ipcRenderer?.removeAllListeners(event)
      })
    }
  },
}

export const useIpcStore = defineStore('ipc', {
  actions: {
    ...ipcInstance,
  },
})
