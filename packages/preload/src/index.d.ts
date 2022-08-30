import type { IpcRenderer } from 'electron/renderer'

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
  }
}

export {}
