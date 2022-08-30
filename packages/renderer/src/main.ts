import { createApp } from 'vue'
// import { Quasar } from 'quasar'
import App from '@renderer/App.vue'
import router from '@renderer/routes'
import store from '@renderer/stores'
// import { registerStore, store } from '@renderer/stores'
import { ipc } from '@renderer/plugins'

import 'virtual:windi.css'

// Import icon libraries
// import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(router)
app.use(store)
// registerStore()
app.use(ipc)
// app.use(Quasar, {
//   plugins: {}, // import Quasar plugins and add here
// })
app.mount('#app')
// .$nextTick(() => {
//   // window.remove
// }).then(() => {})
