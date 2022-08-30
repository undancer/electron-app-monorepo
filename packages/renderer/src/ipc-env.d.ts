
import { IpcRenderer } from "electron/renderer";

type Ipc = Pick<IpcRenderer,'invoke'| 'on' | 'removeAllListeners'>

declare global {
  interface Window {
    ipcRenderer?: Ipc
    ipc?: Ipc
  }
}
