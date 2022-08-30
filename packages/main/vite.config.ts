import { join } from 'path'
import { builtinModules } from 'module'
import { PluginOption, defineConfig, mergeConfig } from 'vite'
import * as kolorist from 'kolorist'

import tsc from 'rollup-plugin-typescript2'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { command, mode } = env
  console.log(kolorist.green(`config ${command} ${mode}`))
  let config = defineConfig({})
  config = mergeConfig(config, defineConfig({
    root: __dirname,
    esbuild: {
      exclude: join(__dirname, 'src/**/*'),
    },
    plugins: [
      {
        ...tsc({
          include: join(__dirname, 'src/**/*'),
          exclude: join(__dirname, 'src/**/*.spec.ts'),
          typescript: require('typescript'),
          tsconfig: join(__dirname, 'tsconfig.json'),
        }),
        apply: 'build',
      } as PluginOption,
    ],
    build: {
      outDir: join(__dirname, '../../dist/main'),
      emptyOutDir: true,
      minify: false,
      // minify: process.env./* from mode option */NODE_ENV === 'production',
      rollupOptions: {
        input: {
          index: join(__dirname, 'src/main.ts'),
        },
        output: {
          format: 'cjs',
          entryFileNames: () => '[name].js',
        },
        external: [
          ...builtinModules,
          ...Object.keys(pkg.dependencies || {}),
          ...['electron', /electron\/(common|main|renderer)/g],

        ],
      },
    },
  }))
  return config
})
