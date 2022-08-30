// import { defineStore } from 'pinia'
// import Store from 'electron-store'
import { ipcRenderer } from 'electron'

console.log('???', ipcRenderer)
// electron-store 不能定义在pinia里
// export const useStore = defineStore('store', () => {
//   console.log('use store')
//   const store = new Store()
//   return store
// })
