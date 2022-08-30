import path from 'path'
import { defineConfig, loadConfigFromFile, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { electronRenderer } from 'vite-plugin-electron-config'
import renderer from 'vite-plugin-electron-renderer'
import css from 'vite-plugin-windicss'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import electron from 'vite-plugin-electron'
import * as kolorist from 'kolorist'

// import { builtinModules } from 'node:module'
// import resolve, { lib2esm } from 'vite-plugin-resolve'
// import renderer from 'vite-plugin-electron/renderer'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import base from '../../vite.base.config'
// import pkg from './package.json'
// import pkg from './../../package.json'

const loadConfig = async (env, file, defaults) => {
  const { config } = await loadConfigFromFile(env, path.resolve(__dirname, file))
  return config || defineConfig(defaults)
}

// https://vitejs.dev/config/
export default defineConfig(async (env) => {
  const { command, mode } = env
  console.log(kolorist.green(`config ${command} ${mode}`))
  let config = defineConfig({})

  config = mergeConfig(config, base)

  const mainConfig = await loadConfig(env, '../main/vite.config.ts', {})
  const preloadConfig = await loadConfig(env, '../preload/vite.config.ts', {})

  config = mergeConfig(config, defineConfig({
    root: __dirname,
    plugins: [
      vue(),
      // AutoImport({
      //   imports: [
      //     'vue',
      //     {
      //       'naive-ui': [
      //         'useDialog',
      //         'useMessage',
      //         'useNotification',
      //         'useLoadingBar',
      //       ],
      //     },
      //   ],
      // }),
      // Components({
      //   resolvers: [NaiveUiResolver()],
      // }),
      // electronRenderer(),
      ...electron({
        main: {
          entry: path.join(__dirname, '../main/src/main.ts'),
          vite: mergeConfig(mainConfig, defineConfig({

          })),
        },
        preload: {
          input: {
            index: path.join(__dirname, '../preload/src/index.ts'),
          },
          vite: mergeConfig(preloadConfig, defineConfig({

          })),
        },
      }).filter(({ apply }) => apply !== 'build'),
      // as unknown as PluginOption[],
      ...renderer({

      }).filter(({ apply }) => apply !== 'serve'),

      // resolve(
      //   /**
      //      * Here you can specify other modules
      //      * 🚧 You have to make sure that your module is in `dependencies` and not in the` devDependencies`,
      //      *    which will ensure that the electron-builder can package it correctly
      //      */
      //   {
      //     // If you use the following modules, the following configuration will work
      //     // What they have in common is that they will return - ESM format code snippets
      //
      //     // ESM format string
      //     'electron-store': 'export default require("electron-store");',
      //     // Use lib2esm() to easy to convert ESM
      //     // Equivalent to
      //     /**
      //        * sqlite3: () => `
      //        * const _M_ = require('sqlite3');
      //        * const _D_ = _M_.default || _M_;
      //        * export { _D_ as default }
      //        * `
      //        */
      //     // 'sqlite3': lib2esm('sqlite3', { format: 'cjs' }),
      //     // 'serialport': lib2esm(
      //     //   // CJS lib name
      //     //   'serialport',
      //     //   // export memebers
      //     //   [
      //     //     'SerialPort',
      //     //     'SerialPortMock',
      //     //   ],
      //     //   { format: 'cjs' },
      //     // ),
      //   },
      // ),
    ],
    build: {
      outDir: path.join(__dirname, '../../dist/renderer'),
      emptyOutDir: true,
      minify: false,
      //     sourcemap: true,
      // rollupOptions: {
      //   input: path.join(__dirname, 'index.html'),
      //   // external: [
      //   //   'electron',
      //   //   /electron\/(common|main|renderer)/g,
      //   //   ...builtinModules,
      //   //   ...Object.keys(pkg.dependencies || {}),
      //   // ],
      //   //   output: {
      //   //     manualChunks(id) {
      //   //       if (id.includes('node_modules')) {
      //   //         return 'vendor'
      //   //       }
      //   //     },
      //   //   },
      // },
    },
  }))

  config = mergeConfig(config, defineConfig({
    plugins: [
      css(),
      pages({
        dirs: 'src/views',
        importMode: () => 'sync',
      }),
      layouts({
        importMode: () => 'sync',
      }),
    ],
    build: {
      sourcemap: false,
    },
    // server: {
    //   host: pkg.env.VITE_DEV_SERVER_HOST,
    //   port: pkg.env.VITE_DEV_SERVER_PORT,
    // },
  }))

  return config
})
