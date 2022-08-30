import path from 'path'
import { builtinModules } from 'module'
import { defineConfig, mergeConfig } from 'vite'
import * as kolorist from 'kolorist'
import base from '../../vite.base.config'
// import pkg from './../../package.json'
// import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { command, mode } = env
  console.log(kolorist.green(`config ${command} ${mode}`))
  let config = defineConfig({})
  config = mergeConfig(config, base)
  config = mergeConfig(config, defineConfig({

    root: __dirname,
    plugins: [],
    build: {
      outDir: path.join(__dirname, '../../dist/preload'),
      emptyOutDir: true,
      minify: false,
      rollupOptions: {
        input: {
          index: path.join(__dirname, 'src/index.ts'),
        },
        output: {
          format: 'cjs',
          entryFileNames: () => '[name].js',
        },
        external: [
          ...builtinModules,
          // ...Object.keys(pkg.dependencies || {}),
          ...['electron', /electron\/(common|main|renderer)/g],
        ],
      },
    },
  }))

  // config = mergeConfig(config, defineConfig({
  //   build: {
  //     emptyOutDir: true,
  //     minify: process.env./* from mode option */NODE_ENV === 'production',
  //     // https://github.com/caoxiemeihao/electron-vue-vite/issues/61
  //     sourcemap: 'inline',
  //     rollupOptions: {
  //       external: [
  //         'electron',
  //         /electron\/(common|main|renderer)/g,
  //         ...builtinModules,
  //         // ...Object.keys(pkg.dependencies || {}),
  //       ],
  //     },
  //   },
  // }))

  // config = mergeConfig(config, defineConfig({
  //   root: __dirname,
  //   build: {
  //     outDir: '../../dist/preload',
  //     rollupOptions: {
  //       input: {
  //         // multiple entry
  //         index: join(__dirname, 'src', 'index.ts'),
  //       },
  //       output: {
  //         format: 'cjs',
  //         entryFileNames: () => '[name].cjs',
  //         chunkFileNames: () => '[name].cjs',
  //         assetFileNames: () => '[name].[ext]',
  //         manualChunks: {},
  //       },
  //     },
  //   },
  // }))

  return config
})
