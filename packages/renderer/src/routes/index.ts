import { RouteRecordRaw, RouterHistory, createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import isElectron from 'is-electron'
import { IpcResponse } from '@common/types'
import DefaultLayout from '../layouts/default.vue'
import ControlLayout from '../layouts/control.vue'
import SampleLayout from '../layouts/sample.vue'
import Welcome from '../views/welcome.vue'
import Browsing from '../views/browsing.vue'
import Playing from '../views/playing.vue'
import About from '../views/about.vue'
import Control from '../views/control.vue'

const defaultRouteRecord: RouteRecordRaw = {
  path: '',
  redirect: '/welcome',
}

// const history: RouterHistory = createMemoryHistory()
const history: RouterHistory = createWebHashHistory()

// const routes: RouteRecordRaw[] = [defaultRouteRecord]
// for (const [file, { default: component }] of Object.entries(import.meta.globEager('../views/**/*.vue'))) {
//   const name = /(?<name>[^\/]*?)(?:\/(index|default))?.vue/ig.exec(file).groups.name
//   const path = component.name || name // 当vue里script为空时，没有name属性，此时使用正则规则
//   console.log('component', component)
//   routes.push({ path: `/${path}`, component, meta: { layout: 'AppLayoutAbout' } })
// }

let routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  // {
  //   path: '/control',
  //   component: ControlLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: Control,
  //     },
  //   ],
  // }, {
  //   path: '/about',
  //   component: SampleLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: About,
  //     },
  //   ],
  // },
  // {
  //   path: '/browsing',
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: Browsing,
  //     },
  //   ],
  // },
  // {
  //   path: '/playing',
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: Playing,
  //     },
  //   ],
  // },
  // {
  //   path: '/welcome',
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: Welcome,
  //     },
  //   ],
  // },
]
routes = [
  ...routes,
  ...setupLayouts(generatedRoutes),
  defaultRouteRecord,
]
// const routes = setupLayouts(generatedRoutes)
// console.log(routes)

const router = createRouter({
  history,
  routes,
})

router.beforeResolve(async (guard) => {
  if (isElectron()) {
    const response: IpcResponse<any> = await window.ipc?.invoke('route-path', guard.fullPath)
    console.log('router-beforeResolve,', guard, response?.data)
  }
})

export { router as default }
