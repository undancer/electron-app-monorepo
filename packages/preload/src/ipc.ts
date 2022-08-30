import { contextBridge, ipcRenderer } from 'electron'
// import { contextBridge, ipcRenderer } from 'electron/renderer'

// const mapping = (thisObject: any, filter: string[] = ['on']) => {
//   return Object.entries(thisObject)
//     .filter(([name]) => filter.includes(name))
//     .map(([key, value]) => ([key, (value as any).bind(thisObject)]))
//     .reduce((acc, [key, value]) => ({ ...acc, [key]: value }))
// }
//
// mapping(ipcRenderer, ['on'])

const ipc = {
  invoke: ipcRenderer.invoke.bind(ipcRenderer),
  on: ipcRenderer.on.bind(ipcRenderer),
  removeAllListeners: ipcRenderer.removeAllListeners.bind(ipcRenderer),
}

contextBridge.exposeInMainWorld('ipcRenderer', ipc)
contextBridge.exposeInMainWorld('ipc', ipc)
